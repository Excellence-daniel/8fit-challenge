import { Dimensions } from 'react-native';

const {
  height: deviceHeight,
  width: deviceWidth,
} = Dimensions.get('window');

export const DeviceHeight = deviceHeight;
export const DeviceWidth = deviceWidth;
