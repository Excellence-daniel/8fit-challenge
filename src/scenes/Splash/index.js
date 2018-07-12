import React, { PureComponent } from 'react';
import {
  ImageBackground,
  Image,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';
import { Transition } from 'react-navigation-fluid-transitions';

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
      }, 500);
    }
  }

  render() {
    return (
      <ImageBackground
        source={backgroundGrain}
        style={styles.containerImage}
      >
        <Transition shared="logo">
          <Image
            source={icon8Logo}
            style={styles.logo}
          />
        </Transition>
        <ActivityIndicator
          size="small"
        />
      </ImageBackground>
    );
  }
}
