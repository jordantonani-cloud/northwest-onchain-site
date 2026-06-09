/**
 * Shared motion runtime (brief §3). Bundled by Astro so the CSP can stay
 * `script-src 'self'`. Pure progressive enhancement:
 *  - adds `.js` to <html> so the CSS reveal-gating only hides content when JS runs
 *  - reveals `.fade-rise` / `.drift-in` on scroll via IntersectionObserver
 *  - counts `[data-countup]` numbers from 0 → value once, on view
 * Under prefers-reduced-motion (or no IO support) everything resolves to its
 * final visible state immediately — server-rendered copy is never JS-gated.
 */

const root = document.documentElement;
root.classList.add('js');

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Reveal an element and run any count-up it owns. */
function reveal(el: Element): void {
  el.classList.add('in');
  el.querySelectorAll<HTMLElement>('[data-countup]').forEach(runCountUp);
  if (el.matches('[data-countup]')) runCountUp(el as HTMLElement);
}

/** Animate the numeric portion of an element's text from 0 → its final value. */
function runCountUp(el: HTMLElement): void {
  if (el.dataset.counted) return;
  el.dataset.counted = '1';

  const finalText = (el.dataset.countup || el.textContent || '').trim();
  const match = finalText.match(/-?[\d,]*\.?\d+/);
  if (!match || reduceMotion) {
    el.textContent = finalText;
    return;
  }

  const numStr = match[0];
  const target = parseFloat(numStr.replace(/,/g, ''));
  const decimals = (numStr.split('.')[1] || '').length;
  const grouped = numStr.includes(',');
  const prefix = finalText.slice(0, match.index);
  const suffix = finalText.slice((match.index ?? 0) + numStr.length);

  const duration = 1100;
  const start = performance.now();
  const fmt = (v: number) => {
    const fixed = v.toFixed(decimals);
    return grouped
      ? Number(fixed).toLocaleString('en-US', { minimumFractionDigits: decimals })
      : fixed;
  };

  function tick(now: number): void {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
    el.textContent = prefix + fmt(target * eased) + suffix;
    if (t < 1) requestAnimationFrame(tick);
    else el.textContent = finalText;
  }
  requestAnimationFrame(tick);
}

const animated = Array.from(document.querySelectorAll('.fade-rise, .drift-in, [data-countup]'));

// Index children inside stagger containers for the CSS delay var.
document.querySelectorAll('[data-stagger]').forEach((container) => {
  container.querySelectorAll<HTMLElement>('.fade-rise').forEach((child, i) => {
    child.style.setProperty('--i', String(i));
  });
});

// Sticky nav settles into a defined bar once the page is scrolled.
const nav = document.querySelector('.nav');
if (nav) {
  const onScroll = () => nav.classList.toggle('nav--scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

if (reduceMotion || !('IntersectionObserver' in window)) {
  animated.forEach(reveal);
} else {
  const io = new IntersectionObserver(
    (entries, obs) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          reveal(entry.target);
          obs.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.05 }
  );
  animated.forEach((el) => io.observe(el));
}
