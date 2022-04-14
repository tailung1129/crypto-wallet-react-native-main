import { StyleSheet } from 'react-native'
import CM from './colors_manager'

import { dpToPx } from './Layout'

export default () =>
	StyleSheet.create({
		headerBackgroundWhite: {
			borderBottomWidth: 0,
			backgroundColor: CM.getColor('white'),
			elevation: 0,
			shadowOpacity: 0,
			height: dpToPx(80)
		},
		headerBackgroundSilver: {
			borderBottomWidth: 0,
			backgroundColor: CM.getColor('color4'),
			elevation: 0,
			shadowOpacity: 0,
			height: dpToPx(60)
		},
		headerBackgroundSilver1: {
			shadowOpacity: 0,
			borderBottomWidth: 0,
			height: dpToPx(60)
		},
		headerBackground: {
			borderBottomWidth: 0,
			backgroundColor: CM.getColor('color5'),
			elevation: 0,
			shadowOpacity: 0,
			height: dpToPx(60)
		}
	})
