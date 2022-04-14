import { StyleSheet } from 'react-native'
import CM from '../../other/appearance/colors_manager'
import * as STYLES from '../../other/appearance/styleguide'
import { getRelativeSize, dpToPx, $fontScale, normalize } from '../../other/appearance/Layout'

export default () =>
	StyleSheet.create({
		headerBackground: {
			borderBottomWidth: 0,
			elevation: 0,
			shadowOpacity: 0
		},
		headerTitleContainer: {
			paddingHorizontal: normalize(10),
			paddingVertical: 2,
			marginLeft: 'auto',
			marginRight: 'auto',
			alignItems: 'center'
		},
		headerTitleContainerActivity: {
			paddingHorizontal: normalize(10),
			paddingVertical: 2,
			marginLeft: 'auto',
			marginRight: 'auto',
			alignItems: 'center'
		},
		headerTitleContainer2: {
			paddingHorizontal: 10,
			paddingVertical: 2,
			marginLeft: 'auto',
			marginRight: 'auto',
			alignItems: 'center'
		},
		headerTitleText: {
			fontSize: getRelativeSize(2.8) * $fontScale,
			color: CM.getColor('color4'),
			fontFamily: STYLES.FONTS.Regular,
			letterSpacing: 2
		},
		headerRightText: {
			marginRight: 9
		},
		headerRightTouchableTarget: {
			marginRight: 10
		},
		headerLeftIcon: {
			marginLeft: normalize(20)
		},
		headerRightIcon: {
			marginRight: 15,
			borderRadius: 20
		},
		aura: {
			marginLeft: 15,
			width: dpToPx(32, 1),
			height: dpToPx(32, 1),
			borderRadius: dpToPx(32, 1) / 2,
			borderWidth: 2,
			borderColor: CM.getColor('color1', '50'),
			justifyContent: 'center',
			alignItems: 'center'
		},
		qrIcon: {
			width: 28,
			height: 28,
			marginRight: 10
		},
		cellMode: {
			color: CM.getColor('color3'),
			width: '100%',
			height: '100%',
			flex: 1,
			flexDirection: 'row',
			alignItems: 'center',
			alignContent: 'center',
			justifyContent: 'center',
			textAlign: 'center'
		},
	})
