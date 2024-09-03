/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      maxWidth: {
        custom: "1200px",
      },
      colors: {
        primary: "#8ed3cc",
        secondary: "#e082a8",
        grey: "#979797",
        light_grey: "#f8f8f8",
      },
      fontFamily: {
        italianno: ["Italianno", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
