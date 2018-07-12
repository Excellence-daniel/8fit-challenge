import { StyleSheet, Platform } from 'react-native';

import { DeviceHeight } from '../../config/scale';
import colors from '../../config/colors';
import fonts from '../../config/fonts';

export default StyleSheet.create({
  containerImage: {
    flex: 1,
    // resizeMode: 'cover',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
  logo: {
    marginBottom: 15,
    marginTop: 50,
    height: 44,
    width: 22,
  },
  topView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomView: {
    flex: 1,
    margin: 20,
  },

  // images
  imageBeans: {
    position: 'absolute',
    left: 0,
    bottom: DeviceHeight / 10,
  },
  imgMat: {
    position: 'absolute',
    right: -20,
    bottom: 10,
  },
  imgDumbbell: {
    position: 'absolute',
    right: 0,
    bottom: 20,
  },

  // text styles
  welcome: {
    fontFamily: fonts.medium,
    fontSize: 12,
    color: colors.textPrimary,
    marginBottom: 20,
  },
  goal: {
    fontFamily: fonts.bold,
    fontSize: 24,
    color: colors.textPrimary,
    marginBottom: 10,
  },
});
