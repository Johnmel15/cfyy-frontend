/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0077B6", // Medical blue
        secondary: "#48CAE4", // Light blue
        accent: "#03045E", // Dark blue
        light: "#F8FAFC", // Light background
      },
    },
  },
  plugins: [],
}