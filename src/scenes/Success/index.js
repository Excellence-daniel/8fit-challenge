import React, { PureComponent } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';

import Container from '../../components/Container';
import ToolBar from '../../components/ToolBar';
import HeaderLabel from '../../components/HeaderLabel';
import ButtonView from '../../components/ButtonView';
import SummaryItem from '../../components/SummaryItem';

import fitnessGoals from '../../fixtures/fitness_goal.json';
import styles from './styles';

class Success extends PureComponent {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    fitnessGoal: PropTypes.string.isRequired,
    age: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]).isRequired,
    heightMetric: PropTypes.string.isRequired,
    heightCM: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]).isRequired,
    heightFt: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]).isRequired,
    heightIn: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]).isRequired,
  };

  getHeightText = () => {
    const {
      heightMetric,
      heightCM,
      heightFt,
      heightIn,
    } = this.props;
    switch (heightMetric) {
      case 'CM':
        return `${heightCM} Cm`;
      case 'FT':
        return `${heightFt} Ft, ${heightIn} In`;
      default:
        return '';
    }
  };

  finish = () => {
    const { navigation } = this.props;
    navigation.navigate('Fluid');
  };

  goBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  render() {
    const { fitnessGoal, age } = this.props;
    const goal = _.find(fitnessGoals.fitness_goals, sGoal => (
      sGoal.key === fitnessGoal
    ));
    return (
      <Container>
        <ToolBar
          onBackPress={this.goBack}
          level={3}
        />
        <View style={styles.summaryContainer}>
          <HeaderLabel
            label="Success"
            style={styles.text}
          />
        </View>
        <View style={styles.summaryContainer}>
          <SummaryItem
            section="Fitness Goal"
            selection={goal.title}
          />
          <SummaryItem
            section="Age"
            selection={String(age)}
          />
          <SummaryItem
            section="Height"
            selection={this.getHeightText()}
          />
        </View>
        <ButtonView
          label="Finish"
          onPress={this.finish}
        />
      </Container>
    );
  }
}

const mapStateToProps = ({
  Onboarding: {
    fitnessGoal,
    age,
    heightMetric,
    heightCM,
    heightFt,
    heightIn,
  },
}) => ({
  fitnessGoal,
  age,
  heightMetric,
  heightCM,
  heightFt,
  heightIn,
});

export default connect(mapStateToProps)(Success);
