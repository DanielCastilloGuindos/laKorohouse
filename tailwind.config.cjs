/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'koro': {
          100: 'rgb(102,6,198)',
          200: 'rgb(90,6,188)',
          300: 'rgb(78,7,176)',
          400: 'rgb(66,7,164)',
          500: 'rgb(54,8,150)',
          600: 'rgb(42,8,130)',
          700: 'rgb(38,9,122)',
          800: 'rgb(24,9,92)',
          900: 'rgb(28,10,64)',
        },},
    },
  },
  plugins: [],
}
