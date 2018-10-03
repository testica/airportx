import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import { fetchListings } from '../state/actions/listings-actions';

import MainContainer from '../components/main-container';
import Image from '../components/image';
import Button from '../components/button';
import Topbar from '../components/topbar';
import ListingsListItem from '../components/listings-list-item';
import ListingsModalFilters from '../components/listings-modal-filters';

import styles from '../constants/global-styles';
var colors = require('../constants/colors');

const mapStateToProps = state => ({
  listings: state.listings.listings,
  loading: state.listings.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchListings: () => dispatch(fetchListings())
});

class ListingsScreen extends Component {

  static navigationOptions = ({ navigation, screenProps }) => ({
    header: null
  });

  constructor(props) {
    super(props);
    const { listings } = this.props;
    this.state =  {
      loading: true,
      dataSource: listings,
      dataSourceProcessed: this.orderBy(listings, "price_asc"),
      priceRangeSelected: [0, 1000],
      priceRangeSelectedBefore: [0, 1000],
      filterOrderBy: "price_asc",
      filterOrderByBefore: "price_asc",
      modalFilterVisible: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { filterOrderBy } = this.state;
    const { listings } = nextProps;
    this.setState({
      dataSource: listings,
      dataSourceProcessed: this.orderBy(listings, filterOrderBy),
    });
    if (listings && listings.length > 0){
      this.setState({loading: false});
    }
  }
  
  componentDidMount() {
    this.props.fetchListings(); 
    const { listings } = this.props;
    if (listings && listings.length > 0){
      this.setState({loading: false});
    }
  }

  applyFiltersToData() {
    const { priceRangeSelected, dataSource, filterOrderBy } = this.state;
    data = dataSource.filter((item) => {
      if (item.pricePerMonth > priceRangeSelected[0] && item.pricePerMonth < priceRangeSelected[1]){
        return item;
      }
    });
    this.setState({ dataSourceProcessed: this.orderBy(data, filterOrderBy) });
  }

  orderBy(data, order) {
    if (data && data.length > 0){
      if (order == "price_asc"){
        return data.sort((a, b) => a.pricePerMonth > b.pricePerMonth);
      } else if (order == "price_desc") {
        return data.sort((a, b) => a.pricePerMonth < b.pricePerMonth);
      } else {
        return data;
      }
    } else {
      return data;
    }
  }

  render() {

    const { 
      filterOrderBy, 
      filterOrderByBefore, 
      loading, 
      priceRangeSelected, 
      priceRangeSelectedBefore, 
      dataSourceProcessed 
    } = this.state;

    const numberOfResults = dataSourceProcessed.length;

    // All this logic could be in "Redux" but in 3 days it's to hard to do all ... u.u
    const onPressOpenFilter = () => {
      this.setState({priceRangeSelectedBefore: priceRangeSelected, filterOrderByBefore: filterOrderBy});
      this.setState({modalFilterVisible: true});
    };

    const onPressCloseFilter = () => {
      this.setState({priceRangeSelected: priceRangeSelectedBefore, filterOrderBy: filterOrderByBefore}, ()=>{
        this.applyFiltersToData();
      });
      this.setState({modalFilterVisible: false});
    }

    const onPressApplyFilter = () => {
      this.setState({modalFilterVisible: false});
      this.applyFiltersToData();
      // We need to wait the reorganization of the items for scrolling to top
      setTimeout(()=>{
        this.refs.listingsList.scrollToOffset({ offset: 0, animated: true });
      }, 100);
    };

    const onPressResetFilter = () => {
      this.setState({filterOrderBy: "price_asc", priceRangeSelected: [0, 1000]});
    }

    const onPressChangeOrder = (order) => {  
      this.setState({filterOrderBy: order});
    }

    const onPriceRangeChange = (priceRangeSelected) => {
      this.setState({priceRangeSelected}, ()=>{
        this.applyFiltersToData();
      });       
    }

    const onPressSeeListingDetails = (rowData) => {
      this.props.navigation.navigate({
        key: "ListingDetailsScreen", 
        routeName: "ListingDetailsScreen", 
        params: {listingData: rowData}
      });
    }

    const renderRow = (rowData) => {
      return (
        <ListingsListItem rowData={rowData} onPress={()=>{onPressSeeListingDetails(rowData)}} />
      );
    }

    return (
      <MainContainer loading={loading} >

        <ListingsModalFilters 
          visible={this.state.modalFilterVisible} 
          priceRangeSelected={priceRangeSelected}
          numberOfResults={numberOfResults}
          onPressCloseFilter={onPressCloseFilter}
          onPressResetFilter={onPressResetFilter}
          onPressApplyFilter={onPressApplyFilter}
          onPressChangeOrder={onPressChangeOrder}
          onPriceRangeChange={onPriceRangeChange}
          filterOrderBy={filterOrderBy}
        />

        <Topbar 
          center={
            <Image uri="logo" />
          } 
          right={
            <Button type="icon" icon="ios-options" size={24} onPress={onPressOpenFilter} />
          } 
        />

        <View style={styles.listings_list_content}>
          <FlatList
            ref="listingsList"
            data={this.state.dataSourceProcessed}
            renderItem={renderRow}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.listings_list_inner_list}
          />
        </View>

      </MainContainer>
    );

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListingsScreen);
