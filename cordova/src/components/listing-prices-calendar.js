import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import styles from '../constants/components/listing-prices-calendar-styles';

class ListingPricesCalendar extends Component {
  static propTypes = {
    pricesByMonth: PropTypes.object,
    style: Text.propTypes.style,
  };

  render() {
    const { pricesByMonth, style } = this.props;
    return (
      <View style={style}>
        <View style={styles.calendarCol}>
          <View style={styles.calendarCell}>
            <Text style={styles.monthName}>Enero</Text>
            <Text style={styles.monthPrice}>{pricesByMonth.jan}</Text>
          </View>
          <View style={styles.calendarCell}>
            <Text style={styles.monthName}>Febrero</Text>
            <Text style={styles.monthPrice}>{pricesByMonth.feb}</Text>
          </View>
          <View style={styles.calendarCell}>
            <Text style={styles.monthName}>Marzo</Text>
            <Text style={styles.monthPrice}>{pricesByMonth.mar}</Text>
          </View>
          <View style={styles.calendarCell}>
            <Text style={styles.monthName}>Abril</Text>
            <Text style={styles.monthPrice}>{pricesByMonth.apr}</Text>
          </View>
        </View>
        <View style={styles.calendarCol}>
          <View style={styles.calendarCell}>
            <Text style={styles.monthName}>Mayo</Text>
            <Text style={styles.monthPrice}>{pricesByMonth.may}</Text>
          </View>
          <View style={styles.calendarCell}>
            <Text style={styles.monthName}>Junio</Text>
            <Text style={styles.monthPrice}>{pricesByMonth.jun}</Text>
          </View>
          <View style={styles.calendarCell}>
            <Text style={styles.monthName}>Julio</Text>
            <Text style={styles.monthPrice}>{pricesByMonth.jul}</Text>
          </View>
          <View style={styles.calendarCell}>
            <Text style={styles.monthName}>Agosto</Text>
            <Text style={styles.monthPrice}>{pricesByMonth.aug}</Text>
          </View>
        </View>
        <View style={styles.calendarCol}>
          <View style={styles.calendarCell}>
            <Text style={styles.monthName}>Septiembre</Text>
            <Text style={styles.monthPrice}>{pricesByMonth.sep}</Text>
          </View>
          <View style={styles.calendarCell}>
            <Text style={styles.monthName}>Octubre</Text>
            <Text style={styles.monthPrice}>{pricesByMonth.oct}</Text>
          </View>
          <View style={styles.calendarCell}>
            <Text style={styles.monthName}>Noviembre</Text>
            <Text style={styles.monthPrice}>{pricesByMonth.nov}</Text>
          </View>
          <View style={styles.calendarCell}>
            <Text style={styles.monthName}>Diciembre</Text>
            <Text style={styles.monthPrice}>{pricesByMonth.dec}</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default ListingPricesCalendar;
