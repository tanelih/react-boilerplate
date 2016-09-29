import { addLocaleData } from 'react-intl'

import enLocaleData          from 'react-intl/locale-data/en'
import enTranslationMessages from './translations/en.json'

// add our 'locale data' to 'react-intl'
addLocaleData(enLocaleData)

/**
 * Format the translations to something usable by us.
 *
 * @param   {Array<Object>} messages - Raw translations.
 * @returns {Object}                 - Map of translations.
 */
const formatTranslationMessages = messages =>
  messages.reduce((formatted, m) =>
    Object.assign({ }, formatted, { [m.id]: m.message || m.defaultMessage }), { })

/**
 * Available locales in the application.
 *
 * @type {Array<String>}
 */
export const appLocales = [ 'en' ]

/**
 * Translations.
 *
 * @type {Object}
 */
export const translationMessages = {
  en: formatTranslationMessages(enTranslationMessages),
}

