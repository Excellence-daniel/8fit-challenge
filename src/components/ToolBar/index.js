import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';

import { icArrowLeft } from '../../config/images';
import { DeviceWidth } from '../../config/scale';
import styles from './styles';

const ToolBar = ({
  onBackPress,
  level,
}) => {
  const progressBarWidth = DeviceWidth * (level / 3);
  return (
    <View>
      <View style={styles.upperView}>
        <TouchableOpacity onPress={onBackPress}>
          <Image
            source={icArrowLeft}
          />
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.progressBar,
          {
            width: progressBarWidth,
          }
        ]}
      />
    </View>
  );
};

ToolBar.propTypes = {
  onBackPress: PropTypes.func,
  level: PropTypes.number,
};

ToolBar.defaultProps = {
  onBackPress: () => {},
  level: 1,
};

export default ToolBar;

