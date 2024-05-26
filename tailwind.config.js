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
      'app-base': '#1D1D1D',
      'app-base-light': '#3E3E3E',
      'app-base-dark': '#111111',
      'app-base-green': '#2D3A3A',
      'app-principal': '#248232',
      'app-secondary': '#2BA84A',
      'app-white': '#FCFFFC'
    }
  },
  plugins: []
}
