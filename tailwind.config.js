/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
      colors: {
        basegreen: "#3BB77E",
        lightgreen: "#DEF9EC",
        grey: "#ADADAD",
      },
      backgroundImage: {
        cherry: "url('./src/assets/images/cherry.png')",
        cofee: "url('./src/assets/images/cofee.png')",
        logohero: "url('./src/assets/images/logohero.png')",
        men: "url('./src/assets/images/men.png')",
        onions: "url('./src/assets/images/onions.png')",
        orange: "url('./src/assets/images/orange.png')",
        organicfood: "url('./src/assets/images/organicfood.png')",
        pattern: "url('./src/assets/images/pattern.png')",
        Payment: "url('./src/assets/images/Payment.png')",
      },
    },
  },
  plugins: [],
};
