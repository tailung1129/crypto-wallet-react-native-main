import { StyleSheet, Platform } from 'react-native'

import CM from '../../other/appearance/colors_manager'
import * as STYLES from '../../other/appearance/styleguide'
import { getRelativeSize, dpToPx, isSmall } from '../../other/appearance/Layout'

export default () =>
	StyleSheet.create({
		// Weights
		// -------
		Bold: {
			fontFamily: STYLES.FONTS.Bold
		},
		Light: {
			fontFamily: STYLES.FONTS.Light,
			fontWeight: '300'
		},
		Regular: {
			fontFamily: STYLES.FONTS.Regular
		},
		Semibold: {
			fontFamily: STYLES.FONTS.Semibold
		},

		// Sizes
		// -----
		Display: {
			fontSize: getRelativeSize(4)
		},
		BigTitle: {
			fontSize: getRelativeSize(3.2)
		},
		Title: {
			fontSize: getRelativeSize(3)
		},
		SubTitle: {
			fontSize: getRelativeSize(2.8)
		},
		Standard: {
			fontSize: getRelativeSize(2.5)
		},
		Small: {
			fontSize: getRelativeSize(2.3)
		},
		Caption: {
			fontSize: getRelativeSize(2.1)
		},
		Mini: {
			fontSize: getRelativeSize(1.8)
		},
		SuperMini: {
			fontSize: getRelativeSize(1.5)
		},

		// Spacingx
		// -------
		Narrow: {
			letterSpacing: 1
		},
		Wide: {
			letterSpacing: 1.1
		},
		ExtraWide: {
			letterSpacing: 1.25
		},

		// Spacingx
		// -------
		Narrow: {
			letterSpacing: 0
		},
		Wide: {
			letterSpacing: 1.1
		},
		ExtraWide: {
			letterSpacing: 1.25
		},

		// Alignment
		// ---------
		Center: {
			textAlign: 'center',
			alignSelf: 'center'
		},
		Left: {
			textAlign: 'left'
		},
		Right: {
			textAlign: 'right'
		},
		//Styleguide
		//NEW ONES:
		BasicLight: {
			fontSize: Platform.OS === 'ios' ? 13 : 14,
			// letterSpacing: 0.3,
			fontFamily: STYLES.FONTS.Regular
		},
		SpacedLight: {
			fontSize: Platform.OS === 'ios' ? 12 : 14,
			letterSpacing: 0.53,
			fontFamily: STYLES.FONTS.Light
		},
		BigLight: {
			fontSize: Platform.OS === 'ios' ? 14 : isSmall ? 14 : 16,
			letterSpacing: 0.35,
			fontFamily: STYLES.FONTS.Light
		},
		GrayBigLight: {
			fontSize: Platform.OS === 'ios' ? 18 : 20,
			letterSpacing: 0.8,
			fontFamily: STYLES.FONTS.Light,
			color: '#838383'
		},
		BasicSemibold: {
			fontSize: Platform.OS === 'ios' ? 14 : isSmall ? 14 : 16,
			letterSpacing: 0.35,
			fontFamily: STYLES.FONTS.Semibold
		},
		NameTitle: {
			fontSize: Platform.OS === 'ios' ? 20 : 25,
			letterSpacing: 0.5,
			fontFamily: STYLES.FONTS.Semibold
		},
		NameTitleSmall: {
			fontSize: Platform.OS === 'ios' ? 15 : 20,
			letterSpacing: 0.4,
			fontFamily: STYLES.FONTS.Semibold
		},
		SmallLight: {
			fontSize: Platform.OS === 'ios' ? 10 : 15,
			letterSpacing: 0,
			fontFamily: STYLES.FONTS.Light
		},
		SmallLightSpaced: {
			fontSize: Platform.OS === 'ios' ? 13 : dpToPx(16),
			lineHeight: Platform.OS === 'ios' ? 13 : dpToPx(16),
			// letterSpacing: 0.25,
			fontFamily: STYLES.FONTS.Regular
		},
		SmallRegularSpaced2: {
			fontSize: Platform.OS === 'ios' ? 13 : 14,
			// letterSpacing: 0.25,
			fontFamily: STYLES.FONTS.Bold
		},
		TitleRegular: {
			fontSize: Platform.OS === 'ios' ? 20 : 24,
			letterSpacing: 2,
			fontFamily: STYLES.FONTS.Regular
		},
		BigRegular: {
			fontSize: Platform.OS === 'ios' ? 30 : isSmall ? 20 : 30,
			fontFamily: STYLES.FONTS.Regular,
			color: '#01819a'
		},
		SmallRegular: {
			fontSize: Platform.OS === 'ios' ? 16 : 20,
			fontFamily: STYLES.FONTS.Regular,
			color: '#777777'
		},
		SmallRegularSpaced: {
			fontSize: Platform.OS === 'ios' ? 16 : 20,
			fontFamily: STYLES.FONTS.Regular,
			letterSpacing: 0.4
		},
		SmallReasonSpaced: {
			fontSize: Platform.OS === 'ios' ? 14 : 18,
			fontFamily: STYLES.FONTS.Regular,
			letterSpacing: 0.35
		},
		// OLD ONES:
		PageTitle: {
			fontSize: dpToPx(20),
			fontFamily: STYLES.FONTS.Bold,
			fontStyle: 'normal',
			letterSpacing: 2,
			color: CM.getColor('color1', '30')
		},
		ParagraphText: {
			fontSize: dpToPx(16),
			// letterSpacing: dpToPx(1.88),
			fontFamily: 'Roboto-Regular'
		},
		SecondaryText: {
			fontSize: dpToPx(14),
			letterSpacing: dpToPx(1.75),
			fontFamily: 'Roboto-Regular'
		},
		NumberTextNoPadding: {
			fontSize: dpToPx(23),
			fontFamily: STYLES.FONTS.Regular,
			color: CM.getColor('white'),
			marginBottom: 8
		},
		ContactNames: {
			fontFamily: 'Roboto-Regular',
			fontSize: dpToPx(17),
			fontWeight: 'normal',
			fontStyle: 'normal',
			letterSpacing: 2,
			color: CM.getColor('color1')
		},
		ContactNamesBold: {
			fontFamily: STYLES.FONTS.Bold,
			fontSize: dpToPx(15),
			fontStyle: 'normal',
			letterSpacing: 2,
			color: CM.getColor('color1')
		},
		ContactNamesActivity: {
			fontSize: dpToPx(15),
			fontStyle: 'normal',
			letterSpacing: 2,
			color: CM.getColor('color1')
		},
		TextInput: {
			fontFamily: 'Roboto-Regular',
			fontSize: dpToPx(17),
			fontWeight: '500',
			fontStyle: 'normal',
			letterSpacing: 2,
			color: '#d6c3d6'
		},
		ClickableText: {
			fontSize: dpToPx(17),
			fontFamily: STYLES.FONTS.Bold,
			letterSpacing: 3,
			textAlign: 'center',
			color: CM.getColor('color1')
		},
		BalanceText: {
			fontFamily: 'Roboto-Regular',
			fontSize: dpToPx(29, 1.4),
			letterSpacing: 0,
			textAlign: 'center'
		},
		TertiaryText: {
			fontFamily: 'Roboto-Regular',
			fontSize: dpToPx(12),
			letterSpacing: 2
		},

		ListTitle: {
			fontFamily: STYLES.FONTS.Bold,
			fontSize: dpToPx(15),
			letterSpacing: 1
		},

		CardNumber: {
			fontSize: dpToPx(20),
			fontFamily: STYLES.FONTS.Bold,
			fontStyle: 'normal',
			letterSpacing: 4,
			color: CM.getColor('color1')
		},

		Margin: {
			paddingTop: Platform.OS === 'ios' ? 4 : 0
		}
	})
