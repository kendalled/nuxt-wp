// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
    theme: {
        extend: {
          colors: {
            orange: colors.orange,
            'light-blue': colors.lightBlue,
            'cool-gray': colors.coolGray
          },
          typography: {},
          fontFamily: {
            sans: ['Inter', ...defaultTheme.fontFamily.sans]
          }
        }
    },
    plugins: [
      require('@tailwindcss/typography'),
      // ...
    ],
  }