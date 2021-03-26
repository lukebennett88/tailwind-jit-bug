/* eslint-disable global-require, import/no-extraneous-dependencies */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          DEFAULT: "#8c8c8c",
        },
        pink: {
          darker: "#b9665e",
          dark: "#d48780",
          DEFAULT: "#e1948c",
          light: "#f5b0aa",
          lightest: "#fef1f0",
        },
      },
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
