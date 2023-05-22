/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{html,vue,js}"],
  darkMode: "class",
  theme: {
      extend: {
        keyframes: {
          
        },
        animation: {
          'spin-slow': 'spin 4s linear infinite',
        },
      },
  },
  plugins: [],
}