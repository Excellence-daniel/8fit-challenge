import React, { Component } from 'react';
import { View, Keyboard, LayoutAnimation } from 'react-native';
import _ from 'lodash';

class KeyboardHandler extends Component {
  constructor(props) {
    super(props);
    this.state = { keyboardHeight: 0 };
  }

  componentWillMount() {
    this.listeners = [
      Keyboard.addListener('keyboardWillShow', this.keyboardWillShow),
      Keyboard.addListener('keyboardWillHide', this.keyboardWillHide),
    ];
  }

  componentWillUnmount() {
    _.each(this.listeners, l => l.remove());
  }

  keyboardWillShow = (frames) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    if (!frames.endCoordinates) {
      return;
    }
    this.setState({ keyboardHeight: frames.endCoordinates.height });
  };

  keyboardWillHide = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ keyboardHeight: 0 });
  };

  render() {
    return (
      <View style={{ height: this.state.keyboardHeight }} />
    );
  }
}

export default KeyboardHandler;
