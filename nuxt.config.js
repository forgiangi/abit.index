module.exports = {
  modules: [
    '@nuxtjs/proxy',
    '@nuxtjs/axios',
    '@nuxtjs/google-analytics',
    '@nuxtjs/dotenv',
    '@nuxtjs/sitemap',
  ],

  axios: {
    proxy: true,
  },

  proxy: {
    '/api': {
      target:
        process.env.NODE_ENV !== 'production'
          ? // ? 'http://127.0.0.1:4000'
            'https://abitapi.com'
          : 'https://abitapi.com',
      pathRewrite: { '^/api': '' },
    },
  },
  'google-analytics': {
    id: 'UA-117352627-4',
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://abitindex.com',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: true, // Enable me when using nuxt generate
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'abitindex',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'A curated collection of cryptocurrencies indices',
      },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
      { name: 'theme-color', content: '#ffffff' },
      { property: 'og:url', content: 'https://abitindex.com' },
      { property: 'og:site_name', content: 'abitindex' },
      { property: 'og:title', content: 'abitindex' },
      {
        property: 'og:description',
        content: 'A curated collection of cryptocurrencies indices',
      },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:image',
        content: 'https://abitindex.com/abitindex-logo-squared.png',
      },
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto+Mono:300,400',
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '57x57',
        href: '/apple-icon-57x57.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '60x60',
        href: '/apple-icon-60x60.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '72x72',
        href: '/apple-icon-72x72.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '76x76',
        href: '/apple-icon-76x76.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '114x114',
        href: '/apple-icon-114x114.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '120x120',
        href: '/apple-icon-120x120.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '144x144',
        href: '/apple-icon-144x144.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '152x152',
        href: '/apple-icon-152x152.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-icon-180x180.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/android-icon-192x192.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: '/favicon-96x96.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/manifest.json' },
    ],
  },

  css: ['@/assets/styles/main.scss'],

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3bd0d6' },
  /*
  ** Build configuration
  */
  // build: {
  //   extend(config, options) {
  //     return Object.assign({}, config, {
  //       devtool: 'source-map'
  //     })
  //   }
  // }
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev }) {
      if (isDev) config.devtool = '#source-map';
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
