import { StyleSheet } from 'react-native';

import fonts from '../../config/fonts';
import colors from '../../config/colors';

export default StyleSheet.create({
  summaryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionText: {
    flex: 1,
    fontSize: 20,
    color: colors.textPrimary,
    fontFamily: fonts.medium,
    textAlign: 'right',
  },
  selectionText: {
    flex: 1,
    fontSize: 18,
    color: colors.textPrimary,
    fontFamily: fonts.light,
    marginLeft: 10,
  },
});
