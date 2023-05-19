/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    extend: {
      colors:{
        "dark-purple":"#000",
        "nav-bg":"#343a40",
        "light-white":"rgba(255,255,255,0.17)"
      },
      fontFamily: {
        "font-family":"Roboto,sans-serif",
        // "font-weight": "500",
      }
    },
  },
  plugins: [],
}

  

