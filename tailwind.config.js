/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "#0A1828", 
        "secondary" : "#178582",
        "tertiary" : "#BFA181",
      }
    },
    screens: {
      'lg': {'max': '2023px'},

      'sm': {'max': '639px'},
    },
  },
  plugins: [],
}






/** 
 * old colors
"primary" : "#0A192F", 
"secondary" : "#F97316",
"tertiary" : "#5406BB",
*/