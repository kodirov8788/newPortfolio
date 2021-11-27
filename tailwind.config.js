module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gsss: {
          100: "#4fb984",
          200: "#66442d",
          300: "#e2e8f0",
          400: "#030303",
          500: "#a0aec0",
          600: "#08090a",
          700: "#4a5568",
          800: "#67696d",
          900: "#8f2db6",
        },
      },
    },
  },
  variants: {
    extend: {
      animation: ["group-hover"],
    },
  },
  plugins: [],
};
