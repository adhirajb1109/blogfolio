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
    extend: {
      colors: {
        turquoise: {
          50: "#effdfd",
          100: "#d2f7f9",
          200: "#aaf0f4",
          300: "#76e4ec",
          400: "#39d0dd",
          500: "#14b4c6",
          600: "#0892a2",
          700: "#097684",
          800: "#0b5e6b",
          900: "#0d4f5a",
        },
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
};
