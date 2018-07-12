import React, { PureComponent } from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';

import { backgroundGrain } from '../../config/images';

import styles from './styles';

export default class Splash extends PureComponent {
  static propTypes = {
    still: PropTypes.bool,
  };

  static defaultProps = {
    still: false,
  };

  componentDidMount() {
    // if still is not set, animate to onboarding screen
    const { still } = this.props;
  }

  render() {
    return (
      <Image
        source={backgroundGrain}
        style={styles.containerImage}
      >

      </Image>
    );
  }
}
