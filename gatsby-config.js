module.exports = {
  siteMetadata: {
    title: `Lily Lou`,
    description: `A portfolio site for Lily Lou.`,
    author: `@lilylouu_`,
    siteUrl: `https://lilylou.xyz/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: `Lily Lou`,
        short_name: `Lily Lou`,
        start_url: `/`,
        background_color: `#9DC183`,
        display: `minimal-ui`,
        icon: `src/images/thumbnail.png`,
      },
    },
  ],
}
