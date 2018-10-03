import { StyleSheet } from 'react-native';
const colors = require('../colors');

export default StyleSheet.create({

	calendarCol: {
		flexDirection: 'row'
	},
	calendarCell: {
		flex: 1, 
		padding: 5, 
		borderWidth: 1, 
		borderColor: colors.icons
	},
	monthName: {
		color: colors.text, 
		fontSize: 12, 
		fontWeight: '400'
	},
	monthPrice: {
		color: colors.text, 
		fontSize: 14, 
		fontWeight: '400'
	}

});
