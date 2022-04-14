import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { View, Image, TouchableOpacity, Text as TextNative } from 'react-native'

import { dpToPx } from '../../other/appearance/Layout'
import Icon, { Sources } from '../icon/icon_component'
import Text from '../text/text_element'

import Styles from './header_component_styles'

export const HeaderCenter = React.memo(({ title, isGray, isActivity }) => {
	const styles = Styles()
	if (isGray) {
		return (
			<View style={styles.headerTitleContainer}>
				<Text contactNamesBold color={"#FFFFFF"}>
					{title}
				</Text>
			</View>
		)
	}
	if (isActivity) {
		return (
			<View style={styles.headerTitleContainerActivity}>
				<TextNative
					allowFontScaling={false}
					adjustsFontSizeToFit
					numberOfLines={1}
					style={styles.headerTitleText}
				>
					{title}
				</TextNative>
			</View>
		)
	}
	return (
		<View style={styles.headerTitleContainer}>
			<TextNative
				allowFontScaling={false}
				adjustsFontSizeToFit
				numberOfLines={1}
				style={styles.headerTitleText}
			>
				{title}
			</TextNative>
		</View>
	)
})

HeaderCenter.propTypes = {
	title: PropTypes.string,
	isActivity: PropTypes.bool
}

HeaderCenter.defaultProps = {
	title: ''
}

export const HeaderRight = React.memo(
	({ text, icon, personalizedIcon, title, actionRight, iconName, iconLib, iconColor }) => {
		const styles = Styles()
		return text ? (
			<TouchableOpacity style={styles.headerRightTouchableTarget} onPress={actionRight}>
				<Text paragraphText style={styles.headerRightText}>
					{' '}
					{title}
				</Text>
			</TouchableOpacity>
		) : personalizedIcon ? (
			<TouchableOpacity style={styles.headerRightTouchableTarget} onPress={actionRight}>
				<Image style={styles.qrIcon} resizeMode="contain" source={require(`../../public/QR.png`)} />
			</TouchableOpacity>
		) : icon ? (
			<Icon
				onPress={actionRight}
				source={iconLib}
				style={styles.headerRightIcon}
				name={iconName}
				size={26}
				color={iconColor}
			/>
		) : (
			<View style={{ width: 1, height: 1 }} />
		)
	}
)

HeaderRight.propTypes = {
	actionRight: PropTypes.func,
	title: PropTypes.string,
	iconColor: PropTypes.string,
	iconName: PropTypes.string,
	iconLib: PropTypes.string,
	text: PropTypes.bool,
	icon: PropTypes.bool
}

HeaderRight.defaultProps = {
	actionRight: _.noop,
	iconName: 'user',
	iconLib: Sources.Feather,
	iconColor: "#FFFFFF",
	title: '',
	text: false,
	icon: false
}

export const HeaderLeft = React.memo(({ actionLeft, iconName, iconLib, iconColor }) => {
	const styles = Styles()
	return (
		<Icon
			onPress={actionLeft}
			source={iconLib}
			color={iconColor}
			style={styles.headerLeftIcon}
			name={iconName}
			size={dpToPx(25)}
		/>
	)
})

HeaderLeft.propTypes = {
	actionLeft: PropTypes.func,
	iconName: PropTypes.string,
	iconLib: PropTypes.string,
	iconColor: PropTypes.string.isRequired
}

HeaderLeft.defaultProps = {
	actionLeft: _.noop,
	iconName: 'x',
	iconLib: Sources.Feather,
	iconColor: "#FFFFFF"
}
