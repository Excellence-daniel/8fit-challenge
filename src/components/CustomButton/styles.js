import { StyleSheet } from 'react-native';

import colors from '../../config/colors';
import fonts from '../../config/fonts';

export default StyleSheet.create({
  button: {
    backgroundColor: colors.textPrimary,
    height: 60,
    width: '45%',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 30,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontFamily: fonts.medium,
    fontSize: 16,
    color: colors.light,
    textAlign: 'left',
  },
});
