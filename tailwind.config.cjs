/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Poppins", "sans-serif"],
        stix: [" STIX Two Text", "sans-serif"],
      },
    },
  },
  plugins: [],
};
