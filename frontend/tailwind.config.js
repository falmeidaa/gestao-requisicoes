/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
      colors: {
        'wefit-brown': '#5c210b',
        'wefit-brown-hover': '#3e1606',
        'wefit-yellow': '#f5c400',
        'wefit-yellow-hover': '#e3b600',
        'gray-800': '#262423',
        'gray-500': '#fbecb20f',
        'gray-300': '#B5A9A3',
        'gray-100': '#FFFDF8'
      }
    }
  },
  plugins: [],
}

