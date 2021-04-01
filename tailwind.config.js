module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      headerBlue: {
        light: "#232f3e",
        dark: "#131921",
      },
      searchIcon: {
        default: "#febd69",
      },
      headerText: {
        white: "#fff",
      },
      cartNumber: "#e98804",
      deals: "#fe4a00",
      startGradient: "rgba(255,255,255,0)",
      endGradient: "#fff",
      footer: {
        light: "#37475a",
        dark: "#232f3e",
      },
    },
    extend: {
      gridTemplateColumns: {
        home: "1fr 1550px 1fr",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
