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
        formBorderColor: "#ccd7e6",
        formColor: "#878585",
        pmGray: "#777777",
        bgWhite: "rgba(255, 255, 255, 0.92)",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/logo/logo.png')",
      },
    },
    screens: {
      xsm: { min: "300px", max: "639px" },
      sm: { min: "639px", max: "767px" },
      md: { min: "767px", max: "1023px" },
      lg: { min: "1024px", max: "1279px" },
      xl: { min: "1280px", max: "1390px" },
    },
    boxShadow: {
      boxShadow: "rgba(0, 0, 0, 0.24) 01px 4px 12px",
      boxShadowRed: "0 10px 15px 0 rgba(255, 83, 48, 0.35)",
      boxShadowRedHover: "#ff4d30 1px 8px 10px 0px",
      boxShadowRedReserveNow: "6px 6px 0 #efe9e9",
      bosShadownTestimonial: "0 20px 40px 0 rgba(0, 0, 0, 0.08)",
      boxShadowTeam: " 0px 20px 10px 0px rgba(0, 0, 0, 0.08)",
    },
  },

  plugins: [],
};
