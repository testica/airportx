import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text, Modal, Dimensions } from 'react-native'
import MultiSlider from '@ptomasroos/react-native-multi-slider';

import Button from '../components/button';
import Topbar from './topbar';
import B from './b';
import Image from './image';
import TwoButtonsSwitch from './two-buttons-switch';
import styles from '../constants/global-styles';

export default class ListingsModalFilters extends React.Component {

  static propTypes = {
    visible: PropTypes.bool,
    onPressCloseFilter: PropTypes.func,
    onPressResetFilter: PropTypes.func,
    onPressApplyFilter: PropTypes.func,
    onPressChangeOrder: PropTypes.func,
    onPriceRangeChange: PropTypes.func,
    priceRangeSelected: PropTypes.array,
    numberOfResults: PropTypes.number,
    filterOrderBy: PropTypes.string,
	};
	
  render() {

    const { 
      onPriceRangeChange, 
      filterOrderBy, 
      numberOfResults, 
      priceRangeSelected, 
      visible, 
      onPressCloseFilter, 
      onPressResetFilter, 
      onPressApplyFilter, 
      onPressChangeOrder 
    } = this.props;

    const filterPriceSliderWidth = Dimensions.get('window').width - 40;

    const customMarker = () => {
      return (
        <View style={styles.slider_marker}></View>
      );
    };

    return (
      <Modal transparent={false} animationType="slide" visible={visible}>
        <View style={styles.fullscreen_modal_container}>
          
          <Topbar 
            left={
              <Button 
                type="icon" 
                icon="ios-arrow-back" 
                size={24} 
                onPress={onPressCloseFilter} 
              />
            }
            center={
              <Text style={styles.listings_filter_title}>
                <B>{numberOfResults}</B> resultados en Madrid
              </Text>
            } 
            right={
              <Button 
                style={styles.topbar_side_secondary_button_right} 
                type="secondary" 
                text="Reiniciar" 
                onPress={onPressResetFilter} 
              />
            } 
          />

          <View style={styles.listings_filter_container}>

            <Text style={styles.generic_text}>Precio por mes {priceRangeSelected[0]}€ - {priceRangeSelected[1]}€</Text>
            
            <View style={styles.listings_filter_price_container}>
              <MultiSlider
                values={[priceRangeSelected[0], priceRangeSelected[1]]}
                sliderLength={filterPriceSliderWidth}
                onValuesChange={(priceRangeSelected)=>{onPriceRangeChange(priceRangeSelected)}}
                min={0}
                max={1000}
                step={50}
                snapped
                selectedStyle={styles.slider_track_selected}
                unselectedStyle={styles.slider_track_unselected}
                trackStyle={styles.slider_track}
                customMarker={customMarker}
              />
            </View>

            <Text style={styles.generic_text}>Ordenar por</Text>

            <TwoButtonsSwitch 
              filterOrderBy={filterOrderBy} 
              textA="Más barato primero" 
              textB="Más caro primero" 
              onPressA={(value)=>{onPressChangeOrder("price_asc")}} 
              onPressB={(value)=>{onPressChangeOrder("price_desc")}} 
            />

          </View>

          <View style={styles.bottom_button_container}> 
            <Button 
              text={`Aplicar y ver los ${numberOfResults} resultados`} 
              onPress={onPressApplyFilter} 
            />  
          </View> 

        </View>  
      </Modal>
    );

  }
   
} 