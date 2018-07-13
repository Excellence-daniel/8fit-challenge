import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import CustomButton from '../CustomButton';

import styles from './styles';

const ButtonView = ({
  label,
  onPress,
  disabled,
}) => (
  <View style={styles.container}>
    <CustomButton
      label={label}
      onPress={onPress}
      disabled={disabled}
    />
  </View>
);

ButtonView.propTypes = {
  label: PropTypes.string,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
};

ButtonView.defaultProps = {
  label: '',
  onPress: () => {},
  disabled: false,
};

export default ButtonView;
