import React from 'react'
import {
	ImageBackground,
	TouchableWithoutFeedback,
	Keyboard,
	KeyboardAvoidingView,
	ScrollView,
	View,
	Dimensions,
	Platform
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { combineStyle } from '../../other/helpers/helpers'

import Styles from './styles'

const getStyle = () => {
	const { width, height } = Dimensions.get('window')

	return {
		width: width < height ? width : height,
		height: width < height ? height : width
	}
}

const Background = ({ children, source }) => (
	<ImageBackground resizeMode="cover" source={source} style={getStyle()}>
		{children}
	</ImageBackground>
)

const Content = ({ children, ...props }) => <ScrollView {...props}>{children}</ScrollView>
const Footer = ({ children, style = {}, ...props }) => {
	const styles = combineStyle(Styles(), style)

	return (
		<View style={styles.footer} {...props}>
			{children}
		</View>
	)
}

const Layout = ({ children, withHeader = true, style = {}, ...props }) => {
	const insets = useSafeAreaInsets()
	const styles = combineStyle(Styles(), style)

	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
			enabled={false}
			{...props}
		>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View
					style={[styles.inner, { paddingTop: withHeader ? 0 : insets.top, paddingBottom: insets.bottom }]}
				>
					{children}
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

const FooterFixed = ({ style = {}, children }) => {
	const styles = combineStyle(Styles(), style)

	return <View style={styles.footer}>{children}</View>
}

export { Background, Content, Footer, FooterFixed }
export default Layout
