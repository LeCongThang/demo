const webpack = require('webpack')
module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'MPC',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js project'
      }
    ],
    link: [
      {rel: 'icon',type: 'image/x-icon',href: '/favicon.ico'},
    ],
    script: [
      {src: 'https://embed.tawk.to/5b514ed1e21878736ba225f6/default',async:true,charset:'UTF-8' },
    ],

  },
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
    vendor: ['axios', 'vue-i18n','jquery','bootstrap','slick-carousel','aos'],
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        jquery:'jquery'
      }),
    ]
  },
  css:[
    {src:'bootstrap/dist/css/bootstrap.min.css'},
    {src:'~/static/css/font-awesome.min.css'},
    {src:'~/static/css/animate.css'},
    {src:'~/static/css/jquery.fancybox.min.css'},
    {src:'slick-carousel/slick/slick.css'},
    {src:'slick-carousel/slick/slick-theme.css'},
    {src:'aos/dist/aos.css'},
    {src:'~/static/css/main.css'},
  ],
  plugins: [
    {src:'~/plugins/i18n.js',ssr:true},
    {src:'~/plugins/bootstrap.js',ssr:false},
    {src:'~/static/js/jquery.fancybox.min.js', ssr:false},
    {src:'~/plugins/aos.js', ssr:false},
    {src:'~/static/js/numscroller-1.0.js', ssr:false},
],
  router: { // customize nuxt.js router (vue-router).
    middleware: ['i18n','system_config'], // middleware all pages of the application
    extendRoutes (routes, resolve) {
      routes.push({
        name: 'page',
        path: '*',
        component: resolve(__dirname, '~/pages/error.vue')
      })
    }
  },
}
