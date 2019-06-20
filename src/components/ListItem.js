import React, {Component} from 'react'
import {Text, TouchableWithoutFeedback, View} from 'react-native'
import {connect} from 'react-redux'
import {CardSection} from './common'
import * as actions from '../actions'

class ListItem extends Component {
	renderDescription = () => {
		const {library, selectedLibraryId} = this.props
		if (library.id === selectedLibraryId) {
			return (
				<CardSection>
					<Text>
						{library.description}
					</Text>
				</CardSection>
			)
		}
	}
	render() {
		const {title, description, id} = this.props.library
		const {titleStyle} = styles
		return (
			<TouchableWithoutFeedback
				onPress={()=>this.props.selectLibrary(id)}
			>
				<View>
					<CardSection>
						<Text style={titleStyle}>
							{title}
						</Text>
					</CardSection>
					{this.renderDescription()}
				</View>
			</TouchableWithoutFeedback>
		)
	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	}
}

const mapStateToProps = (state) => {
	return {
		selectedLibraryId: state.selectedLibraryId
	}
}

export default connect(mapStateToProps, actions)(ListItem)