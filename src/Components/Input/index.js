import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {View, Text} from 'react-native';
const Input = ({value, onChangeText, placeholder, label}) => {
  return (
    <TextInput
      style={styles.container}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      autoCapitalize="none"
      autoCorrect={false}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    // height: 20,
    // width: 200,
    // borderBottomWidth: 2,
    // borderBottomColor: 'green',
    padding: 10,
  },
});

export default Input;
