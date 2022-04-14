import React from 'react'
import { Text as TextNative } from 'react-native'
import PropTypes from 'prop-types'
import _ from 'lodash'

import classnames from './classnames'

/* ====================================================== */
/*                         Styles                         */
/* ====================================================== */

import Styles from './text_element_style'

/* ====================================================== */
/*                    Implementation                      */
/* ====================================================== */

// const SIZES = {
// 	DISPLAY: getRelativeSize(4),
// 	BIG_TITLE: getRelativeSize(3.2),
// 	TITLE: getRelativeSize(3),
// 	SUBTITLE: getRelativeSize(2.8),
// 	REGULAR: getRelativeSize(2.5),
// 	SMALL: getRelativeSize(2.3),
// 	CAPTION: getRelativeSize(2.1),
// 	MINI: getRelativeSize(1.8)
// }

export const SIZES = {
	DISPLAY: 'display',
	BIG_TITLE: 'big title',
	TITLE: 'title',
	SUBTITLE: 'subtitle',
	STANDARD: 'standard',
	SMALL: 'small',
	CAPTION: 'caption',
	MINI: 'mini',
	SUPERMINI: 'supermini'
}

export const SPACING = {
	NARROW: 'narrow',
	WIDE: 'wide',
	EXTRA_WIDE: 'extra wide'
}

const Text = React.memo(
	({
		style,
		display,
		bigTitle,
		subTitle,
		title,
		standard,
		small,
		caption,
		superMini,
		mini,
		light,
		bold,
		spacing,
		center,
		right,
		left,
		children,
		uppercase,
		lowercase,
		noPadding,
		onPress,
		pageTitle,
		secondaryText,
		numberText,
		numberTextNoPadding,
		button1,
		paragraphText,
		contactNames,
		contactNamesBold,
		textInput,
		clickableText,
		balance,
		tertiaryText,
		cardText,
		listTitle,
		contactNamesActivity,
		nameTitle,
		smallLight,
		smallLightSpaced,
		basicSemibold,
		basicLight,
		bigLight,
		spacedLight,
		bigRegular,
		grayBigLight,
		smallRegular,
		smallRegularSpaced,
		smallReasonSpaced,
		smallRegularSpaced2,
		nameTitleSmall,
		color,
		margin
	}) => {
		const styles = Styles()

		const classes = classnames.getStylesheet(styles, {
			// FontWeight
			Light: light && !bold,
			Bold: bold && !light,
			Regular: !light && !bold,

			// Sizes
			Display: display,
			BigTitle: bigTitle,
			Title: title,
			SubTitle: subTitle,
			Standard: !bigTitle && !title && !display && !subTitle && !small && !caption && !mini && !superMini,
			Small: small,
			Caption: caption,
			Mini: mini,
			SuperMini: superMini,

			// Letter spacing
			Narrow: spacing === SPACING.NARROW,
			Wide: spacing === SPACING.WIDE,
			ExtraWide: spacing === SPACING.EXTRA_WIDE,

			// Alignment
			Center: center,
			Left: left,
			Right: right,
			// PaddingVertical,
			NoPadding: noPadding,

			// Styleguide
			PageTitle: pageTitle,
			Button1: button1,
			SecondaryText: secondaryText,
			NumberText: numberText,
			NumberTextNoPadding: numberTextNoPadding,
			ParagraphText: paragraphText,
			ContactNames: contactNames,
			ContactNamesBold: contactNamesBold,
			TextInput: textInput,
			ClickableText: clickableText,
			BalanceText: balance,
			TertiaryText: tertiaryText,
			CardNumber: cardText,
			ListTitle: listTitle,
			NameTitle: nameTitle,
			ContactNamesActivity: contactNamesActivity,
			SmallLight: smallLight,
			SmallLightSpaced: smallLightSpaced,
			BasicSemibold: basicSemibold,
			BasicLight: basicLight,
			BigLight: bigLight,
			SpacedLight: spacedLight,
			BigRegular: bigRegular,
			GrayBigLight: grayBigLight,
			SmallRegular: smallRegular,
			SmallRegularSpaced: smallRegularSpaced,
			SmallReasonSpaced: smallReasonSpaced,
			SmallRegularSpaced2: smallRegularSpaced2,
			NameTitleSmall: nameTitleSmall,

			// Necessary for Avenir fonts

			Margin: margin
		})
		const combinedClasses = classnames.combineStyles(classes, style)

		const goodChild = _.isArray(children) ? _.join(children, '') : children

		const text = uppercase ? _.toUpper(goodChild) : lowercase ? _.toLower(goodChild) : children

		return (
			<TextNative
				onPress={onPress}
				style={[{ color: color || "#FFFFFF" }, combinedClasses]}
				ellipsizeMode="tail"
				allowFontScaling={false}
			>
				{text}
			</TextNative>
		)
	}
)

Text.propTypes = {
	children: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.array.isRequired]),
	// Weight
	bold: PropTypes.bool,
	light: PropTypes.bool,
	// Sizes
	display: PropTypes.bool,
	bigTitle: PropTypes.bool,
	title: PropTypes.bool,
	subTitle: PropTypes.bool,
	standard: PropTypes.bool,
	small: PropTypes.bool,
	caption: PropTypes.bool,
	mini: PropTypes.bool,
	superMini: PropTypes.bool,

	// Spacing
	spacing: PropTypes.oneOf(_.values(SPACING)),
	// Style
	style: PropTypes.object,

	// Alignment
	center: PropTypes.bool,
	right: PropTypes.bool,
	left: PropTypes.bool,

	// Extras
	uppercase: PropTypes.bool,
	lowercase: PropTypes.bool,

	color: PropTypes.string,

	margin: PropTypes.bool
}

Text.defaultProps = {
	// Weight
	bold: false,
	light: false,

	// Sizes
	bigTitle: false,
	title: false,
	subTitle: false,
	standard: true,
	small: false,
	caption: false,
	mini: false,
	superMini: false,

	// Spacing
	spacing: SPACING.NARROW,

	// Extras
	uppercase: false,
	lowercase: false,

	color: undefined,

	style: {},

	margin: true
}

export default Text
