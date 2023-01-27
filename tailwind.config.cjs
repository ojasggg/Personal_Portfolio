/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    fontFamily: {
      AvenirLight: ["AvenirLight", "sans-serif"],
      AvenirRoman: ["AvenirRoman", "sans-serif"],
      AvenirBook: ["AvenirBook", "sans-serif"],
      AvenirMedium: ["AvenirMedium", "sans-serif"],
      AvenirHeavy: ["AvenirHeavy", "sans-serif"],
      Valencia: ["Valencia", "cursive"],
    },
    extend: {
      colors: {
        light: "#f1f3f2",
        dark: "#141414",
      },
    },
    screens: {
      sm: "640px",
      md: "1024px",
      lg: "1280px",
      xl: "1536px",
    },
  },
  plugins: [],
};
