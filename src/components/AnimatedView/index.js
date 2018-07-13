import React, { PureComponent } from 'react';
import { Animated, Easing } from 'react-native';
import PropTypes from 'prop-types';

import {
  getProgress,
  getOpacity,
} from '../../lib/util';

export default class AnimatedView extends PureComponent {
  static propTypes = {
    duration: PropTypes.number,
    delay: PropTypes.number,
    children: PropTypes.any.isRequired,
  };

  static defaultProps = {
    duration: 700,
    delay: 700,
  };

  constructor() {
    super();
    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.animate();
  }

  getAnimationStyle = () => {
    const progress = getProgress(this.animatedValue);
    const opacity = getOpacity(this.animatedValue);
    return {
      opacity,
      transform: [
        { translateY: progress },
      ],
    };
  };

  animate = () => {
    const { duration, delay } = this.props;
    this.animatedValue.setValue(0);
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration,
        delay,
        easing: Easing.ease,
        useNativeDriver: true,
      },
    ).start();
  }

  render() {
    const { children } = this.props;
    const animationStyle = this.getAnimationStyle();
    return (
      <Animated.View style={animationStyle}>
        {children}
      </Animated.View>
    );
  }
}
