import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const HeaderLabel = ({
  label,
  style,
}) => (
  <Text
    style={[
      styles.text,
      style,
    ]}
  >
    {label}
  </Text>    
);

HeaderLabel.propTypes = {
  label: PropTypes.string.isRequired,
  style: PropTypes.any,
};

HeaderLabel.defaultProps = {
  style: {},
};

export default HeaderLabel;

