import { $hunit, $wunit, dpToPx, isSmall, isLarge, isLargedpi, normalize } from '../../other/appearance/Layout'
import { StyleSheet, Platform } from 'react-native'
import { FONTS } from '../../other/appearance/styleguide'
import CM from '../../other/appearance/colors_manager'

export default () =>
	StyleSheet.create({
		birthDateContainer: {
			marginBottom: normalize(5),
			marginTop: normalize(10),
			paddingBottom: normalize(15)
		},
		inputsGroupContainer: {
			marginHorizontal: '4.5%',
			width: '91%'
		},
		inputsGroup: {
			paddingVertical: 10,
			marginTop: 10,
			marginBottom: 10,
			flexDirection: 'row',
			justifyContent: 'flex-start',
			alignItems: 'flex-start'
		},
		onBoardingForm: {
			flexGrow: 2
		},
		autocompletesContainer: {
			paddingTop: 0,
			zIndex: 1,
			width: '100%',
			paddingHorizontal: 8
		},
		input1: {
			maxHeight: 40
		},
		inputContainer: {
			display: 'flex',
			flexShrink: 0,
			flexGrow: 0,
			flexDirection: 'row',
			flexWrap: 'wrap',
			alignItems: 'center',
			borderBottomWidth: 1,
			borderColor: '#c7c6c1',
			paddingVertical: 13,
			paddingLeft: 12,
			paddingRight: '5%',
			width: '100%',
			justifyContent: 'flex-start'
		},
		container1: {
			flex: 1,
			backgroundColor: '#ffffff'
		},
		plus: {
			position: 'absolute',
			left: 15,
			top: 10
		},
		container: {
			flex: 1,
			height: $hunit * 9.7,
			backgroundColor: CM.getColor('white'),
			flexDirection: 'column'
		},
		onboarding2Area: {
			flex: 1
		},
		buttonView: {
			marginBottom: dpToPx(30),
			height: isLargedpi ? $hunit * 1 : $hunit * 0.9,
			width: $wunit * 9,
			marginLeft: $wunit * 0.5,
			borderRadius: 40,
			alignContent: 'flex-end',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: CM.getColor('color1'),
			borderWidth: 0,
			borderColor: CM.getColor('color1', '40')
		},
		disabled: {
			backgroundColor: CM.getColor('color4')
		},
		//fonts
		fontBold: { fontWeight: 'bold', fontSize: 18 },
		fontBold2: { fontWeight: 'bold', fontSize: 22 },
		fontBoldSmall: { fontWeight: 'bold', fontSize: 14 },
		errorInput: {
			paddingHorizontal: 10,
			fontFamily: FONTS.Regular,
			fontSize: Platform.OS === 'ios' ? dpToPx(12) : dpToPx(18),
			letterSpacing: dpToPx(0),
			color: 'red',
			marginTop: '1%',
			zIndex: 999,
			marginLeft: 20
		},
		dateErrorInput: {
			paddingHorizontal: 10,
			fontFamily: FONTS.Regular,
			fontSize: Platform.OS === 'ios' ? dpToPx(12) : dpToPx(18),
			letterSpacing: dpToPx(0),
			color: 'red',
			zIndex: 999,
			marginLeft: 20
		},
		buttonText: {
			color: 'white',
			fontSize: 18,
			textAlign: 'center',
			fontFamily: FONTS.Regular
			// marginTop: isLargedpi ? $hunit * 0.3 : $hunit * 0.27
		},
		avatar: {
			width: $wunit * 3.1,
			height: $wunit * 3.1,
			borderRadius: $wunit * 1.5
		},
		touchableAvatar: {
			marginTop: $hunit * 0.6,
			width: $wunit * 3.2,
			height: $wunit * 3.2,
			borderRadius: $wunit * 2.1,
			borderWidth: 1,
			borderColor: CM.getColor('color3'),
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center'
		},
		inputRow: {
			paddingBottom: Platform.OS === 'ios' ? 8 : 10
		},
		cntView: {
			marginTop: 10
		},
		errorContainer: {
			marginBottom: normalize(15)
		},
		cntView2: {
			marginTop: 10,
			marginBottom: 20
		},
		simpleInputContainer: {
			marginHorizontal: '4.5%',
			width: '91%',
			height: normalize(55),
			alignItems: 'flex-start',
			justifyContent: 'flex-start',
			borderRadius: 10,
			shadowColor: '#717171',
			shadowOffset: { width: 0, height: 2 },
			shadowOpacity: 0.2,
			shadowRadius: 2,
			elevation: 2,
			zIndex: 1,
			backgroundColor: 'white'
		},
		dropdownFirstView: {
			marginHorizontal: '4.5%',
			width: '91%',
			alignItems: 'flex-start',
			justifyContent: 'flex-start',
			backgroundColor: 'white',
			borderRadius: 10,
			shadowColor: '#717171',
			shadowOffset: { width: 0, height: 2 },
			shadowOpacity: 0.2,
			shadowRadius: 2,
			elevation: 2,
			zIndex: 1
		},
		firstViewThin: {
			marginHorizontal: '4.5%',
			width: '91%',
			flexDirection: 'column',
			alignItems: 'flex-start',
			justifyContent: 'flex-start',
			backgroundColor: 'white',
			borderRadius: 10,
			shadowColor: '#717171',
			shadowOffset: { width: 0, height: 2 },
			shadowOpacity: 0.2,
			shadowRadius: 2,
			elevation: 1
		},
		firstView: {
			marginHorizontal: '4.5%',
			width: '91%',
			flexDirection: 'column',
			alignItems: 'flex-start',
			justifyContent: 'flex-start',
			backgroundColor: 'white',
			borderRadius: 10,
			shadowColor: '#717171',
			shadowOffset: { width: 0, height: 2 },
			shadowOpacity: 0.2,
			shadowRadius: 2,
			elevation: 2,
			zIndex: 1,
			borderColor: 'red'
		},
		firstViewNat: {
			marginBottom: dpToPx(18),
			marginHorizontal: '4.5%',
			width: '91%',
			aspectRatio: 413 / 80,
			flexDirection: 'column',
			alignItems: 'flex-start',
			justifyContent: 'flex-start',
			backgroundColor: 'white',
			borderRadius: 10,
			shadowColor: '#717171',
			shadowOffset: { width: 0, height: 2 },
			shadowOpacity: 0.15,
			shadowRadius: 2,
			elevation: 1,
			zIndex: 999
		},
		firstView2: {
			marginBottom: dpToPx(18),
			// marginTop: $hunit * 0.4,
			marginHorizontal: '4.5%',
			width: '91%',
			height: 'auto',
			// aspectRatio: 413 / 80,
			flexDirection: 'column',
			alignItems: 'flex-start',
			justifyContent: 'flex-start',
			backgroundColor: 'white',
			borderRadius: 10,
			shadowColor: '#717171',
			shadowOffset: { width: 0, height: 2 },
			shadowOpacity: 0.15,
			shadowRadius: 2,
			elevation: 4,
			zIndex: 999
		},
		firstView2Nat: {
			marginBottom: dpToPx(20),
			marginHorizontal: '4.5%',
			width: '91%',
			height: 'auto',
			// aspectRatio: 413 / 80,
			flexDirection: 'column',
			alignItems: 'flex-start',
			justifyContent: 'flex-start',
			backgroundColor: 'white',
			borderRadius: 10,
			shadowColor: '#717171',
			shadowOffset: { width: 0, height: 2 },
			shadowOpacity: 0.15,
			shadowRadius: 2,
			elevation: 1,
			zIndex: 999
		},
		dropdown2: {
			marginBottom: dpToPx(18),
			borderWidth: 1,
			borderColor: '#717171',

			marginHorizontal: '4.5%',
			width: '91%',
			aspectRatio: 413 / 80,
			flexDirection: 'column',
			alignItems: 'flex-start',
			justifyContent: 'flex-start',
			backgroundColor: 'white',
			borderRadius: 10,
			shadowColor: '#717171',
			shadowOffset: { width: 0, height: 2 },
			shadowOpacity: 0.15,
			shadowRadius: 2,
			elevation: 1,
			zIndex: 998
		},
		dropdown3: {
			marginBottom: dpToPx(18),
			height: 'auto',
			maxHeight: Platform.OS === 'ios' ? '15%' : '20%',
			marginHorizontal: '4.5%',
			width: '91%',
			// aspectRatio: 413 / 80,
			flexDirection: 'column',
			alignItems: 'flex-start',
			justifyContent: 'flex-start',
			backgroundColor: 'white',
			borderRadius: 10,
			shadowColor: '#717171',
			shadowOffset: { width: 0, height: 2 },
			shadowOpacity: 0.15,
			shadowRadius: 2,
			elevation: 1,
			zIndex: 998
		},
		textUsername: {
			fontSize: 10,
			fontFamily: FONTS.Regular,
			paddingHorizontal: 10,
			marginTop: Platform.OS === 'ios' ? 20 : 18,
			bottom: Platform.OS === 'ios' ? 12 : 9,
			color: 'red'
		},
		ibanView: {
			marginBottom: dpToPx(18),
			overflow: 'hidden',
			marginHorizontal: '4.5%',
			width: '91%',
			aspectRatio: 413 / 80,
			flexDirection: 'column',
			alignItems: 'flex-start',
			justifyContent: 'flex-start',
			backgroundColor: 'white',
			borderRadius: 10,
			shadowColor: '#717171',
			shadowOffset: { width: 0, height: 2 },
			shadowOpacity: 0.15,
			shadowRadius: 2,
			elevation: 1
		},
		ibanViewSecond: {
			marginBottom: Platform.OS === 'ios' ? dpToPx(90) : dpToPx(120),
			marginHorizontal: '4.5%',
			width: '91%',
			aspectRatio: 413 / 80,
			flexDirection: 'column',
			alignItems: 'flex-start',
			justifyContent: 'flex-start',
			backgroundColor: 'white',
			borderRadius: 10,
			shadowColor: '#717171',
			shadowOffset: { width: 0, height: 2 },
			shadowOpacity: 0.15,
			shadowRadius: 2,
			elevation: 1
		},
		genderView: {
			marginBottom: Platform.OS === 'ios' ? dpToPx(90) : dpToPx(120),

			marginHorizontal: '4.5%',
			width: '91%',
			aspectRatio: 413 / 80,
			flexDirection: 'column',
			alignItems: 'flex-start',
			justifyContent: 'flex-start'
		},
		selectorView: {
			marginHorizontal: '4.5%',
			width: '30%',
			aspectRatio: 426 / 80,
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: 'white'
		},
		selectors: {
			width: '100%',
			aspectRatio: 426 / 80,
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: 'white'
		},
		circle: {
			marginHorizontal: '4.5%',
			height: '100%',
			aspectRatio: 1,
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: 'white',
			borderRadius: 50,
			shadowColor: '#717171',
			shadowOffset: { width: 0, height: 2 },
			shadowOpacity: 0.15,
			shadowRadius: 2,
			elevation: 1
		},
		insideCircle: {
			height: '50%',
			aspectRatio: 1,
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: CM.getColor('color1'),
			borderRadius: 50,
			shadowColor: '#717171',
			shadowOffset: { width: 0, height: 2 },
			shadowOpacity: 0.15,
			shadowRadius: 2,
			elevation: 1
		},
		birthDate: {
			marginTop: normalize(15),
			marginLeft: normalize(5),
			backgroundColor: 'white',
			borderRadius: 10,
			borderColor: 'white'
		},
		birthDateText: {
			color: CM.getColor('color2'),
			fontFamily: FONTS.Bold,
			fontSize: normalize(14)
		},
		birthIcon: {
			marginTop: normalize(10),
			backgroundColor: 'white',
			borderRadius: 10,
			opacity: 0
		},
		datePicker: {
			width: '45%'
		},
		month: {
			// overflow: 'hidden',
			marginHorizontal: '11%',
			width: '23%',
			aspectRatio: 86 / 60,
			flexDirection: 'column',
			alignItems: 'flex-start',
			justifyContent: 'flex-start',
			backgroundColor: 'white',
			borderRadius: 10,
			shadowColor: '#717171',
			shadowOffset: { width: 0, height: 2 },
			shadowOpacity: 0.2,
			shadowRadius: 2,
			elevation: 2
		},
		inputPlaceHolder: {
			paddingHorizontal: 10,
			fontFamily: FONTS.Regular,
			fontSize: Platform.OS === 'ios' ? dpToPx(12) : dpToPx(18),
			letterSpacing: dpToPx(0),
			color: CM.getColor('color2'),
			marginTop: '1%'
		},
		groupInputPlaceHolder: {
			marginTop: '1%',
			paddingHorizontal: 10,
			fontFamily: FONTS.Regular,
			fontSize: Platform.OS === 'ios' ? dpToPx(12) : dpToPx(18),
			letterSpacing: dpToPx(0),
			color: CM.getColor('color2')
		},
		birthdayPlaceHolder: {
			paddingHorizontal: '8%',
			fontFamily: FONTS.Regular,
			fontSize: Platform.OS === 'ios' ? dpToPx(12) : dpToPx(18),
			letterSpacing: dpToPx(0),
			color: CM.getColor('color2'),
			marginTop: '1%',
			marginBottom: '3%'
		},
		banner: {
			backgroundColor: CM.getColor('color4'),
			width: '100%',
			height: 2,
			flexDirection: 'row',
			elevation: 3,
			zIndex: 999,
			top: 0,
			left: 0,
			right: 0
			// marginTop: dpToPx(30)
		},
		infoView: {
			height: 'auto',
			paddingTop: Platform.OS === 'ios' ? 20 : 10,
			paddingBottom: Platform.OS === 'ios' ? 0 : dpToPx(390)
		},
		infoView2: {
			height: Platform.OS === 'ios' ? '100%' : dpToPx(620)
		},
		banner1: {
			backgroundColor: CM.getColor('color1'),
			width: '33.333%',
			height: 2
		},
		banner2: {
			backgroundColor: CM.getColor('color7'),
			width: '33.333%',
			height: 2
		},
		date: {
			// height: $hunit * 2,
			flexDirection: 'row',
			justifyContent: 'flex-start',
			alignItems: 'flex-start',
			marginBottom: 10
		},
		date2: {
			// height: $hunit * 2,
			flexDirection: 'row',
			justifyContent: 'flex-start',
			alignItems: 'flex-start'
		},
		photoView: {
			flexDirection: 'column',
			justifyContent: 'flex-start',
			alignItems: 'center',
			width: $wunit * 10,
			height: $hunit * 3.2
		},
		photoView2: {
			position: 'absolute',
			top: isLarge ? $hunit * 1.85 : $hunit * 2.1,
			backgroundColor: CM.getColor('color1'),
			width: $wunit * 0.9,
			height: $wunit * 0.9,
			borderRadius: ($wunit * 0.9) / 2,
			alignItems: 'center',
			justifyContent: 'center'
		},
		photoIcon: {
			color: 'white' // CM.getColor('white')
		},
		buttonColor: {
			backgroundColor: CM.getColor('color1')
		},
		dropDownView: {
			backgroundColor: CM.getColor('white'),
			flexDirection: 'column',
			height: Platform.OS === 'ios' ? '100%' : dpToPx(620),
			width: $wunit * 10,
			zIndex: 999,
			paddingTop: 10
		},
		inputView: {
			backgroundColor: CM.getColor('white'),
			flexDirection: 'column',
			height: Platform.OS === 'ios' ? '100%' : 'auto',
			width: $wunit * 10,
			zIndex: 999,
			paddingBottom: dpToPx(30)
		},
		inputView2: {
			backgroundColor: CM.getColor('white'),
			flexDirection: 'column',
			height: Platform.OS === 'ios' ? '100%' : $hunit * 8,
			width: $wunit * 10,
			zIndex: 1000,
			bottom: Platform.OS === 'ios' ? 110 : 120,
			marginBottom: Platform.OS === 'ios' ? 0 : 20
		},
		inputView3: {
			backgroundColor: CM.getColor('white'),
			flexDirection: 'column',
			height: Platform.OS === 'ios' ? '100%' : $hunit * 8,
			width: $wunit * 10,
			zIndex: 999,
			bottom: Platform.OS === 'ios' ? 220 : 290,
			marginBottom: Platform.OS === 'ios' ? 0 : 20
		},
		inputView4: {
			backgroundColor: CM.getColor('white'),
			flexDirection: 'column',
			height: Platform.OS === 'ios' ? '100%' : $hunit * 8,
			width: $wunit * 10,
			zIndex: 999,
			bottom: Platform.OS === 'ios' ? 280 : 295,
			marginBottom: Platform.OS === 'ios' ? 0 : 100
		},
		infoTextView: {
			width: '100%',
			borderRadius: 10,
			fontFamily: FONTS.Bold,
			fontSize: normalize(14),
			letterSpacing: dpToPx(0),
			color: CM.getColor('color2'),
			paddingTop: Platform.OS === 'ios' ? 18 : 10,
			paddingHorizontal: 20
		},
		dropDownArr: {
			width: '90%'
		},
		infoTextView2: {
			marginTop: Platform.OS === 'ios' ? null : 2,
			lineHeight: Platform.OS === 'ios' ? dpToPx(18) : isSmall ? dpToPx(20) : dpToPx(22),
			width: '100%',
			fontFamily: FONTS.Bold,
			fontSize: Platform.OS === 'ios' ? dpToPx(16) : isSmall ? dpToPx(18) : dpToPx(20),
			letterSpacing: dpToPx(0),
			color: CM.getColor('color2'),
			backgroundColor: CM.getColor('white')
		},
		selectorTextView: {
			lineHeight: Platform.OS === 'ios' ? dpToPx(16) : isSmall ? dpToPx(18) : dpToPx(20),
			fontFamily: FONTS.Bold,
			fontSize: Platform.OS === 'ios' ? dpToPx(14) : isSmall ? dpToPx(16) : dpToPx(18),
			letterSpacing: dpToPx(0),
			color: CM.getColor('color2')
		},
		dropdownContainer: {
			marginBottom: 23,
			width: '100%'
		},
		dropdownStyle: {
			height: 40,
			width: '100%',
			borderBottomColor: CM.getColor('color4'),
			fontFamily: FONTS.Bold,
			letterSpacing: dpToPx(0),
			borderRadius: 10
		},
		titleContainer: {
			height: normalize(30),
			width: '100%',
			borderColor: 'blue',
			marginBottom: normalize(10)
		},
		buttonContainer: {
			flexDirection: 'row',
			width: '100%',
			alignItems: 'center'
		},
		title: {
			fontSize: Platform.OS === 'ios' ? dpToPx(16) : dpToPx(20),
			paddingLeft: 15,
			fontFamily: FONTS.Regular,
			letterSpacing: dpToPx(2)
		},
		optionsContainer: {
			backgroundColor: CM.getColor('white'),
			width: '100%',
			paddingBottom: normalize(5),
			borderRadius: 10
		},
		optionsContainer2: {
			backgroundColor: CM.getColor('white'),
			width: '100%',
			paddingBottom: 5,
			borderRadius: 10,
			top: dpToPx(5)
		},
		itemContainer: {
			borderBottomColor: CM.getColor('color5', '10'),
			borderBottomWidth: 1,
			paddingTop: normalize(5),
			paddingBottom: normalize(10),
			width: '100%'
		},
		item: {
			color: CM.getColor('color2'),
			paddingLeft: 30,
			fontSize: Platform.OS === 'ios' ? dpToPx(15) : dpToPx(19),
			fontFamily: FONTS.Regular,
			letterSpacing: dpToPx(2)
		}
	})
