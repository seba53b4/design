/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
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
      },
    },
  },
  plugins: [],
};
