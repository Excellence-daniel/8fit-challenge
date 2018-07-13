import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import _ from 'lodash';

import createStyles from './styles';

const SwitchButton = ({
  size,
  items,
  selected,
  onPress,
}) => {
  const styles = createStyles({
    size,
  });
  return (
    <View style={styles.button}>
      {
        _.map(items, (item) => {
          const isActive = item.key === selected;
          return (
            <View
              style={{ flex: 1 }}
              key={item.key}
            >
              <TouchableOpacity
                onPress={() => {
                  onPress(item.key);
                }}
                disabled={isActive}
                style={isActive ? styles.selected : styles.normal}
              >
                <Text style={isActive ? styles.selectedText : styles.normalText}>
                  {item.label}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })
      }
    </View>
  );
};

SwitchButton.propTypes = {
  size: PropTypes.oneOf([
    'small',
    'medium',
    'large',
  ]),
  items: PropTypes.array.isRequired,
  selected: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

SwitchButton.defaultProps = {
  size: 'medium',
  onPress: () => { },
};

export default SwitchButton;
