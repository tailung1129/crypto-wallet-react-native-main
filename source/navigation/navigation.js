import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import NavigationManager from './navigation_manager'
import routes from './routes'

const linking = {
	prefixes: ['demo://'],
	config: { screens: routes }
}

const NavigationProvider = ({ children }) => (
	<NavigationContainer
		ref={navigationRef => {
			NavigationManager.init(navigationRef)
		}}
		linking={linking}
	>
		{children}
	</NavigationContainer>
)

export default NavigationProvider
