/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      "1sm": "400px",
      ...defaultTheme.screens,
    },
    extend: {},
    colors: {
      "melon-green": "#6bffab",
      "dark-gray": "#1c1c1c",
      "gray-regular": "#3b3b3b",
      "light-gray": "#adadad",
    },
  },

  plugins: [],
};
