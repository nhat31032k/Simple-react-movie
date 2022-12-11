/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{react,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "body": ["DM San", "sans-serif"],
      },
      colors: {
        primary: "#529BFB",
        secondary: "#6f00ff",
      }
    },
  },
  plugins: [],
}
