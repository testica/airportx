import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { fetchListings } from '../state/actions/listings-actions';

import ListingPricesCalendar from '../components/listing-prices-calendar';
import MainContainer from '../components/main-container';
import VerifiedBadge from '../components/verified-badge';
import ListingsDetailsPrice from '../components/listing-details-price';
import Image from '../components/image';
import Button from '../components/button';

import styles from '../constants/global-styles';
var colors = require('../constants/colors');

const mapStateToProps = state => ({
  listings: state.listings.listings,
  loading: state.listings.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchListings: () => dispatch(fetchListings())
});

class ListingDetailsScreen extends Component {

  static navigationOptions = ({ navigation, screenProps }) => ({
    header: null
  });

  constructor(props) {
    super(props);
    this.state =  {
      loading: true
    };
  }

  componentDidMount() {
    this.setState({loading: false});
  }

  render() {

    const { loading } = this.state;
    const { goBack } = this.props.navigation;
    const listingData = this.props.navigation.getParam('listingData');
    const { 
      title, 
      pricePerMonth, 
      checked, 
      runnerName 
    } = listingData.item;
    const { pricesByMonth } = listingData.item.monthlyPrice;
    const { homecardHidpi } = listingData.item.photoUrls;

    const onPressGoBack = () => {  
      goBack();
    }

    return (
      <MainContainer loading={loading} >
        
        <Image uri={homecardHidpi}>
          <View style={styles.absolute_back_button}>
            <Button type="icon" icon="ios-arrow-back" size={24} onPress={onPressGoBack} color={colors.white} /> 
          </View>
        </Image>

        <View style={styles.listing_details_content}>

          <View style={styles.listing_details_price_section}>
            <ListingsDetailsPrice price={pricePerMonth} style={styles.listing_details_price}/>
            {checked &&
              <VerifiedBadge runnerName={runnerName} />
            }
          </View>
          
          <Text style={styles.listing_details_title}>{title}</Text>

          {pricesByMonth &&
            <View>
              <Text style={styles.section_title}>Precio por mes</Text>
              <ListingPricesCalendar pricesByMonth={pricesByMonth} />
            </View>
          }

        </View>

      </MainContainer>
    );

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListingDetailsScreen);
