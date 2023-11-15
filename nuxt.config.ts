// https://nuxt.com/docs/api/configuration/nuxt-config
import eslintPlugin from 'vite-plugin-eslint';
import languages from './lang/languages'
import theme from './config/theme'
import brand from './assets/text/brand'

export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: brand.medical.name,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: brand.medical.desc },
        { name: 'msapplication-TileColor', content: '#FFFFFF' },
        { name: 'msapplication-TileImage', content: '/favicons/ms-icon-144x144.png' },
        // PWA primary color
        { name: 'theme-color', content: theme.primary},
        // Facebook
        { property: 'author', content: 'luxi' },
        { property: 'og:site_name', content: 'luxi.ux-maestro.com' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:type', content: 'website' },
        // Twitter
        { property: 'twitter:site', content: 'luxi.ux-maestro.com' },
        { property: 'twitter:domain', content: 'luxi.ux-maestro.com' },
        { property: 'twitter:creator', content: 'luxi' },
        { property: 'twitter:card', content: 'summary' },
        { property: 'twitter:image:src', content: '/images/logo.png' },
        { property: 'og:url', content: brand.medical.url },
        { property: 'og:title', content: brand.medical.projectName },
        { property: 'og:description', content: brand.medical.desc },
        { name: 'twitter:site', content: brand.medical.url },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: brand.medical.img },
        { property: 'og:image', content: brand.medical.img },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' }
      ],
      link: [
        // Favicon
        { rel: 'shortcut icon', href: 'https://framerusercontent.com/images/Hzv8qofa9c66sWcHxLEWsZ62z4.png' },
        { rel: 'apple-touch-icon', sizes: '57x57', href: '/favicons/favicon.png' },
        { rel: 'apple-touch-icon', sizes: '60x60', href: '/favicons/favicon.png' },
        { rel: 'apple-touch-icon', sizes: '72x72', href: '/favicons/favicon.png' },
        { rel: 'apple-touch-icon', sizes: '76x76', href: '/favicons/favicon.png' },
        { rel: 'apple-touch-icon', sizes: '114x114', href: '/favicons/favicon.png' },
        { rel: 'apple-touch-icon', sizes: '120x120', href: '/favicons/favicon.png' },
        { rel: 'apple-touch-icon', sizes: '144x144', href: '/favicons/favicon.png' },
        { rel: 'apple-touch-icon', sizes: '152x152', href: '/favicons/favicon.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/favicon.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicons/favicon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon.png' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicons/favicon.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon.png' },
        { rel: 'manifest', href: '/favicons/manifest.json' },
        // Fonts and Icons
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:400,700,900&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
        { rel: 'stylesheet', href: 'https://unpkg.com/ionicons@3.0.0/dist/css/ionicons.min.css' }
      ]
    },
  },
  components: false,
  css: [
    'aos/dist/aos.css',
    'vuetify/lib/styles/main.sass',
    '@splidejs/vue-splide/css',
    '@/assets/scss/vuetify-overide.scss',
    '@/assets/scss/transition.scss',
    '@/assets/scss/vendors/animate.css',
    '@/assets/scss/vendors/animate-extends.css',
    '@/assets/scss/vendors/hamburger-menu.css',
    '@/assets/scss/vendors/slick-carousel/slick.css',
    '@/assets/scss/vendors/slick-carousel/slick-theme.css'
  ],
  modules: [
    '@nuxtjs/i18n',
    'vite-plugin-eslint'
  ],
  i18n: {
    locales: languages,
    lazy: true,
    langDir: 'lang',
    defaultLocale: 'en',
    strategy: 'prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',  // recommended
    },
    // vueI18n: './config/i18n.js', // use this options for next vueI18n version
    vueI18n: {
      legacy: false,
      locale: 'en',
      fallbackLocale: 'en',
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: { additionalData: `@import "@/assets/scss/styles.scss";` } // eslint-disable-line
      }
    },
    plugins: [
      // eslintPlugin(),
    ]
  },
  build: {
    transpile: ['vuetify'],
    extend(config) {
      config.performance.hints = false
    },
  },
  devServer: {
    port: 8009, // default: 3000
  }
})