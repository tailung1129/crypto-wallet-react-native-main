import { StyleSheet, Dimensions } from 'react-native'

const ORIENTATIONS = {
	portrait: 'portrait',
	landscape: 'landscape'
}
const ORIENTATION = () =>
	Dimensions.get('window').width < Dimensions.get('window').height
		? ORIENTATIONS.portrait
		: ORIENTATIONS.landscape

const DIMENSIONS = () => ({
	width: Dimensions.get('window').width,
	height: Dimensions.get('window').height
})

const FONTS = {
	Regular: 'Roboto-Regular',
	Bold: 'Roboto-Bold',
	Light: 'Roboto-Light',
	Semibold: 'Roboto-Bold'
}

const unit = 8
const unit2 = unit * 2
const unit4 = unit * 4
const unit8 = unit * 8
const unit16 = unit * 16
const unit05 = (unit * 1) / 2
const unit075 = (unit * 3) / 4
const unit025 = (unit * 1) / 4

const UNITS = {
	unit,
	unit2,
	unit4,
	unit8,
	unit16,
	unit05,
	unit075,
	unit025
}

const PADDING = 18

export { PADDING, ORIENTATIONS, ORIENTATION, DIMENSIONS, UNITS, FONTS }
