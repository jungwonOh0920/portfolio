/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'brown-400': '#964B00',
        'default-400': '#D3D3D3'
      }
    },
  },
  safelist: [
    {
      pattern: /bg-(red|pink|brown|yellow|gray|green|blue|orange|purple|default)-(100|400|500|700)/
    }
  ],

  plugins: []
}
