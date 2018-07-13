import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const SummaryItem = ({
  section,
  selection,
}) => (
  <View style={styles.summaryContainer}>
    <Text style={styles.sectionText}>
      {section}:
    </Text>
    <Text style={styles.selectionText}>
      {selection}
    </Text>
  </View>
);

SummaryItem.propTypes = {
  section: PropTypes.string.isRequired,
  selection: PropTypes.string.isRequired,
};

export default SummaryItem;
