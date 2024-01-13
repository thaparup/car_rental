/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // "./src/assets/**/*.{png,jpg,svg}",
  ],
  theme: {
    extend: {
      colors: {
        pmColor: "#ff4d30",
        pmBlack: "#010103",
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
  },

  plugins: [],
};
