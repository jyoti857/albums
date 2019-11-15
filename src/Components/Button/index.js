import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Button_ = props => {
  const {title, onPress} = props;
  const {container} = styles;
  //   console.log('button title', title, typeof title);
  return (
    <View style={container}>
      <Button title={title} onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 10,
    paddingTop: 10,
    paddingHorizontal: 30,
    borderColor: 'blue',
    borderRadius: 20,
  },
});

export default Button_;
