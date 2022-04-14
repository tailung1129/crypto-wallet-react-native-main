import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import noop from 'lodash/noop'

import routes from './routes'
import TransitionConfiguration from './router_transitions'
import { useApp } from '../other/storage/appContext'
import OnboardingScreen1 from '../screens/onboardingForm1'
import OnboardingScreen2 from '../screens/onboardingForm2'
import OnboardingScreen3 from '../screens/onboardingForm3'

import Styles from './navStyles/styles'

const Stack = createStackNavigator()
const styles = Styles()

const screenOptions = props => ({
	transitionConfig: TransitionConfiguration,
	headerShown: true,
	...styles,
	...props
})

const RegisterApp = () => (
 	<Stack.Navigator screenOptions={screenOptions({ initialRouteName: routes.userdataOnboarding1 })}>
		<Stack.Screen
			name={routes.userdataOnboarding1}
			component={OnboardingScreen1}
			options={OnboardingScreen1.navigationOptions}
		/> 
		<Stack.Screen
			name={routes.userdataOnboarding2}
			component={UserDataOnboardingScreen2}
			options={UserDataOnboardingScreen2.navigationOptions}
		/>
		<Stack.Screen
			name={routes.userdataOnboarding3}
			component={UserDataOnboardingScreen3}
			options={UserDataOnboardingScreen3.navigationOptions}
		/>
 	</Stack.Navigator> 
)

const AuthenticatedApp = () => {
	const { hasRegister } = useApp()

	return <RegisterApp /> 
}

export default AuthenticatedApp
