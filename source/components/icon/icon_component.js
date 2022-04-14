import React from 'react'
import { string, object, oneOf, number, func } from 'prop-types'
import _ from 'lodash'

/* ====================================================== */
/*                       Components                       */
/* ====================================================== */

import {
	AntDesign,
	Feather,
	FontAwesome,
	Foundation,
	Entypo,
	EvilIcons,
	Ionicons,
	MaterialIcons,
	Octicons,
	MaterialCommunityIcons
} from './icons'
import { TouchableWithoutFeedback, View } from 'react-native'

/* ====================================================== */
/*                    Implementation                      */
/* ====================================================== */

const Sources = {
	AntDesign: 'antDesign',
	Feather: 'feather',
	FontAwesome: 'fontAwesome',
	Foundation: 'foundation',
	Entypo: 'entypo',
	EvilIcons: 'evilIcons',
	Ionicons: 'ionicons',
	MaterialIcons: 'materialIcons',
	Octicons: 'octicons',
	MaterialCommunityIcons: 'MaterialCommunityIcons'
}

const Icon = React.memo(({ onPress, style, source, name, size, color }) => {
	if (onPress) {
		return (
			<TouchableWithoutFeedback
				onPress={onPress}
				hitSlop={{
					top: 5,
					left: 5,
					bottom: 5,
					right: 5
				}}
				accessible={true}
				accessibilityLabel={name === 'x' ? 'buttonHeaderLeft' : ''}
			>
				<View style={style}>
					{/* Do not remove this View as it work a ref, TBD use forwardRef */}
					<ExpoIcon source={source} name={name} size={size} color={color || "#FFFFFF"} />
				</View>
			</TouchableWithoutFeedback>
		)
	}
	return <ExpoIcon style={style} name={name} size={size} color={color} source={source} />
})

const ExpoIcon = React.memo(({ style, source, size, name, color }) => {
	switch (source) {
		case Sources.AntDesign:
			return <AntDesign style={style} name={name} size={size} color={color} />
		case Sources.Feather:
			return <Feather style={style} name={name} size={size} color={color} />
		case Sources.FontAwesome:
			return <FontAwesome style={style} name={name} size={size} color={color} />
		case Sources.FontAwesome5:
			return <FontAwesome5 style={style} name={name} size={size} color={color} />
		case Sources.Foundation:
			return <Foundation style={style} name={name} size={size} color={color} />
		case Sources.Entypo:
			return <Entypo style={style} name={name} size={size} color={color} />
		case Sources.EvilIcons:
			return <EvilIcons style={style} name={name} size={size} color={color} />
		case Sources.Ionicons:
			return <Ionicons style={style} name={name} size={size} color={color} />
		case Sources.MaterialIcons:
			return <MaterialIcons style={style} name={name} size={size} color={color} />
		case Sources.Octicons:
			return <Octicons style={style} name={name} size={size} color={color} />
		case Sources.MaterialCommunityIcons:
			return <MaterialCommunityIcons style={style} name={name} size={size} color={color} />
		default:
			return <AntDesign style={style} name={name} size={size} color={color} />
	}
})

Icon.propTypes = {
	name: string.isRequired,
	size: number.isRequired,
	source: oneOf(_.values(Sources)),
	style: object,
	onPress: func,
	color: string
}

Icon.defaultProps = {
	style: {},
	color: undefined,
	source: Sources.FontAwesome,
	onPress: _.noop
}

export default Icon

export { Sources }
