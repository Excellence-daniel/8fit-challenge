import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import { Card } from 'react-native-paper';

import AnimatedView from '../../components/AnimatedView';

import { chevronRight } from '../../config/images';
import styles from './styles';

const GoalItem = ({
  item,
  onPress,
  delay,
}) => (
  <AnimatedView
    delay={delay}
    duration={500}
  >
    <Card
      style={styles.container}
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
  </AnimatedView>
);

GoalItem.propTypes = {
  item: PropTypes.object.isRequired,
  onPress: PropTypes.func,
  delay: PropTypes.number.isRequired,
};

GoalItem.defaultProps = {
  onPress: () => {},
};

export default GoalItem;
