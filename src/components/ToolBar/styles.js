import { StyleSheet } from 'react-native';

import colors from '../../config/colors';

export default StyleSheet.create({
  upperView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 50,
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.borderColor,
  },
  progressBar: {
    backgroundColor: colors.progressBar,
    height: 3,
  },
});
