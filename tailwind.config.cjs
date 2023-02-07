/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,jsx,js,ts}"],
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
      animation: {
        "visible-animate":
          "visible 0.8s cubic-bezier(0.645, 0.045, 0.355, 1) ease-in-out",
      },
      keyframes: {
        visible: {
          "0%": { opacity: 0 },
          "50%": { opacity: 0.5 },
          "100%": { opacity: 1 },
        },
      },
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
