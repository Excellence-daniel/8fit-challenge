import React, { PureComponent } from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ToolBar from '../../components/ToolBar';
import HeaderLabel from '../../components/HeaderLabel';
import CustomInput from '../../components/CustomInput';
import ButtonView from '../../components/ButtonView';
import KeyboardHandler from '../../components/KeyboardHandler';

import { updateAge } from '../../actions/onboarding';

import styles from './styles';

class AgeEntry extends PureComponent {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    age: PropTypes.number,
  };

  static defaultProps = {
    age: 0,
  };

  onChangeText = (value) => {
    const { dispatch } = this.props;
    const sanitizedNumber = Number(value);
    if (isNaN(sanitizedNumber) || sanitizedNumber > 120) {
      return;
    }
    // save new age in redux
    dispatch(updateAge(sanitizedNumber));
  };

  goBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  render() {
    const { age } = this.props;
    return (
      <ScrollView
        scrollEnabled={false}
        contentContainerStyle={styles.container}
      >
        <ToolBar
          onBackPress={this.goBack}
          level={2}
        />
        <HeaderLabel
          label="How old are you?"
        />
        <CustomInput
          error={age < 13 && age > 0}
          errorMessage="You must be 13 years or older"
          onChangeText={this.onChangeText}
          value={age ? String(age) : ''}
        />
        <ButtonView
          label="Continue"
          disabled={age < 13}
        />
        <KeyboardHandler />
      </ScrollView>
    );
  }
}

const mapStateToProps = ({
  Onboarding: { age },
}) => ({
  age,
});

export default connect(mapStateToProps)(AgeEntry);
