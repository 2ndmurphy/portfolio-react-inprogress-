/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/public/images/nasa-Q1p7bh3SHj8-unsplash.jpg')",
        'second-pattern': "url('/public/images/guillermo-ferla-lLExhYl-cXQ-unsplash.jpg')",
        'third-pattern': "url('/public/images/vincenzo-malagoli-flfhAlEwDq4-unsplash.jpg')",
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

