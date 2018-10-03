import React from 'react';
import PropTypes from 'prop-types';
import FitImage from 'react-native-fit-image';
import { Image } from 'react-native';

import styles from '../constants/global-styles';

export default class ImageB extends React.Component {
	static propTypes = {
		uri: PropTypes.string
	};

  render() {
		const { uri, children } = this.props;
		if (uri == "logo"){
			return (
				<Image
					resizeMode="contain"
					style={styles.topbar_logo}
					source={require('../images/spotahome-logo.png')}
				/>
			);
		}
		return (
			<FitImage
				indicatorColor="white" 
				indicatorSize="large" 
				source={{ uri: uri }}
			>
				{children}
			</FitImage>
		) 
  } 
} 