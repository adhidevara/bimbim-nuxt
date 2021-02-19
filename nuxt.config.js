export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'bimbim id',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Belajar mudah bersama BimBim, Platform edukasi daerah No.1 di Trenggalek' },
      { name: 'theme-color', content: '#fff' },
      { name: "msapplication-TileImage", content: "/locig.png" },
      { name: "msapplication-TileColor", content: "#fff" },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/locig.png' },
      { rel: 'shortcut icon', href:'/locig.png' },
      { rel: "preconnect", href:"https://fonts.gstatic.com" },
      { href:"https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap", rel:"stylesheet" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

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
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      "name": "bimbim Indonesia",
      "short_name": "bimbim ID",
      "description": "Belajar mudah bersama bimbim, Platform edukasi daerah No.1 di Trenggalek",
      "lang": "id",
      "dir": "ltr",
      "theme_color": "#fff",
      "start_url": "../",
      "background_color": "#fff",
      "display": "standalone",
      "orientation": "portrait-primary",
      "apple-mobile-web-app-capable": "true",
      "mobileAppIOS": "true",
    },
    icon: {
      "source": "/locig.png",
      "fileName": "locig.png",
      "purpose": "any"
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  server: {
    host: '0',
    port: 443 // default: 3000
  }
}
