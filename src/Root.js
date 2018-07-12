import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from './Store';

import App from './App';
import Splash from './scenes/Splash';

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
      return <Splash still />;
    }

    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
