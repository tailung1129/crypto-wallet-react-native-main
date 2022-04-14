import React, { createContext, useState, useEffect, useCallback } from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import { View } from 'react-native'

import { useKeyboard } from '../hooks/hooks'
import { useApp } from './appContext'

const Context = createContext(Dimensions.get('screen'))

const ProviderDim = ({ children }) => {
	const { onFinishLayout } = useApp()

	const [height, setHeight] = useState(Dimensions.get('screen').height)
	const [width, setWidth] = useState(Dimensions.get('screen').width)
	const [isPortrait, setIsPortrait] = useState(height > width)
	const { keyboardHeight, isActive } = useKeyboard()

	useEffect(() => {
		Dimensions.addEventListener('change', handleDimensionsChange)
		return () => Dimensions.removeEventListener('change', handleDimensionsChange)
	}, [handleDimensionsChange])

	// Methods

	const onLayout = ({ nativeEvent }) => {
		setHeight(nativeEvent.layout.height)
		setWidth(nativeEvent.layout.width)
		onFinishLayout()
	}

	const handleDimensionsChange = useCallback(
		wrongSize => {
			const _height = height
			const _width = width
			setWidth(_height)
			setHeight(_width)
			setIsPortrait(_height > _width)
		},
		[height, width]
	)

	const realKeyboardHeight = isActive ? keyboardHeight + height - Dimensions.get('window').height : 0

	return (
		<Context.Provider value={{ height, width, keyboardHeight: realKeyboardHeight, isPortrait }}>
			<View style={StyleSheet.absoluteFill} onLayout={onLayout}>
				{children}
			</View>
		</Context.Provider>
	)
}

const useDimensions = () => useContext(DimensionsContext)

export { useDimensions }
export default Provider
