/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        proxima: "'Proxima Nova', serif",
      },
      colors: {
        crayola: "#F7FAFB",
        "grey-squirrel": "#7A8185",
      },
      fontSize: {
        xs: ["12px", "15px"],
        sm: ["14px", "17px"],
        base: ["16px", "19px"],
        xl: ["20px", "24px"],
      },
      height: {
        4.5: "1.125rem",
      },
    },
  },
  plugins: [],
};
