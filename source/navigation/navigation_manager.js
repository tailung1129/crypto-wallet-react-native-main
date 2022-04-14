import { CommonActions } from '@react-navigation/native'

class NavigationManager {
	navigationRef

	async init(ref) {
		this.navigationRef = ref
	}

	navigate(routeName, params) {
		this.navigationRef.dispatch(
			CommonActions.navigate({
				name: routeName,
				params: params
			})
		)
	}

	replace(routeName, params) {
		const resetAction = CommonActions.reset({
			index: 0,
			routes: [
				{
					name: routeName,
					params: params
				}
			]
		})
		this.navigationRef.dispatch(resetAction)
	}

	reset(routeName, params) {
		const resetAction = CommonActions.reset({
			index: 0,
			routes: [
				{
					name: routeName,
					params: params
				}
			]
		})
		this.navigationRef.dispatch(resetAction)
	}
}

export default new NavigationManager()
