import React, { Component } from 'react';
import { NativeModules } from 'react-native';
import { Provider } from 'react-redux';

import configureStore from './Store';

import App from './App';
// import Splash from './scenes/Splash';

// set experimental layout animation
if (NativeModules.UIManager.setLayoutAnimationEnabledExperimental) {
  NativeModules.UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      store: {},
    };
  }

  componentWillMount() {
    // configure store
    configureStore(store => this.setState({
      store,
      isLoading: false,
    }));
  }

  render() {
    const { store, isLoading } = this.state;

    if (isLoading) {
      return null;
    }

    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
