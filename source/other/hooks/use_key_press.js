import React from 'react'
import _ from 'lodash'

function useKeyPress(targetKey) {
	// State for keeping track of whether key is pressed
	const [isKeyPressed, setIsKeyPressed] = React.useState(false)
	const [isCapsLockActive, setIsCapsLockActive] = React.useState(false)
	const [isNumLockActive, setIsNumLockActive] = React.useState(false)

	// If pressed key is our target key then set to true
	const downHandler = React.useCallback(
		event => {
			if (_.isFunction(event.getModifierState)) {
				if (isCapsLockActive !== event.getModifierState('CapsLock'))
					setIsCapsLockActive(event.getModifierState('CapsLock'))

				if (isNumLockActive !== event.getModifierState('NumLock'))
					setIsNumLockActive(event.getModifierState('NumLock'))
			}

			if (event.key === targetKey) {
				setIsKeyPressed(true)
			}
		},
		[targetKey, isCapsLockActive, isNumLockActive]
	)

	// If released key is our target key then set to false
	const upHandler = React.useCallback(
		event => {
			if (_.isFunction(event.getModifierState)) {
				if (isCapsLockActive !== event.getModifierState('CapsLock'))
					setIsCapsLockActive(event.getModifierState('CapsLock'))

				if (isNumLockActive !== event.getModifierState('NumLock'))
					setIsNumLockActive(event.getModifierState('NumLock'))
			}

			if (event.key === targetKey) {
				setIsKeyPressed(false)
			}
		},
		[targetKey, isCapsLockActive, isNumLockActive]
	)

	// Add event listeners
	React.useEffect(() => {
		window.addEventListener('keydown', downHandler)
		window.addEventListener('keyup', upHandler)
		// Remove event listeners on cleanup
		return () => {
			window.removeEventListener('keydown', downHandler)
			window.removeEventListener('keyup', upHandler)
		}
	}, [downHandler, upHandler])

	return { isKeyPressed, isCapsLockActive, isNumLockActive }
}

export default useKeyPress
