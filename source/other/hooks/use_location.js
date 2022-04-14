import React, { useEffect, useState } from 'react'

import useFetch from './use_fetch'
import LocalizationManager from './languages/localization_manager'

const API = [
	{ id: 'IPAPI', url: 'https://ipapi.co/json/' },
	{ id: 'FREEGEOIP', url: 'https://freegeoip.app/json/' }
]

const parser = (id, { country_code, city, latitude, longitude, ...data }) => {
	switch (id) {
		case 'DEVICE':
			country_code = data.isoCountryCode
			break
		default:
			break
	}

	return { country_code, city, latitude, longitude }
}

const useLocation = () => {
	const [data, setData] = useState(null)
	const [index, setIndex] = useState(null)
	const [url, setUrl] = useState(null)
	const { response, error } = useFetch(url)

	useEffect(() => {
		LocalizationManager.getLocation().then(response => {
			if (!response) {
				return setIndex(0)
			}

			LocalizationManager.getGeoCode(response.coords).then(data => {
				setData(parser('DEVICE', { ...response.coords, ...data[0] }))
			})
		})
	}, [])

	useEffect(() => {
		if (index > 0 && index < API.length) {
			setUrl(API[index].url)
		}
	}, [index])

	useEffect(() => {
		if (index === null) {
			return
		}

		if (error) {
			return setIndex(prev => prev + 1)
		}

		setData(parser(index, response))
	}, [response, error, index])

	return data
}

export default useLocation
