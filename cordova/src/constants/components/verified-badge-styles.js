import { StyleSheet } from 'react-native';
var colors = require('../colors');

export default StyleSheet.create({

	badge: {
		borderRadius: 5, 
		padding: 10, 
		backgroundColor: colors.main, 
		height: 40
	},
	badge_text: {
		color: colors.white, 
		fontSize: 16, 
		fontWeight: '400'
	}

});
