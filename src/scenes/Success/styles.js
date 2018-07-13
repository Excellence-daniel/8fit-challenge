import { StyleSheet } from 'react-native';

import fonts from '../../config/fonts';
import colors from '../../config/colors';

export default StyleSheet.create({
  text: {
    fontSize: 38,
    color: colors.green,
    fontFamily: fonts.medium,
    marginBottom: 20,
  },
  summaryContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
