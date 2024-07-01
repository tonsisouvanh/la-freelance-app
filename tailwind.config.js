/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "background-category": "url('/src/assets/category/category_bg.jpg')",
      },
      colors: {
        color: {
          1: "#00A6ED",
          2: "#3A4856",
          3: "#9DADBC",
          4: "#002A62",
          5: "#001F55",
          6: "#FFF623",
        },
      },
      fontFamily: {
        notosans: ["Noto Sans Lao", "sans-serif"],
        robotocon: ["Roboto Condensed", "sans-serif"],
      },
    },
    plugins: [],
    important: true,
  },
};
