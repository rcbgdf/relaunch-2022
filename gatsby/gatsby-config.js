require("dotenv").config({
  path: `.env`, // or '.env'
})

const camelCase = require("lodash.camelcase")

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
module.exports = {
  pathPrefix: "/relaunch-2022",
  siteMetadata: {
    title: `Rednerclub Bergedorf`,
    description: `Rednerclub Bergedorf Homepage`,
    author: `toastmaster@rc-bgdf`,
    siteUrl: `${process.env.GATSBY_PUBLIC_URL}`
  },
  plugins: [
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: '/',
        excludes: ['/intern', '/impressum', '/datenschutz', '/anleitung-oeffentlichkeitsarbeit', '/toastmaster-des-abends/']
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: 'gatsby-plugin-buildtime-timezone',
      options: {
        tz: 'Europe/Berlin',
        format: 'DD.MM.YYYY HH:mm:ss', // string, defaults to "MM/DD/YYYY" - pass in any acceptable date-and-time format
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown-pages`,
        name: `markdown-pages`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content-dataa",
        path: "src/content-data",
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: `${process.env.STRAPI_API_URL}`,
        collectionTypes: ["clubabends", "vorstandsmitglieds"],
        singleTypes: ["termine", "naechster-clubabend"],
        queryLimit: 1000,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
        ]
      },
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: ({ node }) => capitalize(camelCase(`LocalContent ${node.name}`))
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: true // (default: true) Enable/disable loading stylesheets via CDN
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#54c4e0`,
        theme_color: `#54c4e0`,
        display: `minimal-ui`,
        icon: `src/images/rcb-favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/content-data/`,
      },
    },
    {
      resolve: "gatsby-plugin-excerpts",
      options: {
        sources: {
          snippetBlocks: {
            type: "htmlQuery",
            sourceField: "html",
            excerptSelector: ".custom-block.snippet .custom-block-body",
            stripSelector: "a",
            elementReplacements: [
              {
                selector: "h6",
                replaceWith: "strong",
              },
              {
                selector: "h5",
                replaceWith: "h6",
              },
              {
                selector: "h4",
                replaceWith: "h5",
              },
              {
                selector: "h3",
                replaceWith: "h4",
              },
              {
                selector: "h2",
                replaceWith: "h3",
              },
            ],
          },
          default: {
            type: "htmlQuery",
            sourceField: "html",
            excerptSelector: "html > *",
            ignoreSelector: "img, .gatsby-highlight",
            stripSelector: "a",
            elementReplacements: [
              {
                selector: "h6",
                replaceWith: "strong",
              },
              {
                selector: "h5",
                replaceWith: "h6",
              },
              {
                selector: "h4",
                replaceWith: "h5",
              },
              {
                selector: "h3",
                replaceWith: "h4",
              },
              {
                selector: "h2",
                replaceWith: "h3",
              },
            ],
            truncate: {
              length: 80,
              byWords: true,
              ellipsis: "…",
            },
          },
        },
        sourceSets: {
          markdownHtml: ["snippetBlocks", "default"],
        },
        excerpts: {
          snippet: {
            type: "html",
            nodeTypeSourceSet: {
              StrapiClubabends: "markdownHtml",
              MarkdownRemark: "markdownHtml",
            },
          },
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
