/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.js"
  ],
  theme: {
    extend: {
      colors: {
        'icon-black': '#111',
        'icon-gray': '#333',
        'icon-light-gray': '#f4f4f4',
      },
      fontFamily: {
        'sans': ['Helvetica Neue', 'sans-serif'],
      },
      backgroundImage: {
        'rwb': "url('images/RWB.png')",
      }
    },
  },
  plugins: [],
} 