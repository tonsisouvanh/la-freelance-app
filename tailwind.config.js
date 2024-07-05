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
          1: "#00B2FF",
          2: "#7C8493",
          3: "#475266",
          4: "#002A62",
          5: "#001F55",
          6: "#FFF623",
          7: "#434C5B",
          8: "#F4F7FC",
          9: "#1E1E1E",
          10: "#25324B",
          11: "#0B8800"
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
