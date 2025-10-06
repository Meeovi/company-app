import graphql from '@rollup/plugin-graphql'
import {
  defineNuxtConfig
} from "nuxt/config"
import vuetify, {
  transformAssetUrls
} from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
    watcher: 'parcel'
  },

  app: {
    head: {
      viewport: 'minimum-scale=1, initial-scale=1, width=device-width',
      templateParams: {
        separator: '·',
      },
      htmlAttrs: {
        lang: 'en',
      },
      meta: [{
        name: 'description',
        content: 'Starter Template for the M Framework'
      }, ],
      link: [{
          rel: 'icon',
          href: '/favicon.ico'
        },
        {
          rel: 'apple-touch-icon',
          href: '/icons/apple-touch-icon-180x180.png'
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/instantsearch.css@7/themes/satellite-min.css'
        },
        {
          rel: 'preload',
          as: 'style',
          href: 'https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i&display=swap'
        }
      ],
    },
  },

  appConfig: {
    titleSuffix: '',
  },

  css: [
    'assets/web/assets/mobirise-icons2/mobirise2.css',
    'assets/bootstrap/css/bootstrap.min.css',
    'assets/bootstrap/css/bootstrap-grid.min.css',
    'assets/bootstrap/css/bootstrap-reboot.min.css',
    'assets/theme/css/style.css',
    'assets/mobirise/css/mbr-additional.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
    'assets/styles/mobile.css',
    'assets/styles/styles.css',
  ],

  modules: [
    "@nuxt/image",
    '@nuxtjs/tailwindcss',
    "@storefront-ui/nuxt",
    '@nuxtjs/i18n',
    "nuxt-security",
    '@logto/nuxt',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({
          autoImport: true
        }))
      })
    },
  ],

  security: {
    headers: {
      contentSecurityPolicy: false,
      strictTransportSecurity: {
        maxAge: 0
      },
      crossOriginOpenerPolicy: false,
      crossOriginEmbedderPolicy: false,
      permissionsPolicy: false
    }
  },

  i18n: {
    strategy: "prefix_except_default",
    defaultLocale: "en-GB",
    detectBrowserLanguage: false,
    langDir: "./src/langs/",
    vueI18n: "./config",
    locales: [{
        code: "en-GB",
        language: "en-GB",
        file: "en-GB.ts",
      },
      {
        code: "pl-PL",
        language: "pl-PL",
        file: "pl-PL.ts",
      },
      {
        code: "testde",
        language: "de-DE",
        file: "de-DE.ts",
        localeId: "c19b753b5f2c4bea8ad15e00027802d4",
      },
    ],
  },

  runtimeConfig: {
    // Cloudflare Turnstile
    turnstile: {
      // This can be overridden at runtime via the NUXT_TURNSTILE_SECRET_KEY
      // environment variable.
      secretKey: process.env.NUXT_TURNSTILE_SECRET_KEY,
    },
    public: {
      // Directus
      directus: {
        url: process.env.DIRECTUS_URL,
        nuxtBaseUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
        auth: {
          email: process.env.NUXTUS_DIRECTUS_ADMIN_EMAIL,
          password: process.env.NUXTUS_DIRECTUS_ADMIN_PASSWORD,
          token: process.env.NUXTUS_DIRECTUS_STATIC_TOKEN,
          enabled: true,
          enableGlobalAuthMiddleware: false, // Enable auth middleware on every page
          userFields: ['*'], // Select user fields
          redirect: {
            login: '/auth/login', // Path to redirect when login is required
            logout: '/', // Path to redirect after logout
            home: '/', // Path to redirect after successful login
            resetPassword: '/auth/reset-password', // Path to redirect for password reset
            callback: '/auth/callback', // Path to redirect after login with provider
          },
        }
      },

      indexName: process.env.MEILISEARCH_INDEX_NAME,

      meilisearch: {
        host: process.env.MEILISEARCH_HOST,
        searchApiKey: process.env.MEILISEARCH_SEARCH_API_KEY,
        options: {
          primaryKey: 'id',
          keepZeroFacets: false,
          finitePagination: false
        },
      },

      // Commerce 
      commerceUrl: process.env.COMMERCE_STORE_URL,
      commerceGraphql: process.env.COMMERCE_GRAPHQL_URL,
      commerceApiToken: process.env.WEBSITE_TOKEN,

      // Google Tag Manager
      gtagId: process.env.NUXT_PUBLIC_GTAG_ID,

      // Stripe
      stripe: {
        publishableKey: process.env.STRIPE_PUBLISHABLE_KEY
      },

      logto: {
        endpoint: process.env.NUXT_LOGTO_ENDPOINT,
        appId: process.env.NUXT_LOGTO_APP_ID,
        appSecret: process.env.NUXT_LOGTO_APP_SECRET,
        cookieEncryptionKey: process.env.NUXT_LOGTO_COOKIE_ENCRYPTION_KEY,
      },
    },
    stripe: {
      secretKey: process.env.STRIPE_SECRET_KEY
    }
  },

  build: {
    transpile: [
      'vuetify',
      "@fortawesome/vue-fontawesome",
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/pro-solid-svg-icons",
      "@fortawesome/pro-regular-svg-icons",
      "@fortawesome/free-brands-svg-icons"
    ],
  },

  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    ssr: {
      noExternal: ['vuetify']
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    logLevel: 'info',
    plugins: [graphql()]
  },

  nitro: {
    prerender: {
      routes: [
        '/assets/images/*',
      ]
    },
    compressPublicAssets: true,
  },

  compatibilityDate: '2025-02-22',
})