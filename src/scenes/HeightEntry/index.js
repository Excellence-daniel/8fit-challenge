import React, { PureComponent } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';

import Container from '../../components/Container';
import ToolBar from '../../components/ToolBar';
import HeaderLabel from '../../components/HeaderLabel';
import CustomInput from '../../components/CustomInput';
import ButtonView from '../../components/ButtonView';
import SwitchButton from '../../components/SwitchButton';
import KeyboardHandler from '../../components/KeyboardHandler';

import { 
  cmToFeet,
  ftToCM,
} from '../../lib/util';
import {
  updateHeight,
  switchHeightMetric,
} from '../../actions/onboarding';


import styles from './styles';

class HeightEntry extends PureComponent {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    heightMetric: PropTypes.string.isRequired,
    heightCM: PropTypes.string,
    heightFt: PropTypes.string,
    heightIn: PropTypes.string,
  };

  static defaultProps = {
    heightCM: '',
    heightFt: '',
    heightIn: '',
  };

  onChangeText = (value, identifier) => {
    const {
      dispatch,
      heightIn,
      heightFt,
    } = this.props;
    // const sanitizedNumber = Number(value);
    // const invalidNumber = isNaN(sanitizedNumber);
    const convertedNumber = Number(value);
    const invalidNumber = isNaN(convertedNumber);
    // process based on heightMetric value
    switch (identifier) {
      case 'CM':
        if (invalidNumber || convertedNumber < 125 || convertedNumber > 301) {
          // update height, setting others to zero
          dispatch(updateHeight({
            heightCM: value,
            heightFt: '',
            heightIn: '',
          }));
        } else {
          // convert from cm to ft
          const convertedHeight = cmToFeet(convertedNumber);
          dispatch(updateHeight({
            heightCM: value,
            heightFt: convertedHeight.feet,
            heightIn: convertedHeight.inches,
          }));
        }
        break;
      case 'FT':
        const heightInNum = Number(heightIn);
        if (invalidNumber || convertedNumber < 4 || convertedNumber > 9) {
          dispatch(updateHeight({
            heightCM: '',
            heightFt: value,
          }));
        } else if (heightInNum < 0 || heightIn > 11) {
          dispatch(updateHeight({
            heightCM: '',
            heightFt: value,
          }));
        } else {
          // convert to cm
          const convertedHeight = ftToCM(convertedNumber, heightInNum);
          dispatch(updateHeight({
            heightCM: convertedHeight,
            heightFt: value,
          }));
        }
        break;
      case 'IN':
        const heightFtNum = Number(heightFt);
        if (_.isEmpty(value) || invalidNumber || convertedNumber < 0 || convertedNumber > 11) {
          dispatch(updateHeight({
            heightCM: '',
            heightIn: value,
          }));
        } else if (heightFtNum < 4 || heightFtNum > 9) {
          dispatch(updateHeight({
            heightCM: '',
            heightIn: value,
          }));
        } else {
          // convert to cm
          const convertedHeight = ftToCM(heightFtNum, convertedNumber);
          dispatch(updateHeight({
            heightCM: convertedHeight,
            heightIn: value,
          }));
        }
        break;
      default:
        break;
    }
  };

  getControls = () => {
    const {
      heightMetric,
      heightCM,
      heightFt,
      heightIn,
    } = this.props;
    const heightCMNum = Number(heightCM);
    const heightFtMNum = Number(heightFt);
    const heightInNum = Number(heightIn);
    if (heightMetric === 'CM') {
      return [{
        error: isNaN(heightCM) || heightCMNum < 125 || heightCMNum > 301,
        maxLength: 3,
        value: heightCM,
        label: 'Cm',
        identifier: 'CM',
      }];
    }
    return [{
      error: isNaN(heightFtMNum) || heightFtMNum < 4 || heightFtMNum > 9,
      maxLength: 1,
      value: heightFt,
      label: 'Ft',
      identifier: 'FT',
    }, {
      error: isNaN(heightInNum) || heightInNum < 0 || heightInNum > 11,
      maxLength: 2,
      value: heightIn,
      label: 'In',
      identifier: 'IN',
    }];
  }

  continue = () => {
    const { navigation } = this.props;
    navigation.navigate('Success');
  };

  goBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  switchHeightMetric = (metric) => {
    const { dispatch } = this.props;
    dispatch(switchHeightMetric(metric));
  };

  render() {
    const {
      heightMetric,
      heightCM,
      heightFt,
      heightIn,
    } = this.props;
    const controls = this.getControls();
    const disabled = !heightCM || !heightFt || !heightIn;
    return (
      <Container>
        <ToolBar
          onBackPress={this.goBack}
          level={2}
        />
        <HeaderLabel
          label="How tall are you?"
        />
        <CustomInput
          controls={controls}
          errorMessage="Please enter a valid number"
          onChangeText={this.onChangeText}
        />
        <View style={styles.switchButtonContainer}>
          <SwitchButton
            size="medium"
            selected={heightMetric}
            onPress={this.switchHeightMetric}
            items={[{
              key: 'FT',
              label: 'FT',
            }, {
              key: 'CM',
              label: 'CM',
            }]}
          />
        </View>
        <ButtonView
          label="Continue"
          disabled={disabled}
          onPress={this.continue}
        />
        <KeyboardHandler />
      </Container>
    );
  }
}

const mapStateToProps = ({
  Onboarding: {
    heightMetric,
    heightCM,
    heightFt,
    heightIn,
  },
}) => ({
  heightMetric,
  heightCM,
  heightFt,
  heightIn,
});

export default connect(mapStateToProps)(HeightEntry);
