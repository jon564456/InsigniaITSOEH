/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#1F3A68",
        secondary:"#4EB1CB"
      }
    },
  },
  plugins: [],
}