import { Animated, Easing } from 'react-native'

const TransitionConfiguration = () => ({
	transitionSpec: {
		duration: 400,
		easing: Easing.out(Easing.poly(4)),
		timing: Animated.timing,
		useNativeDriver: true
	},
	screenInterpolator: sceneProps => {
		const { layout, position, scene } = sceneProps
		const width = layout.initWidth
		const height = layout.initHeight
		const { index, route } = scene
		const params = route.params || {} // <- That's new
		const transition = params.transition || 'default' // <- That's new

		return {
			slideFromLeft: SlideFromLeft(index, position, width),
			slideFromBottom: SlideFromBottom(index, position, height),
			slideFromTop: SlideFromTop(index, position, height),
			default: SlideFromRight(index, position, width)
		}[transition]
	}
})

export default TransitionConfiguration

export const SlideFromRight = (index, position, width) => {
	const inputRange = [index - 1, index, index + 1]
	const translateX = position.interpolate({
		inputRange,
		outputRange: [width, 0, 0]
	})
	const slideFromRight = { transform: [{ translateX }] }
	return slideFromRight
}

export const SlideFromLeft = (index, position, width) => {
	const inputRange = [index - 1, index, index + 1]
	const translateX = position.interpolate({
		inputRange,
		outputRange: [-width, 0, width]
	})
	const sildeFromLeft = { transform: [{ translateX }] }
	return sildeFromLeft
}
