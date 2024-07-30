/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
         limegreen: '#c9f331',
         customBlue: '#9792e3'
      },
      fontFamily: {
        ubuntu: ['Ubuntu Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
