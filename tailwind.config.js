/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        torch: {
          50: "#FFB1C9",
          100: "#FF76A0",
          200: "#FF4E85",
          300: "#FF276A",
          400: "#FF145D",
          500: "#FF004F",
          600: "#EB0049",
          700: "#D80043",
          800: "#C4003D",
          900: "#B10037",
        }
      }
    },
  },
  plugins: [],
}
