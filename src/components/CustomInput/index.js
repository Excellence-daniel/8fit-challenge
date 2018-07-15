import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';
import PropTypes from 'prop-types';
import _ from 'lodash';

import colors from '../../config/colors';
import styles from './styles';

export default class CustomInput extends PureComponent {
  static propTypes = {
    errorMessage: PropTypes.string,
    onChangeText: PropTypes.func,
    controls: PropTypes.array.isRequired,
  };

  static defaultProps = {
    errorMessage: '',
    onChangeText: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {
      edited: {},
    };
  }

  onChangeText = (value, identifier) => {
    const { onChangeText } = this.props;
    const { edited } = this.state;
    if (!edited[identifier]) {
      const newEdited = _.cloneDeep(edited);
      newEdited[identifier] = true;
      this.setState({
        edited: newEdited,
      });
    }
    onChangeText(value, identifier);
  };

  getInputContainerStyle = (identifier, error) => {
    const { edited } = this.state;
    if (!edited[identifier]) {
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

  errorStatus = () => {
    const { controls } = this.props;
    const { edited } = this.state;
    let error = false;
    let isEdited = false;
    _.each(controls, (control) => {
      if (control.error) {
        error = true;
      }
      if (edited[control.identifier]) {
        isEdited = true;
      }
    });
    return isEdited && error;
  };

  render() {
    const {
      errorMessage,
      controls,
    } = this.props;
    const errorStatus = !!this.errorStatus();
    return (
      <View style={styles.container}>
        <View style={{ height: 20 }}>
          {
            errorStatus
            ?
              <Text style={styles.errorText}>
                {errorMessage}
              </Text>
              :
              null
          }
        </View>
        <View style={styles.mainInputContainer}>
          {
            _.map(controls, (control, index) => {
              const firstInputMarginStyle = controls.length > 1 && index === 0 ? {
                marginRight: 20,
              } : {};
              return (
                <View
                  key={control.identifier}
                  style={[
                    styles.inputContainer,
                    { ...firstInputMarginStyle },
                    this.getInputContainerStyle(control.identifier, control.error),
                  ]}
                >
                  <View style={{ flex: 5 }}>
                    <TextInput
                      autoCorrect={false}
                      autoFocus
                      keyboardType="numeric"
                      maxLength={control.maxLength || 3}
                      underlineColorAndroid="transparent"
                      onChangeText={(value) => {
                        this.onChangeText(value, control.identifier);
                      }}
                      value={control.value}
                      style={[
                        styles.input,
                        {
                          textAlign: control.label ? 'right' : 'center',
                        },
                      ]}
                    />
                  </View>
                  {
                    control.label
                    ?
                      <Text style={styles.label}>
                        {control.label}
                      </Text>
                      :
                      null
                  }
                </View>
              );
            })
          }
        </View>
      </View>
    );
  }
}
