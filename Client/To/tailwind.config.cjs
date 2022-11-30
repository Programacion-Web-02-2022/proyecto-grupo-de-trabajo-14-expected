/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index2.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#64DD17",
        secondary: "#EAEAFC",
        footer: "#2E3E5C",
      },

      backgroundImage: {
        'fondo': "url('./public/fondo.png')"
      },

      fontFamily: {
        'Merriweather': ['Merriweather'],
        'Roboro': ['Roboto']
      }
  },
  plugins: [],
}
}
