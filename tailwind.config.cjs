const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {},
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
  safelist: ["dark:bg-gray-900", "dark:text-gray-100"],
};
