import React from 'react';
import { Text } from 'react-native';

export default class B extends React.Component {
	render() {
		const { children } = this.props;
	    return (
	 		<Text style={{fontWeight: '800'}}>{children}</Text>
	    ) 
	} 
} 