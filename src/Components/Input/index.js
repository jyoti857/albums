import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {View, Text} from 'react-native';
const Input = ({value, onChangeText, placeholder, label}) => {
  console.log('843&@*$*@8426842---> label', label);
  return (
    <View style={styles.container}>
      <Text style={styles.labelStyle}>{label}snfkn</Text>
      <TextInput
        style={styles.inputStyle}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  // container: {
  //   // height: 20,
  //   // width: 200,
  //   // borderBottomWidth: 2,
  //   // borderBottomColor: 'green',
  //   padding: 10,
  // },
  container: {
    // flex: 1,
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    marginTop: 30,
    // width: '100%',
    borderWidth: 1,
    borderRadius: 20,
    padding: 29,
    marginLeft: 20,
    marginRight: 20,
  },
  labelStyle: {
    // flex: 1,
    // fontSize: 18,
    // paddingLeft: 10,
  },
  inputStyle: {
    // flex: 2,
    fontSize: 18,
    lineHeight: 22,
    color: '#000',
    paddingLeft: 5,
    paddingRight: 5,
    height: 20,
    width: '100%',
    alignSelf: 'center',
  },
});

export default Input;
