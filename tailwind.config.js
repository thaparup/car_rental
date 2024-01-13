/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // "./src/assets/**/*.{png,jpg,svg}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        pmColor: "#ff4d30",
        pmBlack: "#010103",
        bg: "rgb(249 250 251)",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/logo/logo.png')",
      },
    },
    screens: {
      xsm: { min: "300px", max: "639px" },
      sm: { min: "640px", max: "767px" },
      md: { min: "768px", max: "1023px" },
      lg: { min: "1024px", max: "1279px" },
      xl: { min: "1280px" },
    },
    boxShadow: {
      boxShadow: "rgba(0, 0, 0, 0.24) 01px 4px 12px",
      boxShadowRed: "#ff4d30 01px 4px 4px",
      boxShadowRedHover: "#ff4d30 1px 4px 10px 0px",
    },
  },

  plugins: [],
};
