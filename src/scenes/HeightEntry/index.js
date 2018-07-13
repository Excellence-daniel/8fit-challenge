import React, { PureComponent } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
    heightCM: PropTypes.number,
    heightFt: PropTypes.number,
    heightIn: PropTypes.number,
  };

  static defaultProps = {
    heightCM: 0,
    heightFt: 0,
    heightIn: 0,
  };

  onChangeText = (value, identifier) => {
    const {
      dispatch,
      heightIn,
      heightFt,
    } = this.props;
    const sanitizedNumber = Number(value);
    if (isNaN(sanitizedNumber)) {
      return;
    }

    // process based on heightMetric value
    switch (identifier) {
      case 'CM':
        if (sanitizedNumber < 125 || sanitizedNumber > 301) {
          // update height, setting others to zero
          dispatch(updateHeight({
            heightCM: sanitizedNumber,
            heightFt: 0,
            heightIn: 0,
          }));
        } else {
          // convert from cm to ft
          const convertedHeight = cmToFeet(sanitizedNumber);
          dispatch(updateHeight({
            heightCM: sanitizedNumber,
            heightFt: convertedHeight.feet,
            heightIn: convertedHeight.inches,
          }));
        }
        break;
      case 'FT':
        if ((sanitizedNumber < 4 || sanitizedNumber > 9)) {
          dispatch(updateHeight({
            heightCM: 0,
            heightFt: sanitizedNumber,
          }));
        } else if (heightIn < 0 || heightIn > 11) {
          dispatch(updateHeight({
            heightCM: 0,
            heightFt: sanitizedNumber,
          }));
        } else {
          // convert to cm
          const convertedHeight = ftToCM(sanitizedNumber, heightIn);
          dispatch(updateHeight({
            heightCM: convertedHeight,
            heightFt: sanitizedNumber,
          }));
        }
        break;
      case 'IN':
        if ((sanitizedNumber < 0 || sanitizedNumber > 11)) {
          dispatch(updateHeight({
            heightCM: 0,
            heightIn: sanitizedNumber,
          }));
        } else if (heightFt < 4 || heightFt > 9) {
          dispatch(updateHeight({
            heightCM: 0,
            heightIn: sanitizedNumber,
          }));
        } else {
          // convert to cm
          const convertedHeight = ftToCM(heightFt, sanitizedNumber);
          dispatch(updateHeight({
            heightCM: convertedHeight,
            heightIn: sanitizedNumber,
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
    if (heightMetric === 'CM') {
      return [{
        error: (heightCM < 125 && heightCM > 0) || heightCM > 301,
        maxLength: 3,
        value: heightCM ? String(heightCM) : '',
        label: 'Cm',
        identifier: 'CM',
      }];
    }
    return [{
      error: (heightFt < 4 && heightFt > 0) || heightFt > 9,
      maxLength: 1,
      value: heightFt ? String(heightFt) : '',
      label: 'Ft',
      identifier: 'FT',
    }, {
      error: heightIn > 11 || heightIn < 0,
      maxLength: 2,
      value: heightIn ? String(heightIn) : '',
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
