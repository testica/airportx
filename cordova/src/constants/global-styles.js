import { StyleSheet } from 'react-native';
var colors = require('./colors');

export default StyleSheet.create({

	// GLOBAL
	topbar_logo: {
		width: 180
	},
	section_title: {
		marginTop: 20, 
		marginBottom: 10, 
		color: colors.main, 
		fontSize: 18, 
		fontWeight: '400'
	},
	absolute_back_button: {
		zIndex: 2, 
		position: 'absolute', 
		top: 0,
		left: 0,
		width: 50, 
		justifyContent: 'center', 
		alignItems: 'center', 
		height: 56
	},
	generic_text: {
		color: colors.text
	},
	topbar_side_empty: {
		width: 50, 
		height: 56
	},
	topbar_side_secondary_button_right: {
		marginRight: 10
	},
	slider_marker: {
		marginTop: 2, 
		borderWidth: 1, 
		borderColor: colors.rangeMarkerBorder, 
		backgroundColor: colors.rangeMarker, 
		height: 20, width: 20, 
		borderRadius: 10
	},
	slider_track: {
		height: 4
	},
	slider_track_selected: {
		backgroundColor: colors.main
	},
	slider_track_unselected: {
		backgroundColor: colors.rangeMarker
	},
	bottom_button_container: {
		padding: 15
	},
	fullscreen_modal_container: {
		flex: 1
	},
	

	// LISTING DETAILS SCREEN
	listing_details_title: {
		color: colors.text, 
		fontSize: 16, 
		fontWeight: '400'
	},
	listing_details_content: {
		backgroundColor: colors.white, 
		padding: 15, 
		flex: 1
	},
	listing_details_price_section: {
		flexDirection: 'row'
	},
	listing_details_price: {
		flex: 1, 
		marginBottom: 15
	},

	// LISTINGS SCREEN
	listings_filter_title: {
		color: colors.text, 
		fontSize: 14
	},
	listings_filter_container: {
		flex: 1, 
		padding: 15
	},
	listings_filter_price_container: {
		marginLeft: 5
	},
	listings_list_content: {
		backgroundColor: '#e5e5e5', 
		flex: 1
	},
	listings_list_inner_list: {
		padding: 15, 
		paddingBottom: 0, 
		paddingTop: 20
	},
	listings_list_item: {
		marginBottom: 20, 
		elevation: 2, 
		backgroundColor: colors.white, 
		borderBottomColor: colors.main, 
		borderBottomWidth: 2
	},
	listings_list_item_content: {
		padding: 15
	},
	listings_list_item_text: {
		fontSize: 14, 
		color: colors.text
	},
	listings_list_item_price: {
		color: colors.main, 
		fontSize: 16, 
		fontWeight: '400'
	},
	listings_list_item_text_small: {
		fontSize: 12
	}

});
