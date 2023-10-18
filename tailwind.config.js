/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        "other" : {"min" : '340px', "max" : '1200px'}
      }
    },
  },
  plugins: [],
}

