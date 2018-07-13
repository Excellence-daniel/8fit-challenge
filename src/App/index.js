// import { createStackNavigator } from 'react-navigation';
import { Animated, Easing } from 'react-native';
import { FluidNavigator } from 'react-navigation-fluid-transitions';

import Splash from '../scenes/Splash';
import Onboarding from '../scenes/Onboarding';
import AgeEntry from '../scenes/AgeEntry';

const routesConfig = {
  Splash: {
    screen: Splash,
  },
  Onboarding: {
    screen: Onboarding,
  },
  AgeEntry: {
    screen: AgeEntry,
  },
};

const navigatorOptions = {
  headerMode: 'none',
  navigationOptions: {
    header: null,
  },
};

const transitionConfig = {
  // duration: 1500,
  timing: Animated.timing,
  easing: Easing.easing,
};

export default FluidNavigator(
  routesConfig,
  {
    ...navigatorOptions,
    initialRouteName: 'Splash',
    navigationOptions: {
      gesturesEnabled: false,
    },
    transitionConfig,
  },
);
