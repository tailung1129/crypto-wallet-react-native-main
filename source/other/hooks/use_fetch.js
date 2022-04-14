import React, { useEffect, useState } from 'react'

const useFetch = (url, options) => {
	const [response, setResponse] = useState(null)
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(url, options)
				const json = await res.json()
				setResponse(json)
			} catch (error) {
				setError(error)
			}
		}
		url && fetchData()
	}, [url])

	return { response, error }
}

export default useFetch
