const colors = require('tailwindcss/colors')

module.exports = {
  mode: ['jit'],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#0078D4',
      primaryAlt: '#006BBD',
      secondary: '#FB923C',
      secondaryAlt: '#FB8728',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      red: colors.red,
    },
    fontFamily: {
      sans: ['"Montserrat", sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
