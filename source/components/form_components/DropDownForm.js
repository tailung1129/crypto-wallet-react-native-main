import React from 'react'
import { Text, View, TouchableOpacity, TextInput } from 'react-native'
import _ from 'lodash'

import { finalList as defaultList } from './countries'

import Styles from './FormStyles'
const styles = Styles()

let elementsList
const countriesCodes = defaultList.map(val => val.code)

class DropDownForm extends React.Component {
	constructor(props) {
		super(props)
		elementsList = props.list ? props.list : defaultList

		const defaultObj = props.defaultValue ? elementsList.find(e => e.code == props.defaultValue) : null
		this.state = {
			isOpen: false,
			name: defaultObj ? defaultObj.name : '',
			lowerCaseName: defaultObj ? defaultObj.name.toLowerCase() : '',
			code: defaultObj ? defaultObj.code : '',
			defaultName: ''
		}
	}

	optionSelection = (name, code) => {
		this.setState({
			lowerCaseName: _.toLower(name),
			name: name,
			nameCode: code,
			isOpen: false
		})
		this.props.onChangeText(code)
	}

	handleChange = (text, finalList) => {
		const manualMatch = finalList.find(obj => _.toLower(obj.name) === _.toLower(text))
		if (manualMatch) {
			this.optionSelection(manualMatch.name, manualMatch.code)
		} else {
			this.setState({
				name: text,
				lowerCaseName: _.toLower(text)
			})
		}
	}

	getOrderedListByName = defaultList => {
		return defaultList.sort((a, b) => {
			if (a.name < b.name) return -1
			if (a.name > b.name) return 1
			return 0
		})
	}

	getOrderedListByName = defaultList => {
		return defaultList.sort((a, b) => {
			if (a.name < b.name) return -1
			if (a.name > b.name) return 1
			return 0
		})
	}

	render() {
		const { cntStyle, headingText, onChangeText, defaultValue, currentLocale = 'en' } = this.props

		const finalList = currentLocale.startsWith('en') ? elementsList : this.getOrderedListByName(elementsList)

		const defaultValueObj = defaultValue ? finalList.find(e => e.code === defaultValue) : null
		const defaultValueName = defaultValueObj ? defaultValueObj.name : ''

		const suggestionsList = finalList.filter(
			obj =>
				_.toLower(obj.name).startsWith(this.state.lowerCaseName) &&
				this.state.lowerCaseName !== _.toLower(obj.name)
		)

		return (
			<TouchableOpacity
				activeOpacity={1}
				onPress={() => this.input.focus()}
				style={[cntStyle, { elevation: 2 }]}
			>
				<View style={styles.dropdownFirstView}>
					<Text style={styles.inputPlaceHolder}>{headingText}</Text>
					<View style={styles.titleContainer}>
						<View style={[styles.buttonContainer, styles.dropdownStyle]}>
							<TextInput
								ref={input => (this.input = input)}
								style={styles.infoTextView}
								returnKeyType="done"
								onChangeText={text => {
									this.handleChange(text, finalList)
								}}
								defaultValue={defaultValueName}
								value={this.state.name}
								onFocus={() => {
									this.setState({ isOpen: true })
								}}
								onBlur={() => {
									this.setState({ isOpen: false })
									this.props.formik.validateForm()
								}}
							/>
						</View>
					</View>
					{this.state.isOpen &&
						!_.isNil(this.state.name) &&
						this.state.name.length > 0 &&
						suggestionsList.length > 0 && (
							<View style={styles.optionsContainer}>
								{suggestionsList.map(opt => (
									<TouchableOpacity onPress={() => this.optionSelection(opt.name, opt.code)} key={opt.code}>
										<Text secondary style={[styles.item, styles.itemContainer]}>
											{opt.name}
										</Text>
									</TouchableOpacity>
								))}
							</View>
						)}
				</View>
				<View>
					<Text style={styles.errorInput}>{this.props.error || ''}</Text>
				</View>
			</TouchableOpacity>
		)
	}
}

export default DropDownForm
export { countriesCodes }
