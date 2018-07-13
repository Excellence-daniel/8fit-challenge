import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';
import PropTypes from 'prop-types';

import colors from '../../config/colors';
import styles from './styles';

export default class CustomInput extends PureComponent {
  static propTypes = {
    error: PropTypes.bool,
    label: PropTypes.string,
    errorMessage: PropTypes.string,
    maxLength: PropTypes.number,
    onChangeText: PropTypes.func,
    value: PropTypes.string,
  };

  static defaultProps = {
    error: false,
    label: '',
    errorMessage: '',
    maxLength: 3,
    onChangeText: () => {},
    value: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      edited: false,
    };
  }

  onChangeText = (text) => {
    const { onChangeText } = this.props;
    const { edited } = this.state;
    if (!edited) {
      this.setState({
        edited: true,
      });
    }
    onChangeText(text);
  };

  getInputContainerStyle = () => {
    const { edited } = this.state;
    const { error } = this.props;
    if (!edited) {
      return {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: colors.borderColor,
      };
    } else if (error) {
      return {
        borderBottomWidth: 1,
        borderColor: colors.red,
      };
    }
    return {
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderColor: colors.borderColor,
    };
  };

  render() {
    const {
      errorMessage,
      label,
      maxLength,
      error,
      value,
    } = this.props;
    const { edited } = this.state;
    const extraStyle = this.getInputContainerStyle();
    return (
      <View
        style={[
          styles.container,
          extraStyle,
        ]}
      >
        <View style={{ height: 20 }}>
          {
            ((edited && error) || (!edited && error))
            ?
              <Text style={styles.errorText}>
                {errorMessage}
              </Text>
              :
              null
          }
        </View>
        <View style={styles.inputContainer}>
          <View style={{ flex: 1 }}>
            <TextInput
              autoCorrect={false}
              autoFocus
              keyboardType="numeric"
              maxLength={maxLength}
              underlineColorAndroid="transparent"
              onChangeText={this.onChangeText}
              value={value}
              style={[
                styles.input,
                {
                  textAlign: label ? 'right' : 'center',
                },
              ]}
            />
          </View>
          {
            label
            ?
              <Text style={styles.label}>
                {label}
              </Text>
              :
              null
          }
        </View>
      </View>
    );
  }
}
