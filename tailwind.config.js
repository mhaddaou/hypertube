const { transform } = require("typescript");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
const { useState } = require("react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
  theme: {

    backgroundImage: {
      'profile-bg': "url('https://s3-alpha-sig.figma.com/img/86f6/5550/6002f38b868fe510e6b42849dd283513?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y4ife4o2Sawdsi~kYS4wxeKK4iorNPw8O5doMQJHH9fV6aj34HyId6ak1RezaFw5SU5xUNLM02C4Qy3nLrr8jJtzzEbRVOrOdXKmcnr5JCLW-j5E4y6JfO2wkrBN5BhgghSWE~A~V17hQO5KsvHRagtn9J0~t8AbtGf5-S1AHx9E9flv-Gz0FDZBI74wmiC0CvWHIF9nvJBpT613KJ4Xg9lPPitaRDIiMa14dbr12SwoqzpUn-E8vP-py3YcddQi4II7Ct78ZtXVUyetfmm~VM53x8XDao5CdpZtJPX894jo9rsvjWtLWMlCelXvePqAN90uNJ7AOVm0UFOcYMVsSQ__')",
    },
    extend: {
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '6rem',
      },
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
        lemonada: ["Lemonada", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        praise: ["Praise", "sans-serif"],
        inter: ["Roboto", "sans-serif"],
        "lexend-Deca": ["Lexend Deca", "sans-serif"],
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: `translateX(-320px)` },
        },
        slide1: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: `translateX(-220px)` },
        },
        slide2: {
          "0%": { transform: "translateX(-300px)" },
          "100%": { transform: "translateX(0)" },
        },
        down: {
          "0%": { transform: "translateY(-300px)" },
          "100%": { transform: "translateY(0)" },
        },
        up: {
          "0%": { transform: "translateY(400px)" },
          "100%": { transform: "translateY(0)" },
        },
        left: {
          "0%": { transform: "translateX(1500px)" },
          "100%": { transform: "translateX(0)" },
        },
        actionMoviesInc: {
          "0%": { transform: "translateX(-2000px)" },
          "100%": { transform: "translateX(0)" },
        },
        actionMoviesDec: {
          "0%": { transform: "translateX(2000px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        slide: "slide 1.45s ease",
        slide1: "slide1 1.45s ease",
        "fade-right": "slide2 1.45s ease",
        "fade-down": "down 1.45s ease",
        "fade-up": "up 1.45s ease",
        "fade-left": "left 3.45s ease",
        "fade-actionMoviesInc": "actionMoviesInc 3.45s ease",
        "fade-actionMoviesDec": "actionMoviesDec 3.45s ease",
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
