import React, { useState, useEffect, useCallback } from 'react'
import { Keyboard, Platform } from 'react-native'

export default function useKeyboard() {
	const [keyboardHeight, setKeyboardHeight] = useState(0)
	const [isKeyboardVisible, setIsKeyboardVisible] = useState(false)

	useEffect(() => {
		if (Platform.OS === 'ios') {
			const keyboardDidChangeSubscription = Keyboard.addListener('keyboardWillChangeFrame', onKeyboardChange)
			return () => keyboardDidChangeSubscription.remove()
		}

		const keyboardDidShowSubscription = Keyboard.addListener('keyboardDidShow', onKeyboardChange)
		const keyboardDidHideSubscription = Keyboard.addListener('keyboardDidHide', onKeyboardChange)

		return () => {
			keyboardDidHideSubscription.remove()
			keyboardDidShowSubscription.remove()
		}
	})

	useEffect(() => {}, [isKeyboardVisible])

	const onKeyboardChange = useCallback(event => {
		const { endCoordinates } = event
		setIsKeyboardVisible(_isKeyboardVisible => !_isKeyboardVisible)
		setKeyboardHeight(endCoordinates.height)
	}, [])

	return { isActive: isKeyboardVisible, keyboardHeight }
}
