module.exports = {
  theme: {
    extend: {
      colors: {
        'test-pink': '#df0077'
      },
      screens: { // These give us our semantic media queries. The sizes are based on the device list from Chrome's Inspector.
        'mobileS': {'max': '320px'},
        'mobileM': {'max': '375px'},
        'mobileL': {'max': '425px'},
        'tablet': {'max': '768px'},
        'laptop': {'max': '1024px'},
        'laptopL': {'max': '1440px'},
        'desktop': {'max': '2560px'}
      }
    }
  },
  variants: {},
  plugins: []
}
