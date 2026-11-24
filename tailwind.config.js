export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
        serif: ['"Instrument Serif"', '"Times New Roman"', 'Times', 'serif'],
      },
      colors: {
        // Monochrome system: one background, one ink, greys, one cool accent.
        ink: {
          DEFAULT: '#ffffff',
          soft: '#d8d8d8',
          muted: '#9a9a9a',
          faint: '#6b6b6b',
        },
        surface: {
          DEFAULT: '#000000',
          raised: '#0a0a0a',
          card: '#0f0f0f',
        },
        line: {
          DEFAULT: 'rgba(255, 255, 255, 0.12)',
          strong: 'rgba(255, 255, 255, 0.22)',
        },
        accent: '#bcd0ff',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
