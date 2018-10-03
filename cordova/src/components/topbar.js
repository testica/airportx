import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../constants/global-styles';
var colors = require('../constants/colors');

export default class TopBar extends React.Component {
	static propTypes = {
		left: PropTypes.object,
		center: PropTypes.object,
		right: PropTypes.object
	};
	
  render() {
		const { 
			left, 
			center, 
			right, 
    } = this.props;

		return (
			<View style={{backgroundColor: '#ffffff', height: 56, flexDirection: 'row', elevation: 2}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          {left}
          {!left &&
            <View style={styles.topbar_side_empty}></View>
          }
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          {center}
        </View> 
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          {right}
          {!right &&
            <View style={styles.topbar_side_empty}></View>
          }
        </View> 
      </View>   
		) 
		
  } 
} 