const fileSystemPlugin = [{
  resolve: 'gatsby-source-filesystem',
  options: {
    path: `${__dirname}/src/pages`,
    name: 'pages',
  },
}];

if (process.env.NODE_ENV === 'development') {
  fileSystemPlugin.push({
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${__dirname}/src/_drafts`,
      name: 'pages',
    },
  });
}

module.exports = {
  siteMetadata: {
    title: 'Nocturnidades',
    author: 'Enrique Moriarty',
    description: 'A starter blog demonstrating what Gatsby can do.',
    siteUrl: 'http://nocturnidad.es/',
  },
  plugins: [
    ...fileSystemPlugin,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-92163525-1',
      },
    },
    'gatsby-plugin-feed',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    'gatsby-plugin-react-next',
    'gatsby-plugin-sitemap',
  ],
}
