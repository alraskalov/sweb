/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        proxima: "'Proxima Nova', serif",
      },
      gridTemplateColumns: {
        list: "repeat(4, 1fr);"
      },
      colors: {
        crayola: "#F7FAFB",
        "grey-squirrel": "#7A8185",
        "dark-greenish-blue": "#062436",
        blue: "#3DBDF6",
        "gentian-blue": "#0A3145",
        "silver-grey": "#939DA2",
        "dark-blue": "#339AC8",
        "grideperlevy": "#E3E9EC",
        "bright-red": "#D0021B",
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
      boxShadow: {
        lg: "0px 2px 10px #AFBABF",
        md: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        "button-def": "0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24)",
        "button-hov": "0px 0px 8px rgba(0, 0, 0, 0.0001), 0px 5px 5px rgba(0, 0, 0, 0.16)",
        "button-foc": "0px 0px 8px rgba(0, 0, 0, 0.0001), 0px 5px 5px rgba(0, 0, 0, 0.26)",
      },
    },
  },
  plugins: [],
};
