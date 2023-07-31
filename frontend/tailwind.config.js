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
      colors: {
        'wefit-brown': '#5c210b',
        'wefit-brown-hover': '#3e1606',
        'wefit-yellow': '#f5c400',
        'wefit-yellow-hover': '#e3b600',
      }
    }
  },
  plugins: [],
}

