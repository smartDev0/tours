require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const url = process.env.GATSBY_SITE_URL || "https://www.weshoot.it";
const supportedLanguages = ["en", "it"];
const defaultLanguage = "it";

module.exports = {
  siteMetadata: {
    title: ``,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-anchor-links`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layout/Layout.jsx`),
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Gochi Hand\:300,400,500,600,700`,
          `Montserrat\:300,400,500,600,700`, 
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-theme-i18n`,
      options: {
        defaultLang: defaultLanguage,
        configPath: require.resolve(`./i18n/config.json`),
      },
    },
    {
      resolve: `gatsby-theme-i18n-react-i18next`,
      options: {
        locales: `./i18n/locales`,
        i18nextOptions: {
          ns: ["translation"],
          fallbackLng: defaultLanguage,
          supportedLngs: supportedLanguages,
        },
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: process.env.AWS_S3_BUCKET || "weshoot.it",
        protocol: "https",
        hostname: process.env.AWS_S3_BUCKET ||  "weshoot.it",
        generateMatchPathRewrites: false,
        generateRoutingRules: true,
        generateRedirectObjectsForPermanentRedirects: true,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-MRH76BZ",
        includeInDevelopment: false,
        routeChangeEventName: "page_view",
      },
    },
    // {
    //   resolve: "gatsby-plugin-iubenda-cookie-footer",
    //   options: {
    //     googleTagManagerOptions: true,
    //     iubendaOptions: {
    //       consentOnContinuedBrowsing: false,
    //       lang: "en",
    //       siteId: 43774671,
    //       floatingPreferencesButtonDisplay: false,
    //       enableCMP: true,
    //       googleAdditionalConsentMode: true,
    //       isTCFConsentGlobal: false,
    //       cookiePolicyId: 45634728,
    //       banner: {
    //         acceptButtonDisplay: true,
    //         customizeButtonDisplay: true,
    //         position: "float-center",
    //         backgroundOverlay: true,
    //         rejectButtonDisplay: true,
    //       },
    //     },
    //   },
    // },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        sitemap: url + "/sitemap.xml",
        env: {
          development: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
          staging: {
            policy: [
              { userAgent: "AhrefsSiteAudit", allow: ["/"] },
              { userAgent: "Screaming Frog SEO Spider", allow: ["/"] },
              { userAgent: "*", disallow: ["/"] },
            ],
          },
          production: {
            policy: [
              {
                userAgent: "*",
                allow: "/",
              },
              { userAgent: "*", allow: "/" },
            ],
          },
        },
      },
    },
  ],
}
