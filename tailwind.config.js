/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/assets/img/nasa-Q1p7bh3SHj8-unsplash.jpg')",
        'second-pattern': "url('./src/assets/img/guillermo-ferla-lLExhYl-cXQ-unsplash.jpg')",
        'third-pattern': "url('./src/assets/img/vincenzo-malagoli-flfhAlEwDq4-unsplash.jpg')",
      },
      backgroundPosition: {
        'center-center': 'center center',
      },
      colors: {
        primary : {
          DEFAULT: '#E1F0DA',
        }
      },
    },
  },
  plugins: [
    require('daisyui')
  ],
}

