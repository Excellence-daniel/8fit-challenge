import { StyleSheet } from 'react-native';

import fonts from '../../config/fonts';
import colors from '../../config/colors';

export default StyleSheet.create({
  container: {
    marginLeft: 15,
    marginRight: 15,
    paddingBottom: 10,
  },
  mainInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 40,
    paddingBottom: 10,
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
    flex: 3,
    marginLeft: 10,
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
