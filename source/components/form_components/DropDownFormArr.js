import React, { useState } from 'react'
import { Text, View, TouchableOpacity, TextInput } from 'react-native'

import Icon, { Sources } from '../icon/icon_component'

import Styles from './FormStyles'
import { ocupationList } from './ocupationList'

const styles = Styles()

const DropDownFormArr = ({
	cntStyle,
	headerStyle = styles.inputPlaceHolder,
	inputStyle = styles.infoTextView,
	headingText,
	onChange,
	list = ocupationList,
	defaultValue = '',
	currentLanguage
}) => {
	const [isOpen, setIsOpen] = useState(false)
	const [value, setValue] = useState(() => {
		const defaultValueObj = list.find(e => e.code === defaultValue)
		if (defaultValueObj) {
			return defaultValueObj[`name${currentLanguage === 'es' ? '1' : ''}`]
		}
		return ''
	})

	const onPressSwitcher = () => {
		setIsOpen(!isOpen)
	}

	const valueSelection = (stringDescription, optionCode) => {
		setValue(stringDescription)
		// setCode(optionCode)
		setIsOpen(false)
		if (onChange) {
			onChange(optionCode)
		}
	}

	return (
		<View style={cntStyle}>
			<View style={!isOpen ? styles.firstViewThin : styles.firstView2}>
				<Text style={headerStyle}>{headingText}</Text>
				<View style={styles.titleContainer}>
					<TouchableOpacity onPress={onPressSwitcher}>
						<View style={[styles.buttonContainer, styles.dropdownStyle]}>
							<View style={styles.dropDownArr}>
								<TextInput
									style={inputStyle}
									pointerEvents="none"
									onFocus={() => setIsOpen(true)}
									onBlur={() => setIsOpen(false)}
									value={value}
									editable={false}
								/>
							</View>
							<Icon
								onPress={onPressSwitcher}
								size={30}
								source={Sources.Feather}
								name={isOpen ? 'chevron-up' : 'chevron-down'}
							/>
						</View>
					</TouchableOpacity>
				</View>
				{isOpen && (
					<View style={styles.optionsContainer}>
						{list.map(opt => {
							const optionString = currentLanguage.startsWith('en') ? opt.name : opt.name1
							return (
								<TouchableOpacity onPress={() => valueSelection(optionString, opt.code)} key={opt.code}>
									<View style={styles.itemContainer}>
										<Text secondary style={styles.item}>
											{optionString}
										</Text>
									</View>
								</TouchableOpacity>
							)
						})}
					</View>
				)}
			</View>
		</View>
	)
}

export default DropDownFormArr
