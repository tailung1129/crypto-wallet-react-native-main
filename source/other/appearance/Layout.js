import { Dimensions, PixelRatio, Platform } from 'react-native'
import DeviceInfo from 'react-native-device-info'
import RF from 'react-native-responsive-fontsize'
import { create } from 'react-native-pixel-perfect'
const screen = Dimensions.get('window')

const unitHeight = screen.height / 10
const unitWidth = screen.width / 10
const scale = screen.width / 320

export const isAndroid = Platform.OS === 'android' ? true : false

export const $hunit = unitHeight
export const $wunit = unitWidth

export const isSmall = screen.height < 600
export const isMedium = screen.height >= 600 && screen.height < 800
export const isLarge = screen.height >= 800

// Android

export const isMdpi = PixelRatio.get() === 1
export const isHdpi = PixelRatio.get() === 1.5
export const isXdpi = PixelRatio.get() === 2
export const isXxdpi = PixelRatio.get() === 3
export const isXxxdpi = PixelRatio.get() === 3.5
export const isLargedpi = PixelRatio.get() >= 3.5
export const DIMENSIONS = {
	width: screen.width,
	height: screen.height,
	scale: screen.scale
}
export const looseMeasures = {
	isMdpi: PixelRatio.get() < 1,
	isHdpi: PixelRatio.get() > 1 && PixelRatio.get() <= 1.5,
	isXdpi: PixelRatio.get() > 1.5 && PixelRatio.get() <= 2,
	isXxdpi: PixelRatio.get() > 2 && PixelRatio.get() <= 3,
	isXxxdpi: PixelRatio.get() > 3 && PixelRatio.get() <= 3.5,
	isLargedpi: PixelRatio.get() >= 3.5
}

export const newMeasures = {
	isXxxdpi: PixelRatio.get() <= 1,
	isXxdpi: PixelRatio.get() > 1 && PixelRatio.get() <= 1.5,
	isXdpi: PixelRatio.get() > 1.5 && PixelRatio.get() <= 2,
	isHdpi: PixelRatio.get() > 2 && PixelRatio.get() <= 3,
	isMdpi: PixelRatio.get() > 3 && PixelRatio.get() <= 3.5
}

export const $pixelRatio = PixelRatio.get()

export const $fontScale = PixelRatio.getFontScale()

export const getFontSize = dpi => dpi * 1.333

export const button = {
	height: isLargedpi ? $hunit * 1 : $hunit * 0.8,
	width: $wunit * 9,
	marginLeft: $wunit * 0.5
}

/*export const dpToPx = (dpi, iosOffset = 1.22) =>
	Platform.OS === 'android'
		? isTallScreen ? PixelRatio.getPixelSizeForLayoutSize(dpi) / PixelRatio.get() / $fontScale / 1.2
			: PixelRatio.getPixelSizeForLayoutSize(dpi) / PixelRatio.get() / $fontScale
		: PixelRatio.getPixelSizeForLayoutSize(dpi) / PixelRatio.get() / $fontScale / iosOffset
*/

const designResolution = {
	width: 475,
	height: 845
} //this size is the size that your design is made for (screen size)
const pixelPerfect = create(designResolution)
export const dpToPx = (dpi, iosOffset = 1.1) =>
	Platform.OS === 'android'
		? isTallScreen
			? pixelPerfect(dpi) / 1.2
			: pixelPerfect(dpi)
		: pixelPerfect(dpi * iosOffset) / $fontScale

export const isTallScreen = Platform.OS === 'android' ? $hunit / $wunit > 1.7 : false
export const is18_9 = $hunit / $wunit >= 1.8
export const getAspectRatio = screen.height / screen.width

export const getRelativeSize = (size, tallScreenOffset = 1.2) =>
	RF(size) / $fontScale / (isTallScreen ? tallScreenOffset : 1)

const DEVICES = ['iPhone X', 'iPhone XS', 'iPhone XS Max', 'iPhone XR']

const DEVICE_STANDARD_HEIGHTS = {
	'iPhone X': 812,
	'iPhone XS': 812,
	'iPhone XS Max': 896,
	'iPhone XR': 896
}

const { height } = Dimensions.get('window')

const device_name = DeviceInfo.getModel()

let is_zoomed = false

if (DEVICES.includes(device_name)) {
	if (DEVICE_STANDARD_HEIGHTS[device_name] > $hunit) {
		// because when display is zoomed height is less than the standard display
		is_zoomed = true
	}
}

export const normalize = size => {
	const newSize = size * scale
	if (Platform.OS === 'ios') {
		return Math.round(PixelRatio.roundToNearestPixel(newSize))
	} else {
		return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
	}
}

export const isZoomed = is_zoomed
