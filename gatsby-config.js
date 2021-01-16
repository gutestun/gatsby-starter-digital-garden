module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/content/garden`,
        rootNote: `/Pappaperm-Index`,
      },
    },
  ],
  siteMetadata: {
    title: `Pappaperm 2021`,
  },
}
