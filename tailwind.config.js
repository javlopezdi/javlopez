module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        xicatic: "#1b1725",
        xicaticLight: "#312e3a",
        princetonOrange: "#fa8334",
        ghostWhite: "#f4f3f7",
        cadetBlue: "#429ea6",
      },
    },
    variants: {
      extend: {
        backgroundColor: ["active"],
      },
    },
  },
  plugins: [],
};
