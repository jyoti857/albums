import React, {useState} from 'react';
import {CardSection} from '../../../Components/Card';
import Input from '../../../Components/Input';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import firebase from 'firebase';

const EmployeeForm = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const onButtonPressed = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(userName, password)
      .then(() => navigation.navigate('Album'))
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(userName, password)
          .then(() => navigation.navigate('Album'))
          .catch(() => {
            setError('Authentication Failed!');
          });
      });
    // navigation.navigate('Album');
  };
  return (
    <View>
      <CardSection>
        <Input
          value={userName}
          onChangeText={setUserName}
          placeholder="User name"
        />
        <Input
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
        />
        {error ? <Text>{error}</Text> : null}
      </CardSection>
      <Button onPress={onButtonPressed}>Submit</Button>
    </View>
  );
};

export default EmployeeForm;
