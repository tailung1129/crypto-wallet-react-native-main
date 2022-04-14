import React from 'react'
import _ from 'lodash'
import axios from 'axios'

/* ====================================================== */
/*                    Implementation                      */
/* ====================================================== */

const UNSPLASH_KEY = '39aae838e25a9da4dcdeaac016936ea3e79a0ce349a2e9b23148d953d9ab21c1'
const FALLBACK_IMAGE =
	'https://images.unsplash.com/flagged/photo-1575556809963-3d9e5730eda0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=compress&fit=crop&w=300&q=80'

function useUnsplash() {
	const [imageURL, setImageURL] = React.useState('')

	const getRandomPhoto = React.useCallback(({ q }) => {
		return axios({
			method: 'get',
			url: `https://api.unsplash.com/photos/random?&query=${q}&orientation=portrait&featured&client_id=${UNSPLASH_KEY}`
		})
			.then(({ data }) => {
				return setImageURL(data.urls.regular)
			})
			.catch(e => {
				return setImageURL(FALLBACK_IMAGE)
			})
	}, [])

	return { getRandomPhoto, imageURL }
}

/* ====================================================== */
/*                       Public API                       */
/* ====================================================== */

export default useUnsplash
