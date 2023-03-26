/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/**/*.{html,js,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        10: "10%",
        20: "20%",
        30: "30%",
        40: "40%",
        50: "50%",
        60: "60%",
        70: "70%",
        80: "80%",
        90: "90%",
        100: "100%",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      ml: "1140px",
      xl: "1440px",
    },
    colors: {
      main: "#FF963C",
      darken: "#414141",
    },
    fontSize: {
      sm: "12px",
      md: "14px",
      normal: "15px",
      lg: "16px",
      xl: "20px",
      xxl: "30px",
    },
  },
  plugins: [],
});
