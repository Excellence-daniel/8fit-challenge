import React, { PureComponent } from 'react';
import {
  ImageBackground,
  View,
  Image,
  Text,
  FlatList,
  Animated,
  Easing,
} from 'react-native';
import PropTypes from 'prop-types';
import { Transition } from 'react-navigation-fluid-transitions';

import GoalItem from '../../components/GoalItem';

import {
  getProgress,
  getOpacity,
} from '../../lib/util';
// import firness goals
import fitnessGoals from '../../fixtures/fitness_goal.json';
// images
import {
  backgroundGrain,
  icon8Logo,
  imgBeans,
  imgDumbbell,
  imgMat,
} from '../../config/images';
import styles from './styles';

export default class Onboarding extends PureComponent {
  static propTypes = {
    navigation: PropTypes.object,
  };

  constructor() {
    super();
    this.slideValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.slideUp();
  }

  onGoalSelect = (goal) => {
    console.log('Goal: ', goal);
  };

  getAnimationStyle = () => {
    const progress = getProgress(this.slideValue);
    const opacity = getOpacity(this.slideValue);
    return {
      opacity,
      transform: [
        { translateY: progress },
      ],
    };
  };

  slideUp = () => {
    this.slideValue.setValue(0);
    Animated.timing(
      this.slideValue,
      {
        toValue: 1,
        duration: 700,
        delay: 700,
      },
    ).start();
  }

  render() {
    const animationStyle = this.getAnimationStyle();
    return (
      <ImageBackground
        source={backgroundGrain}
        style={styles.containerImage}
      >
        <Transition delay appear="left">
          <Image
            source={imgBeans}
            style={styles.imageBeans}
          />
        </Transition>
        <Transition appear="right">
          <Image
            source={imgMat}
            style={styles.imgMat}
          />
        </Transition>
        <Transition appear="right">
          <Image
            source={imgDumbbell}
            style={styles.imgDumbbell}
          />
        </Transition>
        <View style={styles.topView}>
          <Transition shared="logo">
            <Image
              source={icon8Logo}
              style={styles.logo}
            />
          </Transition>
          <Animated.Text
            style={[
              styles.welcome,
              animationStyle,
            ]}
          >
            WELCOME TO 8FIT
          </Animated.Text>
          <Animated.Text
            style={[
              styles.goal,
              animationStyle,
            ]}
          >
            What's your goal?
          </Animated.Text>
        </View>
        <View style={styles.bottomView}>
          <FlatList
            scrollEnabled={false}
            data={fitnessGoals.fitness_goals}
            keyExtractor={item => item.key}
            renderItem={
              rowData => (
                <GoalItem
                  item={rowData.item}
                  onPress={this.onGoalSelect}
                  animatedStyle={animationStyle}
                />
              )
            }
          />
        </View>
      </ImageBackground>
    );
  }
}
