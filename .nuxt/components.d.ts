
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'FooterNav': typeof import("../components/FooterNav.vue")['default']
    'RelatedRelatedposts': typeof import("../components/Related/relatedposts.vue")['default']
    'RelatedRelatedproducts': typeof import("../components/Related/relatedproducts.vue")['default']
    'Search': typeof import("../components/Search/search.vue")['default']
    'Ecosystemmenu': typeof import("../components/ecosystemmenu.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../../../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
    'NuxtPicture': typeof import("../../../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
    'SfAccordionItem': typeof import("@storefront-ui/vue")['SfAccordionItem']
    'SfBadge': typeof import("@storefront-ui/vue")['SfBadge']
    'SfButton': typeof import("@storefront-ui/vue")['SfButton']
    'SfCheckbox': typeof import("@storefront-ui/vue")['SfCheckbox']
    'SfChip': typeof import("@storefront-ui/vue")['SfChip']
    'SfCounter': typeof import("@storefront-ui/vue")['SfCounter']
    'SfDrawer': typeof import("@storefront-ui/vue")['SfDrawer']
    'SfDropdown': typeof import("@storefront-ui/vue")['SfDropdown']
    'SfIconAdd': typeof import("@storefront-ui/vue")['SfIconAdd']
    'SfIconAddShoppingCart': typeof import("@storefront-ui/vue")['SfIconAddShoppingCart']
    'SfIconAlokai': typeof import("@storefront-ui/vue")['SfIconAlokai']
    'SfIconAlokaiFull': typeof import("@storefront-ui/vue")['SfIconAlokaiFull']
    'SfIconArrowBack': typeof import("@storefront-ui/vue")['SfIconArrowBack']
    'SfIconArrowDownward': typeof import("@storefront-ui/vue")['SfIconArrowDownward']
    'SfIconArrowForward': typeof import("@storefront-ui/vue")['SfIconArrowForward']
    'SfIconArrowUpward': typeof import("@storefront-ui/vue")['SfIconArrowUpward']
    'SfIconBase': typeof import("@storefront-ui/vue")['SfIconBase']
    'SfIconBlock': typeof import("@storefront-ui/vue")['SfIconBlock']
    'SfIconCalendarToday': typeof import("@storefront-ui/vue")['SfIconCalendarToday']
    'SfIconCall': typeof import("@storefront-ui/vue")['SfIconCall']
    'SfIconCancel': typeof import("@storefront-ui/vue")['SfIconCancel']
    'SfIconCheck': typeof import("@storefront-ui/vue")['SfIconCheck']
    'SfIconCheckBox': typeof import("@storefront-ui/vue")['SfIconCheckBox']
    'SfIconCheckBoxOutlineBlank': typeof import("@storefront-ui/vue")['SfIconCheckBoxOutlineBlank']
    'SfIconCheckCircle': typeof import("@storefront-ui/vue")['SfIconCheckCircle']
    'SfIconChevronLeft': typeof import("@storefront-ui/vue")['SfIconChevronLeft']
    'SfIconChevronRight': typeof import("@storefront-ui/vue")['SfIconChevronRight']
    'SfIconCircle': typeof import("@storefront-ui/vue")['SfIconCircle']
    'SfIconClose': typeof import("@storefront-ui/vue")['SfIconClose']
    'SfIconCloseSm': typeof import("@storefront-ui/vue")['SfIconCloseSm']
    'SfIconCompareArrows': typeof import("@storefront-ui/vue")['SfIconCompareArrows']
    'SfIconContactSupport': typeof import("@storefront-ui/vue")['SfIconContactSupport']
    'SfIconCreditCard': typeof import("@storefront-ui/vue")['SfIconCreditCard']
    'SfIconDelete': typeof import("@storefront-ui/vue")['SfIconDelete']
    'SfIconDownload': typeof import("@storefront-ui/vue")['SfIconDownload']
    'SfIconEmail': typeof import("@storefront-ui/vue")['SfIconEmail']
    'SfIconError': typeof import("@storefront-ui/vue")['SfIconError']
    'SfIconExpandLess': typeof import("@storefront-ui/vue")['SfIconExpandLess']
    'SfIconExpandMore': typeof import("@storefront-ui/vue")['SfIconExpandMore']
    'SfIconFacebook': typeof import("@storefront-ui/vue")['SfIconFacebook']
    'SfIconFavorite': typeof import("@storefront-ui/vue")['SfIconFavorite']
    'SfIconFavoriteFilled': typeof import("@storefront-ui/vue")['SfIconFavoriteFilled']
    'SfIconGridView': typeof import("@storefront-ui/vue")['SfIconGridView']
    'SfIconHelp': typeof import("@storefront-ui/vue")['SfIconHelp']
    'SfIconHome': typeof import("@storefront-ui/vue")['SfIconHome']
    'SfIconIndeterminateCheckBox': typeof import("@storefront-ui/vue")['SfIconIndeterminateCheckBox']
    'SfIconInfo': typeof import("@storefront-ui/vue")['SfIconInfo']
    'SfIconInstagram': typeof import("@storefront-ui/vue")['SfIconInstagram']
    'SfIconLanguage': typeof import("@storefront-ui/vue")['SfIconLanguage']
    'SfIconLocalShipping': typeof import("@storefront-ui/vue")['SfIconLocalShipping']
    'SfIconLocalFireDepartment': typeof import("@storefront-ui/vue")['SfIconLocal_fire_department']
    'SfIconLocationOn': typeof import("@storefront-ui/vue")['SfIconLocationOn']
    'SfIconLocationOnFilled': typeof import("@storefront-ui/vue")['SfIconLocationOnFilled']
    'SfIconLock': typeof import("@storefront-ui/vue")['SfIconLock']
    'SfIconLockOpen': typeof import("@storefront-ui/vue")['SfIconLockOpen']
    'SfIconLogin': typeof import("@storefront-ui/vue")['SfIconLogin']
    'SfIconLogout': typeof import("@storefront-ui/vue")['SfIconLogout']
    'SfIconMenu': typeof import("@storefront-ui/vue")['SfIconMenu']
    'SfIconMoreHoriz': typeof import("@storefront-ui/vue")['SfIconMoreHoriz']
    'SfIconMoreVert': typeof import("@storefront-ui/vue")['SfIconMoreVert']
    'SfIconOpenInNew': typeof import("@storefront-ui/vue")['SfIconOpenInNew']
    'SfIconOpenSource': typeof import("@storefront-ui/vue")['SfIconOpenSource']
    'SfIconPackage': typeof import("@storefront-ui/vue")['SfIconPackage']
    'SfIconPercent': typeof import("@storefront-ui/vue")['SfIconPercent']
    'SfIconPerson': typeof import("@storefront-ui/vue")['SfIconPerson']
    'SfIconPinterest': typeof import("@storefront-ui/vue")['SfIconPinterest']
    'SfIconPublishedWithChanges': typeof import("@storefront-ui/vue")['SfIconPublishedWithChanges']
    'SfIconRadioButtonChecked': typeof import("@storefront-ui/vue")['SfIconRadioButtonChecked']
    'SfIconRadioButtonUnchecked': typeof import("@storefront-ui/vue")['SfIconRadioButtonUnchecked']
    'SfIconReact': typeof import("@storefront-ui/vue")['SfIconReact']
    'SfIconRemove': typeof import("@storefront-ui/vue")['SfIconRemove']
    'SfIconRemoveShoppingCart': typeof import("@storefront-ui/vue")['SfIconRemoveShoppingCart']
    'SfIconSafetyCheck': typeof import("@storefront-ui/vue")['SfIconSafetyCheck']
    'SfIconSchedule': typeof import("@storefront-ui/vue")['SfIconSchedule']
    'SfIconSearch': typeof import("@storefront-ui/vue")['SfIconSearch']
    'SfIconSell': typeof import("@storefront-ui/vue")['SfIconSell']
    'SfIconShare': typeof import("@storefront-ui/vue")['SfIconShare']
    'SfIconShoppingCart': typeof import("@storefront-ui/vue")['SfIconShoppingCart']
    'SfIconShoppingCartCheckout': typeof import("@storefront-ui/vue")['SfIconShoppingCartCheckout']
    'SfIconSort': typeof import("@storefront-ui/vue")['SfIconSort']
    'SfIconStar': typeof import("@storefront-ui/vue")['SfIconStar']
    'SfIconStarFilled': typeof import("@storefront-ui/vue")['SfIconStarFilled']
    'SfIconStarHalf': typeof import("@storefront-ui/vue")['SfIconStarHalf']
    'SfIconThumbDown': typeof import("@storefront-ui/vue")['SfIconThumbDown']
    'SfIconThumbUp': typeof import("@storefront-ui/vue")['SfIconThumbUp']
    'SfIconTune': typeof import("@storefront-ui/vue")['SfIconTune']
    'SfIconTwitter': typeof import("@storefront-ui/vue")['SfIconTwitter']
    'SfIconUndo': typeof import("@storefront-ui/vue")['SfIconUndo']
    'SfIconUnfoldMore': typeof import("@storefront-ui/vue")['SfIconUnfoldMore']
    'SfIconUpload': typeof import("@storefront-ui/vue")['SfIconUpload']
    'SfIconViewList': typeof import("@storefront-ui/vue")['SfIconViewList']
    'SfIconVisibility': typeof import("@storefront-ui/vue")['SfIconVisibility']
    'SfIconVisibilityOff': typeof import("@storefront-ui/vue")['SfIconVisibilityOff']
    'SfIconVsfDiamond': typeof import("@storefront-ui/vue")['SfIconVsfDiamond']
    'SfIconVuejs': typeof import("@storefront-ui/vue")['SfIconVuejs']
    'SfIconVuestorefront': typeof import("@storefront-ui/vue")['SfIconVuestorefront']
    'SfIconWarehouse': typeof import("@storefront-ui/vue")['SfIconWarehouse']
    'SfIconWarning': typeof import("@storefront-ui/vue")['SfIconWarning']
    'SfIconYoutube': typeof import("@storefront-ui/vue")['SfIconYoutube']
    'SfInput': typeof import("@storefront-ui/vue")['SfInput']
    'SfLink': typeof import("@storefront-ui/vue")['SfLink']
    'SfListItem': typeof import("@storefront-ui/vue")['SfListItem']
    'SfLoaderCircular': typeof import("@storefront-ui/vue")['SfLoaderCircular']
    'SfLoaderLinear': typeof import("@storefront-ui/vue")['SfLoaderLinear']
    'SfModal': typeof import("@storefront-ui/vue")['SfModal']
    'SfProgressCircular': typeof import("@storefront-ui/vue")['SfProgressCircular']
    'SfProgressLinear': typeof import("@storefront-ui/vue")['SfProgressLinear']
    'SfRadio': typeof import("@storefront-ui/vue")['SfRadio']
    'SfRating': typeof import("@storefront-ui/vue")['SfRating']
    'SfRatingButton': typeof import("@storefront-ui/vue")['SfRatingButton']
    'SfScrollable': typeof import("@storefront-ui/vue")['SfScrollable']
    'SfSelect': typeof import("@storefront-ui/vue")['SfSelect']
    'SfSwitch': typeof import("@storefront-ui/vue")['SfSwitch']
    'SfTextarea': typeof import("@storefront-ui/vue")['SfTextarea']
    'SfThumbnail': typeof import("@storefront-ui/vue")['SfThumbnail']
    'SfTooltip': typeof import("@storefront-ui/vue")['SfTooltip']
    'NuxtLinkLocale': typeof import("../../../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']
    'SwitchLocalePathLink': typeof import("../../../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyFooterNav': LazyComponent<typeof import("../components/FooterNav.vue")['default']>
    'LazyRelatedRelatedposts': LazyComponent<typeof import("../components/Related/relatedposts.vue")['default']>
    'LazyRelatedRelatedproducts': LazyComponent<typeof import("../components/Related/relatedproducts.vue")['default']>
    'LazySearch': LazyComponent<typeof import("../components/Search/search.vue")['default']>
    'LazyEcosystemmenu': LazyComponent<typeof import("../components/ecosystemmenu.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../../../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
    'LazyNuxtPicture': LazyComponent<typeof import("../../../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
    'LazySfAccordionItem': LazyComponent<typeof import("@storefront-ui/vue")['SfAccordionItem']>
    'LazySfBadge': LazyComponent<typeof import("@storefront-ui/vue")['SfBadge']>
    'LazySfButton': LazyComponent<typeof import("@storefront-ui/vue")['SfButton']>
    'LazySfCheckbox': LazyComponent<typeof import("@storefront-ui/vue")['SfCheckbox']>
    'LazySfChip': LazyComponent<typeof import("@storefront-ui/vue")['SfChip']>
    'LazySfCounter': LazyComponent<typeof import("@storefront-ui/vue")['SfCounter']>
    'LazySfDrawer': LazyComponent<typeof import("@storefront-ui/vue")['SfDrawer']>
    'LazySfDropdown': LazyComponent<typeof import("@storefront-ui/vue")['SfDropdown']>
    'LazySfIconAdd': LazyComponent<typeof import("@storefront-ui/vue")['SfIconAdd']>
    'LazySfIconAddShoppingCart': LazyComponent<typeof import("@storefront-ui/vue")['SfIconAddShoppingCart']>
    'LazySfIconAlokai': LazyComponent<typeof import("@storefront-ui/vue")['SfIconAlokai']>
    'LazySfIconAlokaiFull': LazyComponent<typeof import("@storefront-ui/vue")['SfIconAlokaiFull']>
    'LazySfIconArrowBack': LazyComponent<typeof import("@storefront-ui/vue")['SfIconArrowBack']>
    'LazySfIconArrowDownward': LazyComponent<typeof import("@storefront-ui/vue")['SfIconArrowDownward']>
    'LazySfIconArrowForward': LazyComponent<typeof import("@storefront-ui/vue")['SfIconArrowForward']>
    'LazySfIconArrowUpward': LazyComponent<typeof import("@storefront-ui/vue")['SfIconArrowUpward']>
    'LazySfIconBase': LazyComponent<typeof import("@storefront-ui/vue")['SfIconBase']>
    'LazySfIconBlock': LazyComponent<typeof import("@storefront-ui/vue")['SfIconBlock']>
    'LazySfIconCalendarToday': LazyComponent<typeof import("@storefront-ui/vue")['SfIconCalendarToday']>
    'LazySfIconCall': LazyComponent<typeof import("@storefront-ui/vue")['SfIconCall']>
    'LazySfIconCancel': LazyComponent<typeof import("@storefront-ui/vue")['SfIconCancel']>
    'LazySfIconCheck': LazyComponent<typeof import("@storefront-ui/vue")['SfIconCheck']>
    'LazySfIconCheckBox': LazyComponent<typeof import("@storefront-ui/vue")['SfIconCheckBox']>
    'LazySfIconCheckBoxOutlineBlank': LazyComponent<typeof import("@storefront-ui/vue")['SfIconCheckBoxOutlineBlank']>
    'LazySfIconCheckCircle': LazyComponent<typeof import("@storefront-ui/vue")['SfIconCheckCircle']>
    'LazySfIconChevronLeft': LazyComponent<typeof import("@storefront-ui/vue")['SfIconChevronLeft']>
    'LazySfIconChevronRight': LazyComponent<typeof import("@storefront-ui/vue")['SfIconChevronRight']>
    'LazySfIconCircle': LazyComponent<typeof import("@storefront-ui/vue")['SfIconCircle']>
    'LazySfIconClose': LazyComponent<typeof import("@storefront-ui/vue")['SfIconClose']>
    'LazySfIconCloseSm': LazyComponent<typeof import("@storefront-ui/vue")['SfIconCloseSm']>
    'LazySfIconCompareArrows': LazyComponent<typeof import("@storefront-ui/vue")['SfIconCompareArrows']>
    'LazySfIconContactSupport': LazyComponent<typeof import("@storefront-ui/vue")['SfIconContactSupport']>
    'LazySfIconCreditCard': LazyComponent<typeof import("@storefront-ui/vue")['SfIconCreditCard']>
    'LazySfIconDelete': LazyComponent<typeof import("@storefront-ui/vue")['SfIconDelete']>
    'LazySfIconDownload': LazyComponent<typeof import("@storefront-ui/vue")['SfIconDownload']>
    'LazySfIconEmail': LazyComponent<typeof import("@storefront-ui/vue")['SfIconEmail']>
    'LazySfIconError': LazyComponent<typeof import("@storefront-ui/vue")['SfIconError']>
    'LazySfIconExpandLess': LazyComponent<typeof import("@storefront-ui/vue")['SfIconExpandLess']>
    'LazySfIconExpandMore': LazyComponent<typeof import("@storefront-ui/vue")['SfIconExpandMore']>
    'LazySfIconFacebook': LazyComponent<typeof import("@storefront-ui/vue")['SfIconFacebook']>
    'LazySfIconFavorite': LazyComponent<typeof import("@storefront-ui/vue")['SfIconFavorite']>
    'LazySfIconFavoriteFilled': LazyComponent<typeof import("@storefront-ui/vue")['SfIconFavoriteFilled']>
    'LazySfIconGridView': LazyComponent<typeof import("@storefront-ui/vue")['SfIconGridView']>
    'LazySfIconHelp': LazyComponent<typeof import("@storefront-ui/vue")['SfIconHelp']>
    'LazySfIconHome': LazyComponent<typeof import("@storefront-ui/vue")['SfIconHome']>
    'LazySfIconIndeterminateCheckBox': LazyComponent<typeof import("@storefront-ui/vue")['SfIconIndeterminateCheckBox']>
    'LazySfIconInfo': LazyComponent<typeof import("@storefront-ui/vue")['SfIconInfo']>
    'LazySfIconInstagram': LazyComponent<typeof import("@storefront-ui/vue")['SfIconInstagram']>
    'LazySfIconLanguage': LazyComponent<typeof import("@storefront-ui/vue")['SfIconLanguage']>
    'LazySfIconLocalShipping': LazyComponent<typeof import("@storefront-ui/vue")['SfIconLocalShipping']>
    'LazySfIconLocalFireDepartment': LazyComponent<typeof import("@storefront-ui/vue")['SfIconLocal_fire_department']>
    'LazySfIconLocationOn': LazyComponent<typeof import("@storefront-ui/vue")['SfIconLocationOn']>
    'LazySfIconLocationOnFilled': LazyComponent<typeof import("@storefront-ui/vue")['SfIconLocationOnFilled']>
    'LazySfIconLock': LazyComponent<typeof import("@storefront-ui/vue")['SfIconLock']>
    'LazySfIconLockOpen': LazyComponent<typeof import("@storefront-ui/vue")['SfIconLockOpen']>
    'LazySfIconLogin': LazyComponent<typeof import("@storefront-ui/vue")['SfIconLogin']>
    'LazySfIconLogout': LazyComponent<typeof import("@storefront-ui/vue")['SfIconLogout']>
    'LazySfIconMenu': LazyComponent<typeof import("@storefront-ui/vue")['SfIconMenu']>
    'LazySfIconMoreHoriz': LazyComponent<typeof import("@storefront-ui/vue")['SfIconMoreHoriz']>
    'LazySfIconMoreVert': LazyComponent<typeof import("@storefront-ui/vue")['SfIconMoreVert']>
    'LazySfIconOpenInNew': LazyComponent<typeof import("@storefront-ui/vue")['SfIconOpenInNew']>
    'LazySfIconOpenSource': LazyComponent<typeof import("@storefront-ui/vue")['SfIconOpenSource']>
    'LazySfIconPackage': LazyComponent<typeof import("@storefront-ui/vue")['SfIconPackage']>
    'LazySfIconPercent': LazyComponent<typeof import("@storefront-ui/vue")['SfIconPercent']>
    'LazySfIconPerson': LazyComponent<typeof import("@storefront-ui/vue")['SfIconPerson']>
    'LazySfIconPinterest': LazyComponent<typeof import("@storefront-ui/vue")['SfIconPinterest']>
    'LazySfIconPublishedWithChanges': LazyComponent<typeof import("@storefront-ui/vue")['SfIconPublishedWithChanges']>
    'LazySfIconRadioButtonChecked': LazyComponent<typeof import("@storefront-ui/vue")['SfIconRadioButtonChecked']>
    'LazySfIconRadioButtonUnchecked': LazyComponent<typeof import("@storefront-ui/vue")['SfIconRadioButtonUnchecked']>
    'LazySfIconReact': LazyComponent<typeof import("@storefront-ui/vue")['SfIconReact']>
    'LazySfIconRemove': LazyComponent<typeof import("@storefront-ui/vue")['SfIconRemove']>
    'LazySfIconRemoveShoppingCart': LazyComponent<typeof import("@storefront-ui/vue")['SfIconRemoveShoppingCart']>
    'LazySfIconSafetyCheck': LazyComponent<typeof import("@storefront-ui/vue")['SfIconSafetyCheck']>
    'LazySfIconSchedule': LazyComponent<typeof import("@storefront-ui/vue")['SfIconSchedule']>
    'LazySfIconSearch': LazyComponent<typeof import("@storefront-ui/vue")['SfIconSearch']>
    'LazySfIconSell': LazyComponent<typeof import("@storefront-ui/vue")['SfIconSell']>
    'LazySfIconShare': LazyComponent<typeof import("@storefront-ui/vue")['SfIconShare']>
    'LazySfIconShoppingCart': LazyComponent<typeof import("@storefront-ui/vue")['SfIconShoppingCart']>
    'LazySfIconShoppingCartCheckout': LazyComponent<typeof import("@storefront-ui/vue")['SfIconShoppingCartCheckout']>
    'LazySfIconSort': LazyComponent<typeof import("@storefront-ui/vue")['SfIconSort']>
    'LazySfIconStar': LazyComponent<typeof import("@storefront-ui/vue")['SfIconStar']>
    'LazySfIconStarFilled': LazyComponent<typeof import("@storefront-ui/vue")['SfIconStarFilled']>
    'LazySfIconStarHalf': LazyComponent<typeof import("@storefront-ui/vue")['SfIconStarHalf']>
    'LazySfIconThumbDown': LazyComponent<typeof import("@storefront-ui/vue")['SfIconThumbDown']>
    'LazySfIconThumbUp': LazyComponent<typeof import("@storefront-ui/vue")['SfIconThumbUp']>
    'LazySfIconTune': LazyComponent<typeof import("@storefront-ui/vue")['SfIconTune']>
    'LazySfIconTwitter': LazyComponent<typeof import("@storefront-ui/vue")['SfIconTwitter']>
    'LazySfIconUndo': LazyComponent<typeof import("@storefront-ui/vue")['SfIconUndo']>
    'LazySfIconUnfoldMore': LazyComponent<typeof import("@storefront-ui/vue")['SfIconUnfoldMore']>
    'LazySfIconUpload': LazyComponent<typeof import("@storefront-ui/vue")['SfIconUpload']>
    'LazySfIconViewList': LazyComponent<typeof import("@storefront-ui/vue")['SfIconViewList']>
    'LazySfIconVisibility': LazyComponent<typeof import("@storefront-ui/vue")['SfIconVisibility']>
    'LazySfIconVisibilityOff': LazyComponent<typeof import("@storefront-ui/vue")['SfIconVisibilityOff']>
    'LazySfIconVsfDiamond': LazyComponent<typeof import("@storefront-ui/vue")['SfIconVsfDiamond']>
    'LazySfIconVuejs': LazyComponent<typeof import("@storefront-ui/vue")['SfIconVuejs']>
    'LazySfIconVuestorefront': LazyComponent<typeof import("@storefront-ui/vue")['SfIconVuestorefront']>
    'LazySfIconWarehouse': LazyComponent<typeof import("@storefront-ui/vue")['SfIconWarehouse']>
    'LazySfIconWarning': LazyComponent<typeof import("@storefront-ui/vue")['SfIconWarning']>
    'LazySfIconYoutube': LazyComponent<typeof import("@storefront-ui/vue")['SfIconYoutube']>
    'LazySfInput': LazyComponent<typeof import("@storefront-ui/vue")['SfInput']>
    'LazySfLink': LazyComponent<typeof import("@storefront-ui/vue")['SfLink']>
    'LazySfListItem': LazyComponent<typeof import("@storefront-ui/vue")['SfListItem']>
    'LazySfLoaderCircular': LazyComponent<typeof import("@storefront-ui/vue")['SfLoaderCircular']>
    'LazySfLoaderLinear': LazyComponent<typeof import("@storefront-ui/vue")['SfLoaderLinear']>
    'LazySfModal': LazyComponent<typeof import("@storefront-ui/vue")['SfModal']>
    'LazySfProgressCircular': LazyComponent<typeof import("@storefront-ui/vue")['SfProgressCircular']>
    'LazySfProgressLinear': LazyComponent<typeof import("@storefront-ui/vue")['SfProgressLinear']>
    'LazySfRadio': LazyComponent<typeof import("@storefront-ui/vue")['SfRadio']>
    'LazySfRating': LazyComponent<typeof import("@storefront-ui/vue")['SfRating']>
    'LazySfRatingButton': LazyComponent<typeof import("@storefront-ui/vue")['SfRatingButton']>
    'LazySfScrollable': LazyComponent<typeof import("@storefront-ui/vue")['SfScrollable']>
    'LazySfSelect': LazyComponent<typeof import("@storefront-ui/vue")['SfSelect']>
    'LazySfSwitch': LazyComponent<typeof import("@storefront-ui/vue")['SfSwitch']>
    'LazySfTextarea': LazyComponent<typeof import("@storefront-ui/vue")['SfTextarea']>
    'LazySfThumbnail': LazyComponent<typeof import("@storefront-ui/vue")['SfThumbnail']>
    'LazySfTooltip': LazyComponent<typeof import("@storefront-ui/vue")['SfTooltip']>
    'LazyNuxtLinkLocale': LazyComponent<typeof import("../../../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']>
    'LazySwitchLocalePathLink': LazyComponent<typeof import("../../../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const FooterNav: typeof import("../components/FooterNav.vue")['default']
export const RelatedRelatedposts: typeof import("../components/Related/relatedposts.vue")['default']
export const RelatedRelatedproducts: typeof import("../components/Related/relatedproducts.vue")['default']
export const Search: typeof import("../components/Search/search.vue")['default']
export const Ecosystemmenu: typeof import("../components/ecosystemmenu.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../../../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
export const NuxtPicture: typeof import("../../../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
export const SfAccordionItem: typeof import("@storefront-ui/vue")['SfAccordionItem']
export const SfBadge: typeof import("@storefront-ui/vue")['SfBadge']
export const SfButton: typeof import("@storefront-ui/vue")['SfButton']
export const SfCheckbox: typeof import("@storefront-ui/vue")['SfCheckbox']
export const SfChip: typeof import("@storefront-ui/vue")['SfChip']
export const SfCounter: typeof import("@storefront-ui/vue")['SfCounter']
export const SfDrawer: typeof import("@storefront-ui/vue")['SfDrawer']
export const SfDropdown: typeof import("@storefront-ui/vue")['SfDropdown']
export const SfIconAdd: typeof import("@storefront-ui/vue")['SfIconAdd']
export const SfIconAddShoppingCart: typeof import("@storefront-ui/vue")['SfIconAddShoppingCart']
export const SfIconAlokai: typeof import("@storefront-ui/vue")['SfIconAlokai']
export const SfIconAlokaiFull: typeof import("@storefront-ui/vue")['SfIconAlokaiFull']
export const SfIconArrowBack: typeof import("@storefront-ui/vue")['SfIconArrowBack']
export const SfIconArrowDownward: typeof import("@storefront-ui/vue")['SfIconArrowDownward']
export const SfIconArrowForward: typeof import("@storefront-ui/vue")['SfIconArrowForward']
export const SfIconArrowUpward: typeof import("@storefront-ui/vue")['SfIconArrowUpward']
export const SfIconBase: typeof import("@storefront-ui/vue")['SfIconBase']
export const SfIconBlock: typeof import("@storefront-ui/vue")['SfIconBlock']
export const SfIconCalendarToday: typeof import("@storefront-ui/vue")['SfIconCalendarToday']
export const SfIconCall: typeof import("@storefront-ui/vue")['SfIconCall']
export const SfIconCancel: typeof import("@storefront-ui/vue")['SfIconCancel']
export const SfIconCheck: typeof import("@storefront-ui/vue")['SfIconCheck']
export const SfIconCheckBox: typeof import("@storefront-ui/vue")['SfIconCheckBox']
export const SfIconCheckBoxOutlineBlank: typeof import("@storefront-ui/vue")['SfIconCheckBoxOutlineBlank']
export const SfIconCheckCircle: typeof import("@storefront-ui/vue")['SfIconCheckCircle']
export const SfIconChevronLeft: typeof import("@storefront-ui/vue")['SfIconChevronLeft']
export const SfIconChevronRight: typeof import("@storefront-ui/vue")['SfIconChevronRight']
export const SfIconCircle: typeof import("@storefront-ui/vue")['SfIconCircle']
export const SfIconClose: typeof import("@storefront-ui/vue")['SfIconClose']
export const SfIconCloseSm: typeof import("@storefront-ui/vue")['SfIconCloseSm']
export const SfIconCompareArrows: typeof import("@storefront-ui/vue")['SfIconCompareArrows']
export const SfIconContactSupport: typeof import("@storefront-ui/vue")['SfIconContactSupport']
export const SfIconCreditCard: typeof import("@storefront-ui/vue")['SfIconCreditCard']
export const SfIconDelete: typeof import("@storefront-ui/vue")['SfIconDelete']
export const SfIconDownload: typeof import("@storefront-ui/vue")['SfIconDownload']
export const SfIconEmail: typeof import("@storefront-ui/vue")['SfIconEmail']
export const SfIconError: typeof import("@storefront-ui/vue")['SfIconError']
export const SfIconExpandLess: typeof import("@storefront-ui/vue")['SfIconExpandLess']
export const SfIconExpandMore: typeof import("@storefront-ui/vue")['SfIconExpandMore']
export const SfIconFacebook: typeof import("@storefront-ui/vue")['SfIconFacebook']
export const SfIconFavorite: typeof import("@storefront-ui/vue")['SfIconFavorite']
export const SfIconFavoriteFilled: typeof import("@storefront-ui/vue")['SfIconFavoriteFilled']
export const SfIconGridView: typeof import("@storefront-ui/vue")['SfIconGridView']
export const SfIconHelp: typeof import("@storefront-ui/vue")['SfIconHelp']
export const SfIconHome: typeof import("@storefront-ui/vue")['SfIconHome']
export const SfIconIndeterminateCheckBox: typeof import("@storefront-ui/vue")['SfIconIndeterminateCheckBox']
export const SfIconInfo: typeof import("@storefront-ui/vue")['SfIconInfo']
export const SfIconInstagram: typeof import("@storefront-ui/vue")['SfIconInstagram']
export const SfIconLanguage: typeof import("@storefront-ui/vue")['SfIconLanguage']
export const SfIconLocalShipping: typeof import("@storefront-ui/vue")['SfIconLocalShipping']
export const SfIconLocalFireDepartment: typeof import("@storefront-ui/vue")['SfIconLocal_fire_department']
export const SfIconLocationOn: typeof import("@storefront-ui/vue")['SfIconLocationOn']
export const SfIconLocationOnFilled: typeof import("@storefront-ui/vue")['SfIconLocationOnFilled']
export const SfIconLock: typeof import("@storefront-ui/vue")['SfIconLock']
export const SfIconLockOpen: typeof import("@storefront-ui/vue")['SfIconLockOpen']
export const SfIconLogin: typeof import("@storefront-ui/vue")['SfIconLogin']
export const SfIconLogout: typeof import("@storefront-ui/vue")['SfIconLogout']
export const SfIconMenu: typeof import("@storefront-ui/vue")['SfIconMenu']
export const SfIconMoreHoriz: typeof import("@storefront-ui/vue")['SfIconMoreHoriz']
export const SfIconMoreVert: typeof import("@storefront-ui/vue")['SfIconMoreVert']
export const SfIconOpenInNew: typeof import("@storefront-ui/vue")['SfIconOpenInNew']
export const SfIconOpenSource: typeof import("@storefront-ui/vue")['SfIconOpenSource']
export const SfIconPackage: typeof import("@storefront-ui/vue")['SfIconPackage']
export const SfIconPercent: typeof import("@storefront-ui/vue")['SfIconPercent']
export const SfIconPerson: typeof import("@storefront-ui/vue")['SfIconPerson']
export const SfIconPinterest: typeof import("@storefront-ui/vue")['SfIconPinterest']
export const SfIconPublishedWithChanges: typeof import("@storefront-ui/vue")['SfIconPublishedWithChanges']
export const SfIconRadioButtonChecked: typeof import("@storefront-ui/vue")['SfIconRadioButtonChecked']
export const SfIconRadioButtonUnchecked: typeof import("@storefront-ui/vue")['SfIconRadioButtonUnchecked']
export const SfIconReact: typeof import("@storefront-ui/vue")['SfIconReact']
export const SfIconRemove: typeof import("@storefront-ui/vue")['SfIconRemove']
export const SfIconRemoveShoppingCart: typeof import("@storefront-ui/vue")['SfIconRemoveShoppingCart']
export const SfIconSafetyCheck: typeof import("@storefront-ui/vue")['SfIconSafetyCheck']
export const SfIconSchedule: typeof import("@storefront-ui/vue")['SfIconSchedule']
export const SfIconSearch: typeof import("@storefront-ui/vue")['SfIconSearch']
export const SfIconSell: typeof import("@storefront-ui/vue")['SfIconSell']
export const SfIconShare: typeof import("@storefront-ui/vue")['SfIconShare']
export const SfIconShoppingCart: typeof import("@storefront-ui/vue")['SfIconShoppingCart']
export const SfIconShoppingCartCheckout: typeof import("@storefront-ui/vue")['SfIconShoppingCartCheckout']
export const SfIconSort: typeof import("@storefront-ui/vue")['SfIconSort']
export const SfIconStar: typeof import("@storefront-ui/vue")['SfIconStar']
export const SfIconStarFilled: typeof import("@storefront-ui/vue")['SfIconStarFilled']
export const SfIconStarHalf: typeof import("@storefront-ui/vue")['SfIconStarHalf']
export const SfIconThumbDown: typeof import("@storefront-ui/vue")['SfIconThumbDown']
export const SfIconThumbUp: typeof import("@storefront-ui/vue")['SfIconThumbUp']
export const SfIconTune: typeof import("@storefront-ui/vue")['SfIconTune']
export const SfIconTwitter: typeof import("@storefront-ui/vue")['SfIconTwitter']
export const SfIconUndo: typeof import("@storefront-ui/vue")['SfIconUndo']
export const SfIconUnfoldMore: typeof import("@storefront-ui/vue")['SfIconUnfoldMore']
export const SfIconUpload: typeof import("@storefront-ui/vue")['SfIconUpload']
export const SfIconViewList: typeof import("@storefront-ui/vue")['SfIconViewList']
export const SfIconVisibility: typeof import("@storefront-ui/vue")['SfIconVisibility']
export const SfIconVisibilityOff: typeof import("@storefront-ui/vue")['SfIconVisibilityOff']
export const SfIconVsfDiamond: typeof import("@storefront-ui/vue")['SfIconVsfDiamond']
export const SfIconVuejs: typeof import("@storefront-ui/vue")['SfIconVuejs']
export const SfIconVuestorefront: typeof import("@storefront-ui/vue")['SfIconVuestorefront']
export const SfIconWarehouse: typeof import("@storefront-ui/vue")['SfIconWarehouse']
export const SfIconWarning: typeof import("@storefront-ui/vue")['SfIconWarning']
export const SfIconYoutube: typeof import("@storefront-ui/vue")['SfIconYoutube']
export const SfInput: typeof import("@storefront-ui/vue")['SfInput']
export const SfLink: typeof import("@storefront-ui/vue")['SfLink']
export const SfListItem: typeof import("@storefront-ui/vue")['SfListItem']
export const SfLoaderCircular: typeof import("@storefront-ui/vue")['SfLoaderCircular']
export const SfLoaderLinear: typeof import("@storefront-ui/vue")['SfLoaderLinear']
export const SfModal: typeof import("@storefront-ui/vue")['SfModal']
export const SfProgressCircular: typeof import("@storefront-ui/vue")['SfProgressCircular']
export const SfProgressLinear: typeof import("@storefront-ui/vue")['SfProgressLinear']
export const SfRadio: typeof import("@storefront-ui/vue")['SfRadio']
export const SfRating: typeof import("@storefront-ui/vue")['SfRating']
export const SfRatingButton: typeof import("@storefront-ui/vue")['SfRatingButton']
export const SfScrollable: typeof import("@storefront-ui/vue")['SfScrollable']
export const SfSelect: typeof import("@storefront-ui/vue")['SfSelect']
export const SfSwitch: typeof import("@storefront-ui/vue")['SfSwitch']
export const SfTextarea: typeof import("@storefront-ui/vue")['SfTextarea']
export const SfThumbnail: typeof import("@storefront-ui/vue")['SfThumbnail']
export const SfTooltip: typeof import("@storefront-ui/vue")['SfTooltip']
export const NuxtLinkLocale: typeof import("../../../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']
export const SwitchLocalePathLink: typeof import("../../../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyFooterNav: LazyComponent<typeof import("../components/FooterNav.vue")['default']>
export const LazyRelatedRelatedposts: LazyComponent<typeof import("../components/Related/relatedposts.vue")['default']>
export const LazyRelatedRelatedproducts: LazyComponent<typeof import("../components/Related/relatedproducts.vue")['default']>
export const LazySearch: LazyComponent<typeof import("../components/Search/search.vue")['default']>
export const LazyEcosystemmenu: LazyComponent<typeof import("../components/ecosystemmenu.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../../../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
export const LazyNuxtPicture: LazyComponent<typeof import("../../../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
export const LazySfAccordionItem: LazyComponent<typeof import("@storefront-ui/vue")['SfAccordionItem']>
export const LazySfBadge: LazyComponent<typeof import("@storefront-ui/vue")['SfBadge']>
export const LazySfButton: LazyComponent<typeof import("@storefront-ui/vue")['SfButton']>
export const LazySfCheckbox: LazyComponent<typeof import("@storefront-ui/vue")['SfCheckbox']>
export const LazySfChip: LazyComponent<typeof import("@storefront-ui/vue")['SfChip']>
export const LazySfCounter: LazyComponent<typeof import("@storefront-ui/vue")['SfCounter']>
export const LazySfDrawer: LazyComponent<typeof import("@storefront-ui/vue")['SfDrawer']>
export const LazySfDropdown: LazyComponent<typeof import("@storefront-ui/vue")['SfDropdown']>
export const LazySfIconAdd: LazyComponent<typeof import("@storefront-ui/vue")['SfIconAdd']>
export const LazySfIconAddShoppingCart: LazyComponent<typeof import("@storefront-ui/vue")['SfIconAddShoppingCart']>
export const LazySfIconAlokai: LazyComponent<typeof import("@storefront-ui/vue")['SfIconAlokai']>
export const LazySfIconAlokaiFull: LazyComponent<typeof import("@storefront-ui/vue")['SfIconAlokaiFull']>
export const LazySfIconArrowBack: LazyComponent<typeof import("@storefront-ui/vue")['SfIconArrowBack']>
export const LazySfIconArrowDownward: LazyComponent<typeof import("@storefront-ui/vue")['SfIconArrowDownward']>
export const LazySfIconArrowForward: LazyComponent<typeof import("@storefront-ui/vue")['SfIconArrowForward']>
export const LazySfIconArrowUpward: LazyComponent<typeof import("@storefront-ui/vue")['SfIconArrowUpward']>
export const LazySfIconBase: LazyComponent<typeof import("@storefront-ui/vue")['SfIconBase']>
export const LazySfIconBlock: LazyComponent<typeof import("@storefront-ui/vue")['SfIconBlock']>
export const LazySfIconCalendarToday: LazyComponent<typeof import("@storefront-ui/vue")['SfIconCalendarToday']>
export const LazySfIconCall: LazyComponent<typeof import("@storefront-ui/vue")['SfIconCall']>
export const LazySfIconCancel: LazyComponent<typeof import("@storefront-ui/vue")['SfIconCancel']>
export const LazySfIconCheck: LazyComponent<typeof import("@storefront-ui/vue")['SfIconCheck']>
export const LazySfIconCheckBox: LazyComponent<typeof import("@storefront-ui/vue")['SfIconCheckBox']>
export const LazySfIconCheckBoxOutlineBlank: LazyComponent<typeof import("@storefront-ui/vue")['SfIconCheckBoxOutlineBlank']>
export const LazySfIconCheckCircle: LazyComponent<typeof import("@storefront-ui/vue")['SfIconCheckCircle']>
export const LazySfIconChevronLeft: LazyComponent<typeof import("@storefront-ui/vue")['SfIconChevronLeft']>
export const LazySfIconChevronRight: LazyComponent<typeof import("@storefront-ui/vue")['SfIconChevronRight']>
export const LazySfIconCircle: LazyComponent<typeof import("@storefront-ui/vue")['SfIconCircle']>
export const LazySfIconClose: LazyComponent<typeof import("@storefront-ui/vue")['SfIconClose']>
export const LazySfIconCloseSm: LazyComponent<typeof import("@storefront-ui/vue")['SfIconCloseSm']>
export const LazySfIconCompareArrows: LazyComponent<typeof import("@storefront-ui/vue")['SfIconCompareArrows']>
export const LazySfIconContactSupport: LazyComponent<typeof import("@storefront-ui/vue")['SfIconContactSupport']>
export const LazySfIconCreditCard: LazyComponent<typeof import("@storefront-ui/vue")['SfIconCreditCard']>
export const LazySfIconDelete: LazyComponent<typeof import("@storefront-ui/vue")['SfIconDelete']>
export const LazySfIconDownload: LazyComponent<typeof import("@storefront-ui/vue")['SfIconDownload']>
export const LazySfIconEmail: LazyComponent<typeof import("@storefront-ui/vue")['SfIconEmail']>
export const LazySfIconError: LazyComponent<typeof import("@storefront-ui/vue")['SfIconError']>
export const LazySfIconExpandLess: LazyComponent<typeof import("@storefront-ui/vue")['SfIconExpandLess']>
export const LazySfIconExpandMore: LazyComponent<typeof import("@storefront-ui/vue")['SfIconExpandMore']>
export const LazySfIconFacebook: LazyComponent<typeof import("@storefront-ui/vue")['SfIconFacebook']>
export const LazySfIconFavorite: LazyComponent<typeof import("@storefront-ui/vue")['SfIconFavorite']>
export const LazySfIconFavoriteFilled: LazyComponent<typeof import("@storefront-ui/vue")['SfIconFavoriteFilled']>
export const LazySfIconGridView: LazyComponent<typeof import("@storefront-ui/vue")['SfIconGridView']>
export const LazySfIconHelp: LazyComponent<typeof import("@storefront-ui/vue")['SfIconHelp']>
export const LazySfIconHome: LazyComponent<typeof import("@storefront-ui/vue")['SfIconHome']>
export const LazySfIconIndeterminateCheckBox: LazyComponent<typeof import("@storefront-ui/vue")['SfIconIndeterminateCheckBox']>
export const LazySfIconInfo: LazyComponent<typeof import("@storefront-ui/vue")['SfIconInfo']>
export const LazySfIconInstagram: LazyComponent<typeof import("@storefront-ui/vue")['SfIconInstagram']>
export const LazySfIconLanguage: LazyComponent<typeof import("@storefront-ui/vue")['SfIconLanguage']>
export const LazySfIconLocalShipping: LazyComponent<typeof import("@storefront-ui/vue")['SfIconLocalShipping']>
export const LazySfIconLocalFireDepartment: LazyComponent<typeof import("@storefront-ui/vue")['SfIconLocal_fire_department']>
export const LazySfIconLocationOn: LazyComponent<typeof import("@storefront-ui/vue")['SfIconLocationOn']>
export const LazySfIconLocationOnFilled: LazyComponent<typeof import("@storefront-ui/vue")['SfIconLocationOnFilled']>
export const LazySfIconLock: LazyComponent<typeof import("@storefront-ui/vue")['SfIconLock']>
export const LazySfIconLockOpen: LazyComponent<typeof import("@storefront-ui/vue")['SfIconLockOpen']>
export const LazySfIconLogin: LazyComponent<typeof import("@storefront-ui/vue")['SfIconLogin']>
export const LazySfIconLogout: LazyComponent<typeof import("@storefront-ui/vue")['SfIconLogout']>
export const LazySfIconMenu: LazyComponent<typeof import("@storefront-ui/vue")['SfIconMenu']>
export const LazySfIconMoreHoriz: LazyComponent<typeof import("@storefront-ui/vue")['SfIconMoreHoriz']>
export const LazySfIconMoreVert: LazyComponent<typeof import("@storefront-ui/vue")['SfIconMoreVert']>
export const LazySfIconOpenInNew: LazyComponent<typeof import("@storefront-ui/vue")['SfIconOpenInNew']>
export const LazySfIconOpenSource: LazyComponent<typeof import("@storefront-ui/vue")['SfIconOpenSource']>
export const LazySfIconPackage: LazyComponent<typeof import("@storefront-ui/vue")['SfIconPackage']>
export const LazySfIconPercent: LazyComponent<typeof import("@storefront-ui/vue")['SfIconPercent']>
export const LazySfIconPerson: LazyComponent<typeof import("@storefront-ui/vue")['SfIconPerson']>
export const LazySfIconPinterest: LazyComponent<typeof import("@storefront-ui/vue")['SfIconPinterest']>
export const LazySfIconPublishedWithChanges: LazyComponent<typeof import("@storefront-ui/vue")['SfIconPublishedWithChanges']>
export const LazySfIconRadioButtonChecked: LazyComponent<typeof import("@storefront-ui/vue")['SfIconRadioButtonChecked']>
export const LazySfIconRadioButtonUnchecked: LazyComponent<typeof import("@storefront-ui/vue")['SfIconRadioButtonUnchecked']>
export const LazySfIconReact: LazyComponent<typeof import("@storefront-ui/vue")['SfIconReact']>
export const LazySfIconRemove: LazyComponent<typeof import("@storefront-ui/vue")['SfIconRemove']>
export const LazySfIconRemoveShoppingCart: LazyComponent<typeof import("@storefront-ui/vue")['SfIconRemoveShoppingCart']>
export const LazySfIconSafetyCheck: LazyComponent<typeof import("@storefront-ui/vue")['SfIconSafetyCheck']>
export const LazySfIconSchedule: LazyComponent<typeof import("@storefront-ui/vue")['SfIconSchedule']>
export const LazySfIconSearch: LazyComponent<typeof import("@storefront-ui/vue")['SfIconSearch']>
export const LazySfIconSell: LazyComponent<typeof import("@storefront-ui/vue")['SfIconSell']>
export const LazySfIconShare: LazyComponent<typeof import("@storefront-ui/vue")['SfIconShare']>
export const LazySfIconShoppingCart: LazyComponent<typeof import("@storefront-ui/vue")['SfIconShoppingCart']>
export const LazySfIconShoppingCartCheckout: LazyComponent<typeof import("@storefront-ui/vue")['SfIconShoppingCartCheckout']>
export const LazySfIconSort: LazyComponent<typeof import("@storefront-ui/vue")['SfIconSort']>
export const LazySfIconStar: LazyComponent<typeof import("@storefront-ui/vue")['SfIconStar']>
export const LazySfIconStarFilled: LazyComponent<typeof import("@storefront-ui/vue")['SfIconStarFilled']>
export const LazySfIconStarHalf: LazyComponent<typeof import("@storefront-ui/vue")['SfIconStarHalf']>
export const LazySfIconThumbDown: LazyComponent<typeof import("@storefront-ui/vue")['SfIconThumbDown']>
export const LazySfIconThumbUp: LazyComponent<typeof import("@storefront-ui/vue")['SfIconThumbUp']>
export const LazySfIconTune: LazyComponent<typeof import("@storefront-ui/vue")['SfIconTune']>
export const LazySfIconTwitter: LazyComponent<typeof import("@storefront-ui/vue")['SfIconTwitter']>
export const LazySfIconUndo: LazyComponent<typeof import("@storefront-ui/vue")['SfIconUndo']>
export const LazySfIconUnfoldMore: LazyComponent<typeof import("@storefront-ui/vue")['SfIconUnfoldMore']>
export const LazySfIconUpload: LazyComponent<typeof import("@storefront-ui/vue")['SfIconUpload']>
export const LazySfIconViewList: LazyComponent<typeof import("@storefront-ui/vue")['SfIconViewList']>
export const LazySfIconVisibility: LazyComponent<typeof import("@storefront-ui/vue")['SfIconVisibility']>
export const LazySfIconVisibilityOff: LazyComponent<typeof import("@storefront-ui/vue")['SfIconVisibilityOff']>
export const LazySfIconVsfDiamond: LazyComponent<typeof import("@storefront-ui/vue")['SfIconVsfDiamond']>
export const LazySfIconVuejs: LazyComponent<typeof import("@storefront-ui/vue")['SfIconVuejs']>
export const LazySfIconVuestorefront: LazyComponent<typeof import("@storefront-ui/vue")['SfIconVuestorefront']>
export const LazySfIconWarehouse: LazyComponent<typeof import("@storefront-ui/vue")['SfIconWarehouse']>
export const LazySfIconWarning: LazyComponent<typeof import("@storefront-ui/vue")['SfIconWarning']>
export const LazySfIconYoutube: LazyComponent<typeof import("@storefront-ui/vue")['SfIconYoutube']>
export const LazySfInput: LazyComponent<typeof import("@storefront-ui/vue")['SfInput']>
export const LazySfLink: LazyComponent<typeof import("@storefront-ui/vue")['SfLink']>
export const LazySfListItem: LazyComponent<typeof import("@storefront-ui/vue")['SfListItem']>
export const LazySfLoaderCircular: LazyComponent<typeof import("@storefront-ui/vue")['SfLoaderCircular']>
export const LazySfLoaderLinear: LazyComponent<typeof import("@storefront-ui/vue")['SfLoaderLinear']>
export const LazySfModal: LazyComponent<typeof import("@storefront-ui/vue")['SfModal']>
export const LazySfProgressCircular: LazyComponent<typeof import("@storefront-ui/vue")['SfProgressCircular']>
export const LazySfProgressLinear: LazyComponent<typeof import("@storefront-ui/vue")['SfProgressLinear']>
export const LazySfRadio: LazyComponent<typeof import("@storefront-ui/vue")['SfRadio']>
export const LazySfRating: LazyComponent<typeof import("@storefront-ui/vue")['SfRating']>
export const LazySfRatingButton: LazyComponent<typeof import("@storefront-ui/vue")['SfRatingButton']>
export const LazySfScrollable: LazyComponent<typeof import("@storefront-ui/vue")['SfScrollable']>
export const LazySfSelect: LazyComponent<typeof import("@storefront-ui/vue")['SfSelect']>
export const LazySfSwitch: LazyComponent<typeof import("@storefront-ui/vue")['SfSwitch']>
export const LazySfTextarea: LazyComponent<typeof import("@storefront-ui/vue")['SfTextarea']>
export const LazySfThumbnail: LazyComponent<typeof import("@storefront-ui/vue")['SfThumbnail']>
export const LazySfTooltip: LazyComponent<typeof import("@storefront-ui/vue")['SfTooltip']>
export const LazyNuxtLinkLocale: LazyComponent<typeof import("../../../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']>
export const LazySwitchLocalePathLink: LazyComponent<typeof import("../../../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]
