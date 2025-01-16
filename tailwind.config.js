/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-background': '#1C1D21',
        'custom-primary': '#925FE2',
        'custom-secondary': '#9C6FE4',
        'custom-tertiary': '#333437',
        'appbar-background': '#232429',
        'purple-light': '#AE00E2',
        'appbar-text-unselected': '#D9CFFA',
      },
    },
  },
  plugins: [],
}
