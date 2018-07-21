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
      {src:'/js/bootstrap.min.js', async:true},
      {src:'/js/wow.min.js', async:true},
      {src:'/js/slick.min.js', async:true},
      {src:'/js/main.js', async:true},
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
    vendor: ['axios', 'vue-i18n','jquery'],
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
    {src:'~/static/css/main.css'},
    {src:'~/static/css/animate.css'},
    {src:'~/static/css/slick.css'},
    {src:'~/static/css/slick-theme.css'},
  ],
  plugins: [
    {src:'~/plugins/i18n.js',ssr:true},
    // {src:'~/plugins/bootstrap.js',ssr:true}
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
