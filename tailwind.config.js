/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{html,vue,js}"],
  darkMode: "class",
  theme: {
      extend: {
        keyframes: {
          
        },
        animation: {
          'spin-slow': 'spin 10s linear infinite',
        },
      },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}