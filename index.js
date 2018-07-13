import { AppRegistry, Platform, StatusBar } from 'react-native';
import { name as appName } from './app.json';
import Root from './src/Root';

import colors from './src/config/colors';

// set android status bar to textPrimary color
if (Platform.OS === 'android') {
  StatusBar.setBackgroundColor(colors.textPrimary);
}
AppRegistry.registerComponent(appName, () => Root);
