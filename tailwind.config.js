/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: ['./src/**/*.{vue,js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      DM: ['DM Sans', 'DM Sans Pro', 'sans-serif'],
      Roboto: ['Roboto Sans Pro', 'sans-serif']
    },
    colors: {
      'app-base': '#000000',
      'app-principal': '#0e402d',
      'app-secondary': '#9fcc2e',
      'app-base-grey': '#5a6650',
      'app-principal-grey': '#295135',
      'app-white': '#FFF'
    }
  },
  plugins: []
}
