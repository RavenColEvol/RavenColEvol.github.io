const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Ravi Lamkoti`,
    description: `A passionate full stack web developer.`,
    author: `@ravilamkoti`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false
      }
    },
  ]
};
