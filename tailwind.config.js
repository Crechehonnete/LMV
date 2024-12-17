/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        roboto: ['Roboto', 'Sans-Serif'],
        lora: ['Lora', 'Serif'],
        poppins: ['Poppins', 'sans-Serif'],
        rubik: ['Rubik Wet Paint', 'cursive'],


      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}