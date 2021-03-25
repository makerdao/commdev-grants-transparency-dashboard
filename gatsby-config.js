/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require('path')

module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-head`,
    // `gatsby-plugin-postcss`, //(Rejon): For when you need it
    { //NOTE(Rejon): This is what allows us to do aliased imports like "@modules/ect..."
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@modules": path.resolve(__dirname, 'src/modules'),
          "@src": path.resolve(__dirname, 'src'),
          '@data': path.resolve(__dirname, 'public/data'),
          "@pages": path.resolve(__dirname, 'src/pages'),
          "@images": path.resolve(__dirname, 'static/images'),
          "@static": path.resolve(__dirname, 'static'),
          "@utils": path.resolve(__dirname, 'src/utils.js')
        },
        extensions: [ //NOTE(Rejon): You don't have to write .js at the end of js files now.
          "js"
        ]
      }
    }
  ],
  pathPrefix: "/",
}
