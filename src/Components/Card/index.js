import React from 'react';
import {View, StyleSheet} from 'react-native';

// import {Card} from 'react-native-paper';

const Card = ({Children}) => {
  return <View style={styles.card}>{Children}</View>;
};

const CardSection = ({children}) => {
  return <View style={styles.cardSection}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    elevation: 4,
    borderBottomColor: 'blue',
    borderRadius: 20,
    borderBottomWidth: 2,
  },
  cardSection: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    borderColor: '#ddd',
  },
});
export {Card, CardSection};
