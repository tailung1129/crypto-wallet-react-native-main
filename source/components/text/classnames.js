import _ from 'lodash'
import classnames from 'classnames'

export function getStylesheet(...args) {
	const compactArgs = _.compact(args)

	if (!compactArgs.length) {
		throw Error('You should describe your stylesheet')
	} else if (compactArgs.length === 1) {
		throw Error('You should describe classnames for your element or you have missing the main stylesheet')
	}

	const style = _.first(compactArgs)
	let elementClassnames = classnames(_.tail(compactArgs))
	elementClassnames = elementClassnames.split(' ')

	const arrayOfStyles = _.map(elementClassnames, classname => style[classname])

	return combineStyles(...arrayOfStyles)
}

export function combineStyles(...args) {
	return _.reduce(
		args,
		(memo, style) => {
			return _.assign(memo, style)
		},
		{}
	)
}

export default { getStylesheet, combineStyles, classnames }
