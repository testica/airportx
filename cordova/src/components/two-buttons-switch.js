import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native'

import Button from './button';
import styles from '../constants/components/two-buttons-switch-styles';
var colors = require('../constants/colors');

export default class TwoButtonsSwitch extends React.Component {
	static propTypes = {
    filterOrderBy: PropTypes.string,
    onPressA: PropTypes.func,
    onPressB: PropTypes.func,
    textA: PropTypes.string,
    textB: PropTypes.string
	};
	
  render() {
		const { 
      filterOrderBy,
      onPressA,
      onPressB,
      textA,
      textB,
    } = this.props;

		return (
			<View style={styles.two_buttons_switch_container}>
        {filterOrderBy == "price_asc" &&
          <View style={[styles.two_buttons_switch_button_active, styles.two_buttons_switch_left]}>
            <Text style={styles.two_buttons_switch_button_active_text}>{textA}</Text>
          </View>
        }
        {filterOrderBy != "price_asc" &&
          <Button style={[styles.two_buttons_switch_button, styles.two_buttons_switch_left]} type="secondary" text={textA} onPress={onPressA} />
        }
        {filterOrderBy == "price_desc" &&
          <View style={styles.two_buttons_switch_button_active}>
            <Text style={styles.two_buttons_switch_button_active_text}>{textB}</Text>
          </View>
        }
        {filterOrderBy != "price_desc" &&
          <Button style={styles.two_buttons_switch_button} type="secondary" text={textB} onPress={onPressB} />
        }
      </View>
		) 
		
  } 
} 