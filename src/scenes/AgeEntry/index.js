import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Container from '../../components/Container';
import ToolBar from '../../components/ToolBar';
import HeaderLabel from '../../components/HeaderLabel';
import CustomInput from '../../components/CustomInput';
import ButtonView from '../../components/ButtonView';
import KeyboardHandler from '../../components/KeyboardHandler';

import { updateAge } from '../../actions/onboarding';

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

  continue = () => {
    const { navigation } = this.props;
    navigation.navigate('HeightEntry');
  };

  goBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  render() {
    const { age } = this.props;
    return (
      <Container>
        <ToolBar
          onBackPress={this.goBack}
          level={2}
        />
        <HeaderLabel
          label="How old are you?"
        />
        <CustomInput
          controls={[{
            maxLength: 3,
            value: age ? String(age) : '',
            identifier: 'age',
            error: age < 13 && age > 0,
          }]}
          errorMessage="You must be 13 years or older"
          onChangeText={this.onChangeText}
        />
        <ButtonView
          label="Continue"
          disabled={age < 13}
          onPress={this.continue}
        />
        <KeyboardHandler />
      </Container>
    );
  }
}

const mapStateToProps = ({
  Onboarding: { age },
}) => ({
  age,
});

export default connect(mapStateToProps)(AgeEntry);
