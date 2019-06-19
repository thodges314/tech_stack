import React, {Component} from 'react'
import {Text} from 'react-native'
import {CardSection} from './common'

class ListItem extends Component {
	render() {
		const {title, description} = this.props.library
		return (
			<CardSection>
				<Text>{title}</Text>
			</CardSection>
		)
	}
}

export default ListItem