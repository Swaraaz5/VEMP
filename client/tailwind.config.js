/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      veloceblue:'#41a5da',
      approved:'#13EF4B',
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
