/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#111828',
          hover: '#111828'
        },
        secondary: {
          DEFAULT: '#ffffff',
          hover: '#ffffff'
        },
        dark: {
          DEFAULT: '#111828',
          hover: '#111828'
        },
        light: {
          DEFAULT: '#7b818f',
          hover: '#7b818f'
        },
        white: '#FFFFFF'
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'slide-up': 'slide-up 0.6s ease-out forwards',
        'slide-in': 'slide-in 0.6s ease-out forwards',
        'bounce-slow': 'bounce-slow 2s infinite',
      },
    },
  },
  plugins: [],
}