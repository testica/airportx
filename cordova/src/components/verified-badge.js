import React, { Component } from 'react';
import { Text, View } from 'react-native';

import B from './b';

import styles from '../constants/components/verified-badge-styles';

class VerifiedBadge extends Component {
  render() {
    const { runnerName } = this.props;
    return (
      <View style={styles.badge}>
        <Text style={styles.badge_text}>Verificado por <B>{runnerName}</B></Text>
      </View>
    );
  }
}

export default VerifiedBadge;
