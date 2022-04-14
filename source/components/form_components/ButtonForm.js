import React from 'react'
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native'

import Styles from './FormStyles'

const styles = Styles()

const ButtonForm = ({ text, onPress, isSubmitting, disabled, indicatorColor }) => (
	<TouchableOpacity onPress={onPress} disabled={disabled || isSubmitting} style={styles.buttonView}>
		{isSubmitting ? (
			<ActivityIndicator color={indicatorColor} />
		) : (
			<Text style={styles.buttonText}>{text}</Text>
		)}
	</TouchableOpacity>
)

export default ButtonForm
