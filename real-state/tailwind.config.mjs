/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#3b4862",
        secondary: "#6277a1",
      },
      fontSize: {
        18: "18px",
        16: "16px",
      },
      fontFamily: {
        "open-sans": ["Open Sans", "Roboto", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      maxWidth: {
        custom: "1200px",
      },
      backgroundImage: {
        "header-gradient":
          "linear-gradient(90deg, rgba(59, 72, 98, .9) 0%, rgba(59, 72, 98, .9)), url('/img/header_bg.jpg')",
        "featured-gradient":
          "background-image: linear-gradient(90deg, transparent 0, transparent 50%, #3b4862 0, #3b4862), url(../img/destacada.jpg)",
      },
    },
  },
  plugins: [],
};
