import { StyleSheet } from 'react-native';
var colors = require('../colors');

export default StyleSheet.create({

	button_icon: {
		width: 50, 
		height: 56,
		justifyContent: 'center', 
		alignItems: 'center'
	},
	button_secondary: {
		color: colors.main, 
		padding: 10, 
		borderWidth: 1, 
		borderRadius: 10, 
		borderColor: colors.main,
		textAlign: 'center'
	},
	button_primary: {
		padding: 15, 
		borderRadius: 5, 
		backgroundColor: colors.main, 
		alignItems: 'center'
	},
	button_primary_text: {
		color: colors.white, 
		fontWeight: 'bold', 
		fontSize: 16
	},

});
