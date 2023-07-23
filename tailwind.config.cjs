/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        ...defaultTheme.screens,
        xs: "480px",
        xxs: "375px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
};
