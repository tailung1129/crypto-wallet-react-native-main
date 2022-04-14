import { StyleSheet, Platform } from 'react-native'

import CM from '../../other/appearance/colors_manager'

const Styles = () =>
	StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: CM.getColor('white')
		},
		inner: {
			flex: 1,
			justifyContent: 'space-around'
		},
		footer: {
			flex: 1,
			justifyContent: 'flex-end'
		}
	})

export default Styles
