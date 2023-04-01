/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
        manRope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
