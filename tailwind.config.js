const defaultConfig = require("tailwindcss/defaultConfig");
const formsPlugin = require("@tailwindcss/forms");

module.exports = {
  mode: "jit",
  purge: ["index.html", "src/**/*.tsx"],
  theme: {
    extend: {
      fontSize: {
        "10xl": "8rem",
      },
      fontFamily: {
        montserrat: ["Montserrat"],
        "abhaya-libre": ["Abhaya Libre"],
        "alegraya-sans": ["Alegreya Sans"],
      },
      letterSpacing: {
        widest: ".25em",
      },
    },
    fontFamily: {
      sans: ["Inter var", defaultConfig.theme.fontFamily.sans],
    },
  },
  darkMode: "media",
  plugins: [
    formsPlugin({
      strategy: "class",
    }),
  ],
};
