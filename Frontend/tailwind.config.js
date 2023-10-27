/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'diffWhite':"#e1e1e1",
        "diffBlack":"#0e0f11"

      }
    },
  },
  plugins: [],
}

