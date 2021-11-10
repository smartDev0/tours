const path = require("path");
const dotenv = require("dotenv");

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const name = "Customerly";
const description =
    "Create an astonishing customer service experience seamlessly";


const url = process.env.GATSBY_SITE_URL || "https://www.weshoot.it";
const supportedLanguages = ["en", "it"];
const defaultLanguage = "it";

module.exports = {
  siteMetadata: {
    title: name,
    description: description,
    siteUrl: url,
    supportedLanguages: supportedLanguages,
    defaultLanguage: defaultLanguage,
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },

  plugins: [
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        "app-types": path.join(__dirname, "src/app-types"),
        components: path.join(__dirname, "src/components"),
        constants: path.join(__dirname, "src/constants"),
        events: path.join(__dirname, "src/events"),
        hooks: path.join(__dirname, "src/hooks"),
        images: path.join(__dirname, "src/media/images"),
        media: path.join(__dirname, "src/media"),
        networking: path.join(__dirname, "src/networking"),
        pages: path.join(__dirname, "src/pages"),
        styles: path.join(__dirname, "src/styles"),
        templates: path.join(__dirname, "src/templates"),
        utils: path.join(__dirname, "src/utils"),
        videos: path.join(__dirname, "src/media/videos"),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: name,
        short_name: name,
        description: description,
        start_url: `/`,
        background_color: `#4FBDFF`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/media/images/icon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-styled-components",
      options: {
        fileName: false,
        displayName: process.env.NODE_ENV === "development",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/media/images/icon.png",
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: url,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-json",
    "gatsby-transformer-video",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: ["gatsby-remark-component"],
      },
    },
    {
      resolve: `gatsby-transformer-rehype`,
      options: {
        filter: (node) => node.internal.type === "WpPost",
        source: (node) => node.content,
        contextFields: [],
        fragment: true,
        space: `html`,
        emitParseErrors: false,
        verbose: false,
        plugins: [],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/media/images/`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "videos",
        path: `${__dirname}/src/media/videos/`,
      },
      __key: "videos",
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "https://www.weshoot.it/blog/graphql",
        schema: {
          timeout: 3600000,
        },
        develop: {
          hardCacheMediaFiles: true,
        },
      },
    },
    {
      resolve: "gatsby-source-rest-api",
      options: {
        endpoints: [
          "https://api.weshoot.it/course",
        ],
      },
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
        hostname: process.env.AWS_S3_BUCKET || "weshoot.it",
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
    //       siteId: 2099690,
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
    "gatsby-plugin-force-trailing-slashes",
    "gatsby-plugin-smoothscroll",
    {
      resolve: "gatsby-plugin-brotli",
      options: {
        extensions: ["css", "html", "js", "svg"],
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
      },
    },
  ],
}
