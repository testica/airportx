import React, { Component } from 'react';
import { Text, View } from 'react-native';

import B from './b';

import styles from '../constants/components/listing-details-price-styles';


class ListingDetailsPrice extends Component {
  static propTypes = {
    style: Text.propTypes.style,
  };

  render() {
    const { price, style } = this.props;
    return (
      <View style={style}>
        <Text style={styles.price_title}>Desde</Text>
        <Text style={styles.price_value}>{price}</Text>
      </View>
    );
  }
}

export default ListingDetailsPrice;
