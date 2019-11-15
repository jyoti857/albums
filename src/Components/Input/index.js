import React, {useState} from 'react';
import {TextInput, View, Text} from 'react-native';

const Input = () => {
  const {text, setText} = useState('');
  return <TextInput value={text} onChangeText={newText => setText(newText)} />;
};

export default Input;
