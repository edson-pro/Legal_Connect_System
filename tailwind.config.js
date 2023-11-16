/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
      },
      colors: {
        primary: {
          yellow: "#F1BB29",
          blue: "#1D698D",
          gray: "#6B6B6B",
          black: "#343434",
          "light-blue": "#F6FCFF",
        },
        secondary: {
          yellow: "#FAE5A9",
        },
      },
    },
  },
  plugins: [],
};
