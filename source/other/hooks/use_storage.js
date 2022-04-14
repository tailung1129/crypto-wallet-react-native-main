/* eslint-disable no-unused-vars */
import { useState, useEffect, useCallback } from 'react'
import StorageManager from './storage_manager'

const useStorage = (key, defaultValue = null) => {
	const [storageItem, setStorageItem] = useState(null)
	const [initializate, setInitialize] = useState(false)
	const [value, setValue] = useState()

	const getStorageItem = useCallback(async () => {
		const data = await StorageManager.getItem(key)

		setStorageItem(() => {
			if (data === null) {
				return defaultValue
			}

			return data
		})

		setInitialize(true)
	}, [defaultValue, key])

	const updateStorageItem = useCallback(
		async data => {
			await StorageManager.setItem(key, data)
			setStorageItem(data)
		},
		[key]
	)

	useEffect(() => {
		getStorageItem()
	}, [getStorageItem])

	useEffect(() => {
		if (initializate && value !== undefined) {
			updateStorageItem(value)
		}
	}, [initializate, updateStorageItem, value])

	const clearStorageItem = () => {
		StorageManager.removeItem(key)
		setStorageItem(null)
	}

	return [storageItem, setValue, clearStorageItem]
}

export default useStorage
