module.exports = {
  pathPrefix: '/canvas-examples',
  siteMetadata: {
    title: `Canvas Examples`,
    description: `Canvas examples repository`,
    author: `@mmellado`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Canvas Examples`,
        short_name: `starter`,
        start_url: `/canvas-examples`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `./src/images/gatsby-icon.png`,
      },
    },
  ],
};
