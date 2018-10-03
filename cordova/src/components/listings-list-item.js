import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text } from 'react-native'

import Image from './image';
import styles from '../constants/global-styles';

export default class ListingsListItem extends React.Component {

  static propTypes = {
		rowData: PropTypes.object,
		onPress: PropTypes.func,
	};
	
  render() {

    const { rowData, onPress } = this.props;
    const { id, title, pricePerMonth } = rowData.item;
    const { homecardHidpi } = rowData.item.photoUrls;

    return (
      <TouchableOpacity key={id} onPress={onPress} >
        <View style={styles.listings_list_item}>
          <Image uri={homecardHidpi} />
          <View style={styles.listing_details_content}>
            <Text style={styles.listings_list_item_text}>
              <Text style={styles.listings_list_item_price}>
                {pricePerMonth}€
                <Text style={styles.listings_list_item_text_small}> al mes</Text>
              </Text>
              - {title}
            </Text>
          </View>          
        </View>
      </TouchableOpacity>
    );

  }
   
} 