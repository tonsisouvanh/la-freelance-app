/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        notosans: ["Noto Sans Lao", "sans - serif"],
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
