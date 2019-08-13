import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://nuxt-community.github.io/nuxt-i18n/
    ['nuxt-i18n', {
        locales: [
          {
            name: 'Russian',
            code: 'ru',
            iso: 'ru-RU',
            file: 'ru-RU.js'
          },
          {
            name: 'Ukrainian',
            code: 'ua',
            iso: 'ua-UA',
            file: 'ua-UA.js'
          },
        ],
        defaultLocale: 'ua',
        langDir: 'lang/',
        lazy: true,
        detectBrowserLanguage: false,
    }],
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://auth.nuxtjs.org/
    '@nuxtjs/auth',
  ],

  /*
  ** Auth module configuration
  */
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'auth/login',
            method: 'post',
            propertyName: 'meta.token'
          },
          user: {
            url: 'auth/me',
            method: 'get',
            propertyName: 'data'
          }
        }
        
      }
    }
  },
  /*
  ** Axios module configuration
  */
  axios: {
    baseURL: 'http://cart/api'
  },  
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      primary: colors.lightGreen.base, 
      accent: colors.lime.base,
      bgcolor: colors.grey.lighten5,
      info: colors.teal.lighten1,
      warning: colors.amber.base,
      error: colors.red.darken1,
      success: colors.green.accent3
    },
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
