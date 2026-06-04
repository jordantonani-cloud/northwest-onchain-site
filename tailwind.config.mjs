/**
 * Northwest Onchain — brand tokens (Brand Book v1.0, June 2026) as first-class
 * Tailwind utilities. Canonical hex values live here and in the CSS custom
 * properties in src/styles/global.css (kept in sync). Components reference
 * tokens, never raw hex.
 *
 * Contrast note: per Brand Book §3.3, Signal mint is for UI/large/dark — never
 * small body text on light (3.5:1, fails AA). Small accent text on light uses
 * `signal.dim` (#0E7458, ~5.0:1 on mist). See README §Accessibility.
 *
 * @type {import('tailwindcss').Config}
 */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#10221C', // darkest bg; primary text on light
        evergreen: '#12463A', // primary brand color; dark UI sections, slopes
        moss: '#1C5E4A', // mid-green; hovers, secondary surfaces
        signal: {
          DEFAULT: '#2FBF98', // accent on light/neutral; apex node, small CTAs
          bright: '#34E0B5', // accent on dark; CTAs, glows, links on dark
          dim: '#0E7458', // AA-safe mint for small accent text on light (~5.0:1 on mist)
        },
        mist: '#EEF1ED', // primary light background
        fog: '#AEC2BA', // muted sage; secondary text on dark
        graphite: '#33454B', // secondary text on light; borders
        copper: '#C58A5B', // warm heritage accent — sparingly (<=5% of a layout)
        white: '#FBFDFC', // pure text/elements on dark
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
