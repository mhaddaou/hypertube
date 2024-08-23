/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
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
      },
      animation: {
        'slide': 'slide 1.45s ease',
      },
    },
  },
  plugins: [],
};
