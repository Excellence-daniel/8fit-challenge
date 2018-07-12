import { StyleSheet } from 'react-native';

import colors from '../../config/colors';
import fonts from '../../config/fonts';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    height: 100,
    marginBottom: 20,
    borderRadius: 5,
  },
  subContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: 20,
    color: colors.textPrimary,
    marginBottom: 5,
  },
  subTitle: {
    fontFamily: fonts.regular,
    fontSize: 16,
    color: colors.textPrimary,
  },
});
