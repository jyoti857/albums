import React, {useState} from 'react';
import {CardSection} from '../../../Components/Card';
import Input from '../../../Components/Input';
import {View} from 'react-native';
import {Button} from 'react-native-paper';

const EmployeeForm = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
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
      </CardSection>
      <Button>Submit</Button>
    </View>
  );
};

export default EmployeeForm;
