/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#102747',
          dark: '#0A192F',
          light: '#16355F',
        },
        primary: {
          DEFAULT: '#174E87',
          light: '#1F63A8',
          dark: '#123D6B',
        },
        crimson: {
          DEFAULT: '#A92F38',
          hover: '#8E252D',
          light: '#FDF2F3',
        },
        gold: {
          DEFAULT: '#C7A45B',
          light: '#FBF7EE',
        },
        surface: '#F5F6F8',
        ink: {
          DEFAULT: '#202B3A',
          muted: '#687386',
        }
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', '"Manrope"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1280px',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        ticker: 'ticker 36s linear infinite',
      },
    },
  },
  plugins: [],
}
