/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        signature: ["Great Vibes"],
        classix: ["Noto Sans"]
      },
      spacing: {
        'custom-top': '8rem',  // Custom padding value for smaller screens
      },
      screens: {
        'xs': {'max': '400px'}, // Custom screen size breakpoint at 400px
      },
    },
  },
  plugins: [],
}
