import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import styles from '../constants/components/button-styles';
var colors = require('../constants/colors');

export default class Button extends React.Component {
	static propTypes = {
		text: PropTypes.string,
		type: PropTypes.string,
		icon: PropTypes.string,
		onPress: PropTypes.func,
		color: PropTypes.string,
		size: PropTypes.number,
		style: Text.propTypes.style,
	};
	
  render() {
		const { 
			icon, 
			type, 
			onPress, 
			text, 
			color, 
			size ,
			style
		} = this.props;

		let colorIcon = colors.icons;
		let colorText = colors.text;
		if (color){
			colorIcon = color;
			colorText = color;
		}
		if (type == "icon"){
			return (
				<TouchableOpacity style={[style, styles.button_icon]} onPress={onPress}>
					<Ionicons name={icon} size={size} color={colorIcon} />
				</TouchableOpacity>   
			) 
		}
		if (type == "secondary"){
			return (
				<TouchableOpacity style={style} onPress={onPress}>
					<Text style={styles.button_secondary}>{text}</Text>
				</TouchableOpacity> 
			)
		}
		return (
			<TouchableOpacity style={style} onPress={onPress}>
				<View style={styles.button_primary}>
					<Text style={styles.button_primary_text}>{text}</Text>
				</View>
			</TouchableOpacity>   
		)
  } 
} 