import get from 'lodash/get'
import isNil from 'lodash/isNil'
import axios from 'axios'

import colors from '../colors.json'

class ColorsManager {
	remoteUrl = 'https://storage.googleapis.com/demo-storage/others'

	// If anyone sees this yellow color ffff00 => means something went wrong, contact Gonzalo Polo
	getColor = (name, opacity = 100) =>
		get(isNil(this.colors) ? colors : this.colors, `[${name}][${opacity}]`, '#ffff00')

	async init() {
		// We are saving it in memory, however we are fetching it every time anyway.
		const url = `${this.remoteUrl}/colors_v1.json`

		try {
			this.colors = colors
			//const { data } = await axios.get(url)
			//this.colors = data
		} catch (error) {
			this.colors = colors
		}
	}
}

export default new ColorsManager()
