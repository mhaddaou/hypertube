const { transform } = require('typescript');
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "color-primary": "#FB9722",
        "color-secondary": "#1B0303",
        "color-gray": "#A7B5BE",
        "color-white": "#fff",
        background: "#0D0C0F",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          md: "50px",
        },
      },
      fontFamily: {
        "marck-script": ["Marck Script", "sans-serif"],
        "lemonada": ["Lemonada", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        praise: ["Praise", "sans-serif"],
        inter: ["Roboto", "sans-serif"],
        "lexend-Deca": ["Lexend Deca", "sans-serif"],
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-320px)' },
        },
        slide2: {
          "0%" : {transform: 'translateX(-300px)'},
          '100%': {transform: 'translateX(0)'}
        },
        down:{
          "0%" : {transform: 'translateY(-300px)'},
          '100%': {transform: 'translateY(0)'}
        },
        up:{
          "0%" : {transform: 'translateY(400px)'},
          '100%': {transform: 'translateY(0)'}
        }
      },
      animation: {
        'slide': 'slide 1.45s ease',
        'fade-right': 'slide2 1.45s ease',
        'fade-down': 'down 1.45s ease',
        'fade-up': 'up 1.45s ease',

      },
      
    },
  },
  plugins: [
    require('tailwind-scrollbar'),addVariablesForColors,
  ],
};


function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}



