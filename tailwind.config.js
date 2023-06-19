/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          400: "#C87C6D",
        },
        secondary: {
          400: "#FEDBC5",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
