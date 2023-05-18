/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        monserrat: ['"Monserrat"'],
      },
      colors: {
        dark: {
          50: "#E8E8E8",
          100: "#CFCFCF",
          200: "#9E9E9E",
          300: "#707070",
          400: "#404040",
          500: "#0F0F0F",
          600: "#0D0D0D",
          700: "#0A0A0A",
          800: "#050505",
          900: "#030303",
        },

        red: {
          50: "#FDEDEE",
          100: "#FAD6D9",
          200: "#F5B2B8",
          300: "#F08992",
          400: "#EB606C",
          500: "#E63946",
          600: "#CC1A29",
          700: "#9A131F",
          800: "#680D15",
          900: "#32060A",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
