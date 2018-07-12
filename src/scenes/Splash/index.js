import React, { PureComponent } from 'react';
import {
  ImageBackground,
  Image,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';

import {
  backgroundGrain,
  icon8Logo,
} from '../../config/images';

import styles from './styles';

export default class Splash extends PureComponent {
  static propTypes = {
    still: PropTypes.bool,
    navigation: PropTypes.object,
  };

  static defaultProps = {
    still: false,
    navigation: {},
  };

  componentDidMount() {
    const {
      still,
      navigation,
    } = this.props;
    // if still is not set, animate to onboarding screen
    if (!still) {
      setTimeout(() => {
        navigation.navigate('Onboarding');
      }, 1000);
    }
  }

  render() {
    return (
      <ImageBackground
        source={backgroundGrain}
        style={styles.containerImage}
      >
        <Image
          source={icon8Logo}
          style={styles.logo}
        />
        <ActivityIndicator
          size="small"
        />
      </ImageBackground>
    );
  }
}
