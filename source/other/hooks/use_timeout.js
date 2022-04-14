import React from 'react'
import _ from 'lodash'

function useTimeout({ shouldStart, callback = _.noop, timeoutDelayMs = 0 }) {
	const [isTimeoutActive, setIsTimeoutActive] = React.useState(false)
	const timeout = React.useRef()

	const clear = React.useCallback(() => {
		window.clearTimeout(timeout.current)
		setIsTimeoutActive(false)
	}, [timeout])

	const start = React.useCallback(() => {
		timeout.current = window.setTimeout(cb, timeoutDelayMs)
		setIsTimeoutActive(true)
	}, [cb, timeoutDelayMs])

	const cb = React.useCallback(() => {
		clear()
		callback()
	}, [callback, clear])

	React.useEffect(() => {
		if (shouldStart) start()
	}, [shouldStart, start])

	React.useEffect(() => {
		return () => window.clearTimeout(timeout.current)
	}, [])

	return {
		clear,
		start,
		stop: clear,
		isActive: isTimeoutActive
	}
}

export default useTimeout
