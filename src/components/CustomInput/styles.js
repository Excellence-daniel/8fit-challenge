import { StyleSheet } from 'react-native';

import { DeviceWidth } from '../../config/scale';
import fonts from '../../config/fonts';
import colors from '../../config/colors';

export default StyleSheet.create({
  container: {
    marginLeft: 15,
    marginRight: 15,
    paddingBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 40,
  },
  errorText: {
    fontFamily: fonts.light,
    fontSize: 14,
    color: colors.red,
    marginTop: 5,
    textAlign: 'center',
  },
  label: {
    fontFamily: fonts.regular,
    fontSize: 16,
    color: colors.borderColor,
    textAlign: 'left',
    flex: 1,
    marginLeft: 15,
    paddingBottom: 10,
  },
  input: {
    fontFamily: fonts.bold,
    fontSize: 32,
    color: colors.textPrimary,
    padding: 0,
    paddingRight: 10,
    height: 50,
  },
});
