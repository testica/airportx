import { StyleSheet } from 'react-native';
var colors = require('../colors');

export default StyleSheet.create({

	two_buttons_switch_container: {
		flexDirection: 'row', 
		marginTop: 20
	},
	two_buttons_switch_button: {
		flex: 1
	},
	two_buttons_switch_left: {
		marginRight: 10
	},
	two_buttons_switch_button_active: {
		flex: 1, 
		borderRadius: 10, 
		backgroundColor: colors.main
	},
	two_buttons_switch_button_active_text: {
		textAlign: 'center', 
		color: colors.white, 
		padding: 10, 
		borderWidth: 0
	}

});
