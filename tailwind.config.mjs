/**
 * Northwest Onchain — brand tokens as first-class Tailwind utilities.
 * Canonical hex values live here and in the CSS custom properties in
 * src/styles/global.css (kept in sync). Components reference tokens, never raw hex.
 *
 * Contrast note: `onchain-dim` is intentionally darker than the prototype's
 * #1F8D72 (which failed WCAG AA on the light `mist` background at 3.6:1).
 * #0E7458 clears AA for small text at ~5.1:1. See README §Accessibility.
 *
 * @type {import('tailwindcss').Config}
 */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#08211B', // deep evergreen near-black — primary dark bg
        pine: '#0F3D31', // section backgrounds, depth
        moss: '#1C5E4A', // mid-greens, hovers
        slate: '#33454B', // granite gray — text on light, borders
        fog: '#AEC2BA', // muted sage — secondary text on dark
        mist: '#EEF2EF', // off-white — light section bg
        onchain: {
          DEFAULT: '#36E2B4', // luminous teal-mint — accent, CTAs, glow
          dim: '#0E7458', // AA-safe teal for accent text on light bg (~5.1:1 on mist)
        },
        copper: '#C9743D', // warm PNW secondary — sparingly
        white: '#FBFDFC',
      },
      fontFamily: {
        display: ['"Space Grotesk Variable"', '"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono Variable"', '"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        content: '1160px',
      },
      borderRadius: {
        brand: '14px',
      },
      letterSpacing: {
        eyebrow: '0.22em',
      },
    },
  },
  // No @tailwindcss/typography — the article reading surface is hand-styled
  // as `.prose` in global.css (the plugin's .prose rules conflicted with it).
  plugins: [],
};
