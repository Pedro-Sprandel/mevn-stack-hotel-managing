/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'gray': '#0F1A20',
      'salmon': '#E2856E',
      'light': '#E0FBFC'
    },
    extend: {}
  },
  plugins: [],
}

