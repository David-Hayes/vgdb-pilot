const colors = require('tailwindcss/colors')

module.exports = {
  mode: ['jit'],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#FB923C',
      primaryAlt: '#FB8728',
      secondary: '#0078D4',
      secondaryAlt: '#006BBD',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      red: colors.red,
    },
    fontFamily: {
      sans: ['"Roboto", sans-serif'],
    },
  },
  variants: {
    extend: {
      borderStyle: ['hover'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
