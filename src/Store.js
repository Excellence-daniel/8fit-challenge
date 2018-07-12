import { AsyncStorage } from 'react-native';
import { createStore, compose } from 'redux';
import { persistStore, autoRehydrate, getStoredState } from 'redux-persist';

import reducers from './reducers';

const configureStore = (onComplete) => {
  const enhancers = [
    autoRehydrate(),
  ];

  const persistConfig = {
    storage: AsyncStorage,
  };

  getStoredState(persistConfig, (err, restoredState) => {
    const store = createStore(reducers, restoredState, compose(...enhancers));
    persistStore(store, persistConfig, () => onComplete(store));
  });
};

export default configureStore;
