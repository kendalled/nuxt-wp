// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
    theme: {
        extend: {
          colors: {
            orange: colors.orange,
            'light-blue': colors.sky,
            'cool-gray': colors.gray
          },
          typography: {},
          fontFamily: {
            sans: ['Inter', ...defaultTheme.fontFamily.sans]
          },
          animation: {
            marquee: 'marquee 30s linear infinite',
            marquee2: 'marquee2 30s linear infinite'
          },
          keyframes: {
            marquee: {
              '0%': { transform: 'translateX(0%)' },
              '100%': { transform: 'translateX(-100%)' }
            },
            marquee2: {
              '0%': { transform: 'translateX(100%)' },
              '100%': { transform: 'translateX(0%)' }
            }
          }
        }
    },
    plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/forms'),
      // ...
    ],
  }