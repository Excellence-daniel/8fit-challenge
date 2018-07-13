import { StyleSheet } from 'react-native';

import fonts from '../../config/fonts';
import colors from '../../config/colors';

export default StyleSheet.create({
  text: {
    fontFamily: fonts.bold,
    fontSize: 24,
    color: colors.textPrimary,
    marginTop: 20,
    textAlign: 'center',
  },
});
