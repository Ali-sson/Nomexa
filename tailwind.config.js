/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        primary: "#78BE44",
        "dark-green": "#046B12",
        "light-green-tint": "#F5F9F2",
      },
    },
  },
  plugins: [],
};


// // Color name	Tailwind class	Usage
// Primary Green #78BE44	bg-primary	Buttons and highlights
// Dark Green #046B12	bg-dark-green	Headings, navigation hover states
// Light Green Tint #F5F9F2	bg-light-green-tint	Section backgrounds