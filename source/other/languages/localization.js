import i18n from 'i18n-js'
import get from 'lodash/get'
import isArray from 'lodash/isArray'
import * as Localization from 'expo-localization'

import STRING_PATHS from './string_paths'
import * as translations from './strings'

i18n.fallbacks = true
i18n.translations = translations
i18n.defaultLocale = 'es-ES'
i18n.locale = 'es-ES'
let isDefaultOverwrite = false

const locale = locale => {
	i18n.locale = locale
	isDefaultOverwrite = true
}

const getCurrentLanguage = () => {
	return isDefaultOverwrite ? i18n.locale.split('-')[0] : getDeviceLocale()
}

const locales = Object.keys(translations)

const checkPath = pathname => get(STRING_PATHS, pathname, false)

const getDeviceLocale = () => {
	const [locale] = Localization.locale.split('-')
	return locale
}

const convertString = string => {
	return !isArray(string) ? string : string.join('\r\n')
}

const translate = (pathname, values, defaultValue) => {
	const path = checkPath(pathname)

	if (!path && defaultValue) {
		return defaultValue
	}

	let string = i18n.t(path || pathname, values)

	return convertString(string)
}

const translateConfig = (config, pathname, defaultValue = false) => {
	const text = get(config, `${getCurrentLanguage()}.${pathname}`, defaultValue)
	return !text ? `[missing "${getCurrentLanguage()}.${pathname}" translation]` : convertString(text)
}

const toNumber = (value, options) => i18n.toNumber(value, options)
const toPercentage = (value, options) =>
	i18n.toNumber(value, { unit: '%', format: '%n%u', precision: 2, ...options })

export {
	translateConfig,
	checkPath,
	toNumber,
	toPercentage,
	locale,
	locales,
	getDeviceLocale,
	getCurrentLanguage
}
export default translate
