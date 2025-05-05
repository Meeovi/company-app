
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
    jit: true,
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
        "C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi/apps/Starter-Template/i18n/src/langs/en-GB.ts"
      ]
    },
    {
      code: "pl-PL",
      language: "pl-PL",
      files: [
        "C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi/apps/Starter-Template/i18n/src/langs/pl-PL.ts"
      ]
    },
    {
      code: "testde",
      language: "de-DE",
      localeId: "c19b753b5f2c4bea8ad15e00027802d4",
      files: [
        "C:/Users/Basti/OneDrive/Documents/My_Websites/Handmade_Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi/apps/Starter-Template/i18n/src/langs/de-DE.ts"
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
if(import.meta.hot) {

function deepEqual(a, b, ignoreKeys = []) {
  // Same reference?
  if (a === b) return true

  // Check if either is null or not an object
  if (a == null || b == null || typeof a !== 'object' || typeof b !== 'object') {
    return false
  }

  // Get top-level keys, excluding ignoreKeys
  const keysA = Object.keys(a).filter(k => !ignoreKeys.includes(k))
  const keysB = Object.keys(b).filter(k => !ignoreKeys.includes(k))

  // Must have the same number of keys (after ignoring)
  if (keysA.length !== keysB.length) {
    return false
  }

  // Check each property
  for (const key of keysA) {
    if (!keysB.includes(key)) {
      return false
    }

    const valA = a[key]
    const valB = b[key]

    // Compare functions stringified
    if (typeof valA === 'function' && typeof valB === 'function') {
      if (valA.toString() !== valB.toString()) {
        return false
      }
    }
    // If nested, do a normal recursive check (no ignoring at deeper levels)
    else if (typeof valA === 'object' && typeof valB === 'object') {
      if (!deepEqual(valA, valB)) {
        return false
      }
    }
    // Compare primitive values
    else if (valA !== valB) {
      return false
    }
  }

  return true
}



async function loadCfg(config) {
  const nuxt = useNuxtApp()
  const { default: resolver } = await config()
  return typeof resolver === 'function' ? await nuxt.runWithContext(() => resolver()) : resolver
}


  import.meta.hot.accept("../i18n/src/langs/en-GB.ts", async mod => {
    localeLoaders["en-GB"][0].load = () => Promise.resolve(mod.default)
    await useNuxtApp()._nuxtI18nDev.resetI18nProperties("en-GB")
  })

  import.meta.hot.accept("../i18n/src/langs/pl-PL.ts", async mod => {
    localeLoaders["pl-PL"][0].load = () => Promise.resolve(mod.default)
    await useNuxtApp()._nuxtI18nDev.resetI18nProperties("pl-PL")
  })

  import.meta.hot.accept("../i18n/src/langs/de-DE.ts", async mod => {
    localeLoaders["testde"][0].load = () => Promise.resolve(mod.default)
    await useNuxtApp()._nuxtI18nDev.resetI18nProperties("testde")
  })

  import.meta.hot.accept("../i18n/config.ts", async mod => {
    const [oldData, newData] = await Promise.all([loadCfg(vueI18nConfigs[0]), loadCfg(() => Promise.resolve(mod))]);
    vueI18nConfigs[0] = () => Promise.resolve(mod)
    if(deepEqual(oldData, newData, ['messages', 'numberFormats', 'datetimeFormats'])) {
      return await useNuxtApp()._nuxtI18nDev.resetI18nProperties()
    }
    import.meta.hot.send('i18n:options-complex-invalidation', {})
  })

}
/** client-end **/