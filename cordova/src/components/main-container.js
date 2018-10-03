import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, View } from 'react-native';

import styles from '../constants/components/main-container-styles';
const colors = require('../constants/colors');

class MainContainer extends Component {
  static propTypes = {
    loading: PropTypes.bool
  };

  render() {
    const { loading, children } = this.props;
    if (loading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator color={colors.main} size={'large'} />
        </View>
      );
    } else {
      return (
        <View style={styles.main_container}>
          {children}
        </View>
      );
    }
  }
}

export default MainContainer;
