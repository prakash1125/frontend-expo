/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {

    fontFamily: {
      "font-family": "Roboto,sans-serif",
      // "font-weight": "500",
    },

    extend: {

      animation: {
        pulse: 'pulse 1.8s ease-in-out infinite', // Customize the animation properties
      },

      colors: {
        borderColor: "var(--border)",
        mainbg: "var(--main-background)",

      },

      textColor: {
        skin: {
          primary: "var( --text-primary)",
          navtext: "var(--text-nav)",
          secondary: "var(--text-secondary)",
          white: "var(--text-white)",
          blue: "var(--text-blue)",
          pink: "var(--text-pink)",
          dark: "var( --text-dark)",
          balance: "var(--text-balance)"
        },
      },

      backgroundColor: {
        skin: {
          main: "var(--main-background)",
          navtop: "var(--nav-colortop)",
          sidebarbg: "var(--sidebar-color)",
          nav: "var( --nav-color)",
          cardhead: "var(--card-heading-bg-color)",
          cardsmall: "var( --card-small-card)",
          imgbg: "var( --img-bg-color)",
          hovercolor: "var(--hover-color)",
          hovercolorsecondary: "var(--hover-color-secondary)",
          marketcard: "var(--market-runner-card)",
          sidenavhover: "var( --side-navbar-hover)",
          sidenavhoversecondary: "var(--side-navbar-hover-secondary)",
          mainNavbarHoverColor:"var(--main-navbar-hover)",
        }
      },

    },
  },
  plugins: [],
}



