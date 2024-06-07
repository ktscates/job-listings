/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "dark-cyan-des": "#5BA4A4",
        "light-gray": "#EFFAFA",
        "light-cyan": "#EEF6F6",
        "dark-gray": "#7B8E8E",
        "dark-cyan": "#2C3A3A",
      },
      fontFamily: {
        primary: ["League Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
};
