/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require('path')

module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@modules": path.resolve(__dirname, 'src/modules'),
          "@src": path.resolve(__dirname, 'src'),
          "@pages": path.resolve(__dirname, 'src/pages'),
          "@images": path.resolve(__dirname, 'public/images'),
          "@static": path.resolve(__dirname, 'static')
        },
        extensions: [
          "js"
        ]
      }
    }
  ],
  pathPrefix: "/",
}
