import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import { Card } from 'react-native-paper';
import { Transition } from 'react-navigation-fluid-transitions';

// import { customTransitionFunction } from '../../lib/util';
import { chevronRight } from '../../config/images';
import styles from './styles';

const GoalItem = ({
  item,
  onPress,
  animatedStyle,
}) => (
  <View>
    <Card
      style={[
        styles.container,
        animatedStyle,
      ]}
      elevation={3}
      onPress={() => {
        onPress(item);
      }}
    >
      <View style={styles.subContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            {item.title}
          </Text>
          <Text style={styles.subTitle}>
            {item.subtitle}
          </Text>
        </View>
        <Image
          source={chevronRight}
        />
      </View>
    </Card>
  </View>
);

GoalItem.propTypes = {
  item: PropTypes.object.isRequired,
  onPress: PropTypes.func,
  animatedStyle: PropTypes.object,
};

GoalItem.defaultProps = {
  onPress: () => {},
  animatedStyle: {},
};

export default GoalItem;
