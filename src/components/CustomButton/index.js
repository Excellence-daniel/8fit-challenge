import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';


import styles from './styles';

const CustomButton = ({
  label,
  style,
  textStyle,
  onPress,
  disabled,
}) => (
  <TouchableOpacity
    onPress={onPress}
    disabled={disabled}
    style={[
      styles.button,
      style,
      {
        opacity: disabled ? 0.5 : 1,
      },
    ]}
  >
    <Text
      style={[
        styles.label,
        textStyle,
      ]}
    >
      {label}
    </Text>
  </TouchableOpacity>
);

CustomButton.propTypes = {
  label: PropTypes.string.isRequired,
  style: PropTypes.any,
  textStyle: PropTypes.any,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
};

CustomButton.defaultProps = {
  style: {},
  onPress: () => {},
  textStyle: () => {},
  disabled: false,
};

export default CustomButton;
