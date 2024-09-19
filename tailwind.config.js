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
        'custom-top': '16rem', // Custom padding value
      },
      screens: {
        'sm': '260px', // Custom screen size for small devices
      },
    },
  },
  plugins: [],
}
