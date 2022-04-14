import React from 'react'
import _ from 'lodash'
import { View, Text, TextInput } from 'react-native'
import PropTypes from 'prop-types'

import Styles from './FormStyles'

const styles = Styles()
const stylePropsType = PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.object])

class TextForm extends React.PureComponent {
	static propTypes = {
		containerStyle: stylePropsType,
		headingText: PropTypes.string.isRequired,
		...TextInput.propTypes // this makes the Input component have proptypes of Textinput
	}
	constructor() {
		super()
		Text.defaultProps = Text.defaultProps || {}
		// Ignore dynamic type scaling on iOS
		Text.defaultProps.allowFontScaling = false
		TextInput.defaultProps = TextInput.defaultProps || {}
		// Ignore dynamic type scaling on iOS
		TextInput.defaultProps.allowFontScaling = false
	}
	static defaultProps = {
		containerStyle: styles.firstView,
		cntStyle: styles.cntView,
		touched: false,
		error: null
	}
	componentDidMount() {
		if (!_.isNil(this.props.defaultValue)) this.setState({ value: this.props.defaultValue })
	}

	state = { value: '' }

	focus = () => {
		this.input.focus()
	}

	render() {
		const {
			cntStyle,
			containerStyle,
			headingText,
			touched,
			error,
			onChangeText,
			myRegex,
			customInputStyle = styles.infoTextView,
			keyboardType = 'default',
			...props
		} = this.props
		return (
			<View style={cntStyle}>
				<View style={containerStyle}>
					<Text style={styles.inputPlaceHolder}>{headingText}</Text>
					<TextInput
						keyboardType={keyboardType}
						defaultValue={this.props.defaultValue}
						onChangeText={val => {
							if (val.length > 0 && this.state.value.length > 0 && val.length > this.state.value.length) {
								let changedIndex = 0
								_.each(this.state.value, (valu, index) => {
									if (valu === val[Number(index)]) {
										changedIndex++
									}
								})
								if (!myRegex || myRegex.test(val[changedIndex].toString())) {
									onChangeText(val)
									this.setState({ value: val })
									return
								}
								return
							}
							if (_.isNil(myRegex)) {
								onChangeText(val)
								this.setState({ value: val })
							} else if (val.length === 0 || (!myRegex || myRegex.test(val[val.length - 1].toString()))) {
								onChangeText(val)
								this.setState({ value: val })
							}
						}}
						ref={input => (this.input = input)}
						style={customInputStyle}
						value={this.state.value}
						{...props}
					/>
				</View>
				<View>
					<Text style={styles.errorInput}>{this.props.error}</Text>
				</View>
			</View>
		)
	}
}

export default TextForm
