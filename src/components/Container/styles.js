import { StyleSheet, Platform } from 'react-native';

import colors from '../../config/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
});
