module.exports = {
  siteMetadata: {
    title: 'Optus',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/phone/*`] },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Optus',
        short_name: 'Optus',
        start_url: '/',
        background_color: '#08AEEA',
        theme_color: '#2AF598',
        display: 'minimal-ui',
        icons: [
          {
            src: `/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    {
    // Note: this plugin is coded to only work on production
    resolve: `gatsby-plugin-subscribers`,
    options: {
      id: '03eb77bf-f731-473e-b760-cb2d2bd0d30f',
    }
  },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        appendScript: require.resolve(`./sw-api.js`)
      },
    }
  ],
};
