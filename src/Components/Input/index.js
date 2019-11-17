import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Input = ({value, onChangeText, placeholder}) => {
  return (
    <TextInput
      style={styles.container}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      autoCapitalize={false}
      autoCorrect={false}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    // height: 20,
    // width: 200,
    borderBottomWidth: 2,
    // borderBottomColor: 'green',
    padding: 10,
  },
});

export default Input;
