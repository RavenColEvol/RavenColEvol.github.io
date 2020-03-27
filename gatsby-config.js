module.exports = {
    siteMetadata: {
      title: `Ravi Lamkoti`,
      description: `A passionate full stack web developer.`,
      author: `@ravilamkoti`,
    },
    plugins: [
        `gatsby-transformer-sharp`, `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {
                displayName: false
            },
          },
    ],
  }
  