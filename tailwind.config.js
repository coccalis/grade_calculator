/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xsm: "360px",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        darkblue: {
          colors: {
            background: "#1b2332",
            primary: {
              DEFAULT: "#405e89",
            },
          },
        },
      },
    }),
  ],
};
