/**
 * Shared motion runtime (brief §3). Served from /public as an external file so
 * the production CSP can stay `script-src 'self'` (Astro inlines bundled
 * <script> blocks, which a strict CSP blocks). Pure progressive enhancement:
 *  - adds `.js` to <html> so CSS reveal-gating only hides content when JS runs
 *  - reveals `.fade-rise` / `.drift-in` on scroll via IntersectionObserver
 *  - counts `[data-countup]` numbers from 0 → value once, on view
 *  - settles the sticky nav into a defined bar on scroll
 * Under prefers-reduced-motion (or no IO support) everything resolves to its
 * final visible state immediately — server-rendered copy is never JS-gated.
 */
(function () {
  document.documentElement.classList.add('js');

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function reveal(el) {
    el.classList.add('in');
    el.querySelectorAll('[data-countup]').forEach(runCountUp);
    if (el.matches('[data-countup]')) runCountUp(el);
  }

  function runCountUp(el) {
    if (el.dataset.counted) return;
    el.dataset.counted = '1';

    var finalText = (el.dataset.countup || el.textContent || '').trim();
    var match = finalText.match(/-?[\d,]*\.?\d+/);
    if (!match || reduceMotion) {
      el.textContent = finalText;
      return;
    }

    var numStr = match[0];
    var target = parseFloat(numStr.replace(/,/g, ''));
    var decimals = (numStr.split('.')[1] || '').length;
    var grouped = numStr.includes(',');
    var prefix = finalText.slice(0, match.index);
    var suffix = finalText.slice(match.index + numStr.length);

    var duration = 1100;
    var start = performance.now();
    function fmt(v) {
      var fixed = v.toFixed(decimals);
      return grouped
        ? Number(fixed).toLocaleString('en-US', { minimumFractionDigits: decimals })
        : fixed;
    }
    function tick(now) {
      var t = Math.min((now - start) / duration, 1);
      var eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      el.textContent = prefix + fmt(target * eased) + suffix;
      if (t < 1) requestAnimationFrame(tick);
      else el.textContent = finalText;
    }
    requestAnimationFrame(tick);
  }

  var animated = Array.prototype.slice.call(
    document.querySelectorAll('.fade-rise, .drift-in, [data-countup]')
  );

  // Index children inside stagger containers for the CSS delay var.
  document.querySelectorAll('[data-stagger]').forEach(function (container) {
    container.querySelectorAll('.fade-rise').forEach(function (child, i) {
      child.style.setProperty('--i', String(i));
    });
  });

  // Sticky nav settles into a defined bar once the page is scrolled.
  var nav = document.querySelector('.nav');
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle('nav--scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  if (reduceMotion || !('IntersectionObserver' in window)) {
    animated.forEach(reveal);
  } else {
    var io = new IntersectionObserver(
      function (entries, obs) {
        for (var i = 0; i < entries.length; i++) {
          if (entries[i].isIntersecting) {
            reveal(entries[i].target);
            obs.unobserve(entries[i].target);
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 }
    );
    animated.forEach(function (el) {
      io.observe(el);
    });
  }
})();
