/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/*.{html,js}",
    "./public/**/*.{html,js}",
  ],
  theme: {
    extend: {
        "fontFamily" : {
            "quicksand" : ["Quicksand","san-serif"]
        }
    },
  },
  plugins: [],
}

