import * as Localization from 'expo-localization'
import * as Location from 'expo-location'

class LocalizationManager {
	getDeviceLocale() {
		return {
			countryCode: Localization.locale,
			languageCode: Localization.locale,
			languageTag: `${Localization.locale}-${Localization.region}`
		}
	}

	getTimeZone() {
		return Localization.timezone
	}

	async getGeoCode({ latitude, longitude }) {
		return Location.reverseGeocodeAsync({
			latitude,
			longitude
		})
	}

	async getLocation() {
		try {
			const { status } = await Location.requestPermissionsAsync()
			if (status !== 'granted') {
				return null
			}

			return Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High })
		} catch (err) {
			return null
		}
	}
}

export default new LocalizationManager()
