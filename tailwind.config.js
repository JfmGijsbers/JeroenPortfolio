const colors = require('tailwindcss/colors')

module.exports = {
    // ...
    important: true,
    plugins: [
        require('@tailwindcss/typography'),
    ],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          sky: colors.sky,
          teal: colors.teal,
          rose: colors.rose,
          orange: colors.orange
        },
      },
    },
  }