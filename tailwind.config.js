/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./imports/**/*.{html,js, jsx,ts,tsx}",
    "./client/main.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")({
      // strategy: 'base', // only generate global styles
      strategy: 'class', // only generate classes
    }),
  ],
}