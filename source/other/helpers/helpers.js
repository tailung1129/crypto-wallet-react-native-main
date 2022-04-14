import merge from 'lodash/merge'
import some from 'lodash/some'

import { COUNTRIES_SEPA } from './countryCodes.json'

export const combineStyle = (mainStyle, variantStyle) => merge({}, mainStyle, variantStyle)
export const parseNumber = value => {
	const [textInteger = '', textDecimal = ''] = `${value}`.split('.')

	return {
		textInteger: `${parseInt(textInteger)}`,
		textDecimal: textDecimal
	}
}

export const getIsCountrySEPA = countryISO => {
	return COUNTRIES_SEPA.find(code => code === countryISO) ? true : false
}

// Check if at least one of the countries passed as parameter (Array) is SEPA
export const getIsSomeSEPA = (countriesISOList = []) => some(countriesISOList.map(getIsCountrySEPA))

export const getCurrencyCodeByCountry = countryISO => {
	return getIsCountrySEPA(countryISO) ? 'EUR' : 'USD'
}
