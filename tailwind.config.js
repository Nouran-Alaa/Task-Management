/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      inter: "Inter,sans-serif",
      ubuntu: "Ubuntu,sans-serif",
    },

    extend: {
      screens: {
        "2xl": "1640px",
      },
    },
  },
  plugins: [],
};
