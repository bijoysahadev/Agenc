/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
        'inter': [ "Inter", "sans-serif"],
      },
        colors: {
        'primary': '#6A4DF4',
        'secondary': '#737373',
        'dark' : ' #151515'
      },
      maxWidth : {
         "container" : "1320px"
      },
      boxShadow : {
        'bijoy' : "0 6px 35px 0px rgba(0,0,0,0.06)"
      }

    },
  },
  plugins: [],
}