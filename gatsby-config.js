require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteUrl: `https://affect.ae`,
    title: "Affect Technologies",
    description:"Creative Technologies & Digital Transformation, We are truly passionate about innovation and disruption and we want to make your ideas become real.",
    twitter: "",
    banner:"/banner.png",
    googleConsole:" "
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    'gatsby-plugin-robots-txt',
    "gatsby-plugin-netlify",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/
        }
      }
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 60
      },
    },
    "gatsby-plugin-image",
    `gatsby-alias-imports`,
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: "./src/assets/data/",
      },
      __key: "data",
    },

    // {
    //   resolve: `gatsby-plugin-gtag`,
    //   options: {
    //     trackingId: `G-V8J38H9E3Y`,
    //     head: false,
    //   },
    // },
  ],
};
