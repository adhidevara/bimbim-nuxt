module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    content: [
      'node_modules/tv-*/dist/tv-*.umd.min.js',
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito'],
      }
    },
    screens: {
      'xs': '222px',
      'sm': '425px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1440px',
      '2xl': '2560px',
    }
  },
  variants: {
    opacity: ({ after }) => after(['disabled']),
    extend: {
      opacity: ['disabled'],
      translate: ['motion-reduce'],
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    }
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
