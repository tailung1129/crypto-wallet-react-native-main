import React, { createContext, useState, useEffect, useContext, useCallback } from 'react'
import every from 'lodash/every'
//import { useNetInfo } from '@react-native-community/netinfo'
//import { useSelector } from 'react-redux'

import useStorage from './use_storage'

//import { getIsAuthenticated } from 'Modules/customer/customer_module'

import FileSystemManager from './file_system_manager'
import ColorsManager from '../appearance/colors_manager'
import { getDeviceLocale, locale } from '../languages/localization'

const Context = createContext()

const Provider = ({ children }) => {
	//const netInfo = useNetInfo()
	const onFinishLayout = () => setIsLayoutMeasured(true)

	const [isAuthenticated, setIsAuthenticated] = useState(false)//useSelector(getIsAuthenticated)

	const [language, setLanguage] = useStorage('customLanguage', getDeviceLocale() || 'es')

	const [isLayoutMeasured, setIsLayoutMeasured] = useState(false)
	//const [isConnected, setIsConnected] = useState(false)
	const [isInit, setInit] = useState(false)
	const [loading, setLoading] = useState(true)
	const [hasRegister, setHasRegister] = useState(false)
	const [country, setCountry] = useState(language)

	useEffect(() => {
		if (!isAuthenticated) {
			setLoading(false)
		}
	}, [isAuthenticated])

/* 	useEffect(() => {
		setIsConnected(() => netInfo.isConnected)
	}, [netInfo]) */

	useEffect(() => {
		if (language !== null) {
			setCountry(prev => (prev === null ? language : prev))
			locale(language)
		}
	}, [language])

 	useEffect(() => {
		if (every([isInit, isLayoutMeasured, !loading])) {
			//SplashScreen.hide()
		}
	}, [isInit, isLayoutMeasured, loading]) 

	const changeLanguage = useCallback(
		async value => {
			if (language !== null && language !== value) {
				await setLanguage(value)
			}
		},
		[language]
	)

	const initApp = async () => {
		await FileSystemManager.init()
		await ColorsManager.init()
		setInit(true)
	}

	useEffect(() => {
		initApp()
	}, [])

	if (!isInit) {
		return null
	}

	return (
		<Context.Provider
			value={{
				isAuthenticated,
				onFinishLayout,
				language,
				changeLanguage,
				country,
				setCountry,
				setLoading,
				hasRegister,
				setHasRegister
			}}
		>
			{children}
		</Context.Provider>
	)
}

const useApp = () => useContext(Context)

export { useApp }
export default Provider
