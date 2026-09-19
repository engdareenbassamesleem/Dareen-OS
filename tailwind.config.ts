import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        graphite: {
          950: '#050608',
          900: '#0b0d11',
          850: '#11151b',
          800: '#171c24',
        },
        silver: {
          50: '#f6f8fb',
          100: '#e7ecf2',
          300: '#aeb9c6',
          500: '#6f7b89',
        },
        cyan: {
          electric: '#19d8ff',
          soft: '#8be9ff',
        },
      },
      boxShadow: {
        cyan: '0 0 36px rgba(25, 216, 255, 0.18)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'SFMono-Regular', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
