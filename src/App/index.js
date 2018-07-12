import { createStackNavigator } from 'react-navigation';

import Splash from '../scenes/Splash';

const routesConfig = {
  Splash: {
    screen: Splash,
  },
};

const navigatorOptions = {
  headerMode: 'none',
  navigationOptions: {
    header: null,
  },
};

export default createStackNavigator(
  routesConfig,
  {
    ...navigatorOptions,
    initialRouteName: 'Splash',
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
);
