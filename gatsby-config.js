module.exports = {
  siteMetadata: {
    siteUrl: "https://lambertini.org",
    title: "lambertini.org",
    madeWith: "Gatsby, imbézel!"
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        // The option defaults to true
        checkSupportedExtensions: true,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/src/pages/`,
      },
      __key: "blog",
    },
    "gatsby-transformer-remark",

  ],
};
