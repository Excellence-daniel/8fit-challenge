import { StyleSheet } from 'react-native';

import colors from '../../config/colors';
import fonts from '../../config/fonts';

const getSize = (size) => {
  switch (size) {
    case 'small':
      return '35%';
    case 'medium':
      return '70%';
    case 'large':
      return '90%';
    default:
      return '70%';
  }
};

export default ({ size }) => {
  const buttonWidth = getSize(size);
  const button = {
    flexDirection: 'row',
    height: 45,
    width: buttonWidth,
    borderRadius: 22,
    marginTop: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.textPrimary,
    overflow: 'hidden',
  };

  return StyleSheet.create({
    button,
    selected: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.textPrimary,
    },
    normal: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.light,
    },
    selectedText: {
      fontFamily: fonts.medium,
      fontSize: 16,
      color: colors.light,
    },
    normalText: {
      fontFamily: fonts.medium,
      fontSize: 16,
      color: colors.textPrimary,
    },
  });
};
