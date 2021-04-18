require('dotenv').config()

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'BIMBIM ID',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0' },
      { hid: 'description', name: 'description', content: 'Belajar mudah bersama BimBim, Platform edukasi daerah No.1 di Trenggalek' },
      { name: 'theme-color', content: '#006d71' },
      { name: "msapplication-TileImage", content: "/locig.png" },
      { name: "msapplication-TileColor", content: "#006d71" },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/locig.png' },
      { rel: 'shortcut icon', href:'/locig.png' },
      { rel: "preconnect", href:"https://fonts.gstatic.com" },
      { rel: 'stylesheet', href:"https://unpkg.com/@icon/themify-icons/themify-icons.css" },
      { href:"https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap", rel:"stylesheet" }
    ],
    script: [
      {
        hid:"tawk.to",
        src:"/tawk.js",
        defer: true
      }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'vue-slick-carousel/dist/vue-slick-carousel.css',
    'vue-select/dist/vue-select.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: './plugins/vue-slick-carousel.js' },
    { src: './plugins/vee-validate' },
    { src: './plugins/vue-select' },
    { src: './plugins/vuejs-modal' },
    { src: './plugins/vue-social-sharing' },
    { src: './plugins/vue-observe-visibility' },
    { src: './plugins/vue-datetime-picker' },
    { src: './plugins/vue-form-wizard' },
    { src: './plugins/vue-youtube-embed', ssr: false },

  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      'vee-validate'
    ]
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/auth-next',
    '@nuxtjs/dotenv',
    'nuxt-clipboard2',
    ['nuxt-lazy-load', {
      // These are the default values
      images: true,
      videos: true,
      audios: true,
      iframes: true,
      native: false,
      polyfill: true,
      directiveOnly: false,

      // Default image must be in the static folder
      defaultImage: '/loading.svg',

      // To remove class set value to false
      loadingClass: 'isLoading',
      loadedClass: 'isLoaded',
      appendClass: 'lazyLoad',

      observerConfig: {
        // See IntersectionObserver documentation
      }
    }],
    ['nuxt-tailvue', {toast: true, button: true, modal: false}],
    ['nuxt-fontawesome', {
        imports: [
         {
           set: '@fortawesome/free-solid-svg-icons',
           icons: ['fas']
         },
         {
           set:'@fortawesome/free-brands-svg-icons',
           icons: ['fab']
         },
       ]
    }],
  ],

  env: {
    base_url: process.env.BASE_URL,
    main_url: process.env.MAIN_URL || 'http://localhost:3000',
    backend_url: process.env.BACKEND_URL,
  },

  auth: {
    strategies: {
      laravelSanctum: {
        provider: 'laravel/sanctum',
        // url: `${process.env.BASE_URL}/bimapi`,
        url: `${process.env.BASE_URL}`,
        endpoints: {
          login: {
            url: '/api/user/login'
          },
          logout: {
            url: '/api/user/logout'
          },
          user: {
            url: '/api/user/detailUser'
          },
          register: {
            url: '/api/user/register', method: 'post'
          },
          updateProfil: {
            url: '/api/user/updateProfil', method: 'post'
          },
          // refresh: {
          //   url: '/api/user/logout'
          // },
        },
        user: {
          property: 'data'
        },
        // scheme: 'refresh',
        // token: {
        //   property: 'access_token',
        //   maxAge: 1800,
        //   // type: 'Bearer'
        // },
        // refreshToken: {
        //   property: 'refresh_token',
        //   data: 'refresh_token',
        //   maxAge: 60 * 60 * 24 * 30
        // },
      },
    },
    redirect: {
      login: '/login',
      logout: '/',
      homepage: '/'
    }
  },

  router: {
    middleware: ['auth']
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: `${process.env.BACKEND_URL}`,
    proxy: false,
    credentials: true,
  },

  // proxy: {
  //   '/bimapi': {
  //     target: `${process.env.BACKEND_URL}`,
  //     pathRewrite: { '^/bimapi': '/' }
  //   },
  // },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      "name": "BIMBIM Indonesia",
      "short_name": "BIMBIM ID",
      "description": "Belajar mudah bersama bimbim, Platform edukasi daerah No.1 di Trenggalek",
      "lang": "id",
      "dir": "ltr",
      "theme_color": "#006d71",
      "start_url": "../?src=pwa",
      "background_color": "#fff",
      "display": "standalone",
      "orientation": "portrait-primary",
      "apple-mobile-web-app-capable": "true",
      "mobileAppIOS": "true",
      "useWebmanifestExtension": "true"
    },
    icon: {
      "source": "/locig.png",
      "fileName": "locig.png",
      "purpose": "any"
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  loading: {
    color: '#006d71',
    height: '5px'
  }
}
