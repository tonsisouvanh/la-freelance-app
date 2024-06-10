/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1A96CB",
        color: {
          1: "#1A96CB",
        }
      },
      fontFamily: {
        notosans: ["Noto Sans Lao", "sans-serif"],
      },
    },
  },
};
