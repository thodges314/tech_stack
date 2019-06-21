import React, {Component} from 'react'
import {LayoutAnimation, Text, TouchableWithoutFeedback, UIManager, View} from 'react-native'
import {connect} from 'react-redux'
import {CardSection} from './common'
import * as actions from '../actions'

class ListItem extends Component {
	constructor(props){
		super(props)
		UIManager.setLayoutAnimationEnabledExperimental(true)
	}
	renderDescription = () => {
		const {library, expanded} = this.props
		if (expanded) {
			return (
				<CardSection>
					<Text style={{flex: 1}}>
						{library.description}
					</Text>
				</CardSection>
			)
		}
	}
	render() {
		const {title, id} = this.props.library
		const {expanded} = this.props
		const {titleStyle} = styles
		LayoutAnimation.spring()
		return (
			<TouchableWithoutFeedback
				onPress={()=>this.props.selectLibrary(expanded? null: id)}
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

const mapStateToProps = (state, ownProps) => {
	const expanded = state.selectedLibraryId === ownProps.library.id
	return {expanded}
}

export default connect(mapStateToProps, actions)(ListItem)