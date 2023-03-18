/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    ],
  theme: {
    fontFamily:{
      'inter':['inter'],
      'sans':['Poppins']
    },
    extend: {
      colors:{
        'primary':'#212529',
        'second':'#212429',
        'cream' :'#B19973',
        'trit':'#1D2025',
      }
    },
  },
  plugins: [],
}
