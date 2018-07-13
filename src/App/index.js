import { createStackNavigator } from 'react-navigation';
import { Animated, Easing } from 'react-native';
import { FluidNavigator } from 'react-navigation-fluid-transitions';

import Splash from '../scenes/Splash';
import Onboarding from '../scenes/Onboarding';
import AgeEntry from '../scenes/AgeEntry';
import HeightEntry from '../scenes/HeightEntry';
import Success from '../scenes/Success';

const navigatorOptions = {
  headerMode: 'none',
  navigationOptions: {
    header: null,
  },
};

const transitionConfig = {
  timing: Animated.timing,
  easing: Easing.easing,
};

const Fluid = FluidNavigator(
  {
    Splash: {
      screen: Splash,
    },
    Onboarding: {
      screen: Onboarding,
    },
  },
  {
    ...navigatorOptions,
    initialRouteName: 'Splash',
    navigationOptions: {
      gesturesEnabled: false,
    },
    transitionConfig,
  },
);

export default createStackNavigator(
  {
    Fluid: {
      screen: Fluid,
    },
    AgeEntry: {
      screen: AgeEntry,
    },
    HeightEntry: {
      screen: HeightEntry,
    },
    Success: {
      screen: Success,
    },
  },
  {
    ...navigatorOptions,
    initialRouteName: 'Fluid',
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
);
