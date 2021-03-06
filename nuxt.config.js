const webpack = require('webpack')
module.exports = {
  /*
   ** Setup env for site
   */
  env: {
    baseUrl: process.env.BASE_URL || 'http://centralreal.vn',
  },
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'vi',
    },
    title: 'CENTRALREAL.VN',
    meta: [{
        charset: "utf-8"
      },
      {
        hid: "google-site-verification",
        name: "google-site-verification",
        content: "FOAD1lSsU-oCztlUpgyYGND5jEXJ8_JtlwVXoPyk4bE"
      },
      {
        hid: "x-ua-compatible",
        name: "x-ua-compatible",
        content: "ie=edge"
      },
      {
        hid: "viewport",
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "copyright",
        name: "copyright",
        content: "Công ty Bất động sản Centralreal.VN"
      },
      {
        hid: "language",
        name: "language",
        content: "vietnamese"
      },
      {
        hid: "description",
        name: "description",
        content: "CentralReal - Hệ Thống Phân Phối BĐS Nghỉ Dưỡng Hàng Đầu Việt Nam"
      },
      {
        hid: "author",
        name: "author",
        content: "CentralReal.vn"
      },
      {
        hid: "robots",
        name: "robots",
        content: "index, archive, follow, noodp"
      },
      {
        hid: "googlebot",
        name: "googlebot",
        content: "index, archive, follow, noodp"
      },
      {
        hid: "msnbot",
        name: "msnbot",
        content: "all,index,follow"
      },
      {
        hid: "keywords",
        name: "keywords",
        content: "Centralreal.VN, centralreal"
      },
      {
        hid: "og:url",
        name: "og:url",
        content: "centralreal.cf"
      },
      {
        hid: "og:type",
        name: "og:type",
        content: "website"
      },
      {
        hid: "og:title",
        name: "og:title",
        content: "Centralreal.VN"
      },
      {
        hid: "og:description",
        name: "og:description",
        content: "CentralReal - Hệ Thống Phân Phối BĐS Nghỉ Dưỡng Hàng Đầu Việt Nam"
      },
      {
        hid: "og:image",
        name: "og:image",
        content: "https://centralreal.cf/images/logo/logo.png"
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://centralreal.cf/images/logo/logo.png"
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }, ],
    script: [{
      src: 'https://embed.tawk.to/5b514ed1e21878736ba225f6/default',
      async: true,
      charset: 'UTF-8'
    }, ],

  },
  modules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-126139624-1'
    }]
  ]
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#3B8070'
  },

  /*
   ** Build configuration
   */

  build: {
    vendor: ['axios', 'vue-i18n', 'jquery', 'bootstrap', 'slick-carousel', 'aos', 'vue-countup-v2', 'v-img', 'vue-sticky-directive'],
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        jquery: 'jquery'
      }),
    ]
  },
  css: [{
      src: 'bootstrap/dist/css/bootstrap.min.css'
    },
    {
      src: '~/static/css/font-awesome.min.css'
    },
    {
      src: '~/static/css/animate.min.css'
    },
    {
      src: 'slick-carousel/slick/slick.css'
    },
    {
      src: 'slick-carousel/slick/slick-theme.css'
    },
    {
      src: 'aos/dist/aos.css'
    },
    {
      src: '~/static/css/main.css'
    },
  ],
  plugins: [{
      src: '~/plugins/i18n.js',
      ssr: true
    },
    {
      src: '~/plugins/bootstrap.js',
      ssr: false
    },
    {
      src: '~/plugins/aos.js',
      ssr: false
    },
    {
      src: '~plugins/v-img.js',
      ssr: false
    },
    {
      src: '~plugins/vue-sticky.js',
      ssr: false
    },
  ],
  router: { // customize nuxt.js router (vue-router).
    middleware: ['i18n', 'system_config'], // middleware all pages of the application
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'page',
        path: '*',
        component: resolve(__dirname, '~/pages/error.vue')
      })
    }
  },
}
