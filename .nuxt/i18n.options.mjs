
// @ts-nocheck
import locale_en_45GB_46ts_af9fc1ce from "#nuxt-i18n/af9fc1ce";
import locale_pl_45PL_46ts_85753421 from "#nuxt-i18n/85753421";
import locale_de_45DE_46ts_6bce3660 from "#nuxt-i18n/6bce3660";

export const localeCodes =  [
  "en-GB",
  "pl-PL",
  "testde"
]

export const localeLoaders = {
  "en-GB": [
    {
      key: "locale_en_45GB_46ts_af9fc1ce",
      load: () => Promise.resolve(locale_en_45GB_46ts_af9fc1ce),
      cache: false
    }
  ],
  "pl-PL": [
    {
      key: "locale_pl_45PL_46ts_85753421",
      load: () => Promise.resolve(locale_pl_45PL_46ts_85753421),
      cache: false
    }
  ],
  testde: [
    {
      key: "locale_de_45DE_46ts_6bce3660",
      load: () => Promise.resolve(locale_de_45DE_46ts_6bce3660),
      cache: false
    }
  ]
}

export const vueI18nConfigs = [
  () => import("#nuxt-i18n/5c961c50" /* webpackChunkName: "config_config_46ts_5c961c50" */)
]

export const nuxtI18nOptions = {
  restructureDir: "i18n",
  experimental: {
    localeDetector: "",
    switchLocalePathLinkSSR: false,
    autoImportTranslationFunctions: false,
    typedPages: true,
    typedOptionsAndMessages: false,
    generatedLocaleFilePathFormat: "absolute",
    alternateLinkCanonicalQueries: false,
    hmr: true
  },
  bundle: {
    compositionOnly: true,
    runtimeOnly: false,
    fullInstall: true,
    dropMessageCompiler: false,
    optimizeTranslationDirective: true
  },
  compilation: {
    strictMessage: true,
    escapeHtml: false
  },
  customBlocks: {
    defaultSFCLang: "json",
    globalSFCScope: false
  },
  locales: [
    {
      code: "en-GB",
      language: "en-GB",
      files: [
        {
          path: "C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi/apps/Starter-Template/i18n/src/langs/en-GB.ts",
          cache: undefined
        }
      ]
    },
    {
      code: "pl-PL",
      language: "pl-PL",
      files: [
        {
          path: "C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi/apps/Starter-Template/i18n/src/langs/pl-PL.ts",
          cache: undefined
        }
      ]
    },
    {
      code: "testde",
      language: "de-DE",
      localeId: "c19b753b5f2c4bea8ad15e00027802d4",
      files: [
        {
          path: "C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi/apps/Starter-Template/i18n/src/langs/de-DE.ts",
          cache: undefined
        }
      ]
    }
  ],
  defaultLocale: "en-GB",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  trailingSlash: false,
  defaultLocaleRouteNameSuffix: "default",
  strategy: "prefix_except_default",
  lazy: false,
  langDir: "./src/langs/",
  rootRedirect: undefined,
  detectBrowserLanguage: false,
  differentDomains: false,
  baseUrl: "",
  customRoutes: "page",
  pages: {},
  skipSettingLocaleOnNavigate: false,
  types: "composition",
  debug: false,
  parallelPlugin: false,
  multiDomainLocales: false,
  i18nModules: []
}

export const normalizedLocales = [
  {
    code: "en-GB",
    language: "en-GB",
    files: [
      {
        path: "C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi/apps/Starter-Template/i18n/src/langs/en-GB.ts",
        cache: undefined
      }
    ]
  },
  {
    code: "pl-PL",
    language: "pl-PL",
    files: [
      {
        path: "C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi/apps/Starter-Template/i18n/src/langs/pl-PL.ts",
        cache: undefined
      }
    ]
  },
  {
    code: "testde",
    language: "de-DE",
    localeId: "c19b753b5f2c4bea8ad15e00027802d4",
    files: [
      {
        path: "C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi/apps/Starter-Template/i18n/src/langs/de-DE.ts",
        cache: undefined
      }
    ]
  }
]

export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const parallelPlugin = false
export const isSSG = false
export const hasPages = true

export const DEFAULT_COOKIE_KEY = "i18n_redirected"
export const DEFAULT_DYNAMIC_PARAMS_KEY = "nuxtI18nInternal"
export const SWITCH_LOCALE_PATH_LINK_IDENTIFIER = "nuxt-i18n-slp"
/** client **/

/** client-end **/