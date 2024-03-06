/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.js"
  ],
  theme: {
    colors: {
      'black': '#171219',
      'gray': '#627C85',
      'white': '#F0F7F4',
      'red': '#D62246',
      'red-light': '#FF5A5F'
    },
    fontFamily: {
      sans: ["Kode Mono", "monospace"],
    },
    extend: {
      gridTemplateRows: {
        layout: '1fr 50px'
      },
      gridTemplateColumns: {
        layout: '1fr 50px'
      }
    },
  },
  plugins: [],
}

