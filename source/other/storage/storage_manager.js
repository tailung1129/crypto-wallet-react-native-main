import { Platform } from 'react-native'
import EncryptedStorage from 'react-native-encrypted-storage'
import AsyncStorage from '@react-native-community/async-storage'

const useEncrypted = Platform.OS === 'ios' || (Platform.OS === 'android' && Platform.Version >= 22)
const Storage = useEncrypted ? EncryptedStorage : AsyncStorage

const setItem = async (key, value) => {
	try {
		const response = JSON.stringify({ [key]: value })

		return await Storage.setItem(key, response)
	} catch (err) {
		console.log(err)
	}
}

const getItem = async key => {
	try {
		const data = await Storage.getItem(key)

		if (!data) {
			return null
		}

		const response = JSON.parse(data)

		return response[key]
	} catch (err) {
		crashlytics.recordError(err)
	}
}

const removeItem = async key => {
	try {
		return await Storage.removeItem(key)
	} catch (err) {
		crashlytics.recordError(err)
	}
}

const clear = async () => {
	try {
		return await Storage.clear()
	} catch (err) {
		crashlytics.recordError(err)
	}
}

export default { setItem, getItem, removeItem, clear }
