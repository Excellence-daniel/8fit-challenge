import React, { PureComponent } from 'react';
import {
  ImageBackground,
  View,
  Image,
  Text,
  FlatList,
  BackHandler,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Transition } from 'react-navigation-fluid-transitions';

import AnimatedView from '../../components/AnimatedView';
import GoalItem from '../../components/GoalItem';
import HeaderLabel from '../../components/HeaderLabel';

import { selectFitnessGoal } from '../../actions/onboarding';
import fitnessGoals from '../../fixtures/fitness_goal.json';
import {
  backgroundGrain,
  icon8Logo,
  imgBeans,
  imgDumbbell,
  imgMat,
} from '../../config/images';
import styles from './styles';

class Onboarding extends PureComponent {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  componentDidMount() {
    // disbale back press
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    // remove listener
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  onGoalSelect = (goal) => {
    // save selected goal to redux store
    const { dispatch, navigation } = this.props;
    dispatch(selectFitnessGoal(goal.key));
    // navigate to age section
    navigation.navigate('AgeEntry');
  };

  handleBackPress = () => true;

  render() {
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
          <AnimatedView>
            <Text style={styles.welcome}>
              WELCOME TO 8FIT
            </Text>
          </AnimatedView>
          <AnimatedView>
            <HeaderLabel
              label={"What's your goal?"}
            />
          </AnimatedView>
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
                  delay={((rowData.index + 1) * 100) + 600}
                />
              )
            }
          />
        </View>
      </ImageBackground>
    );
  }
}

export default connect()(Onboarding);
