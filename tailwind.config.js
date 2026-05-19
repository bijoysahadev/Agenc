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
      }

    },
  },
  plugins: [],
}