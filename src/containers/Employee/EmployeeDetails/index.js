import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Input from '../../../Components/Input';

const EmployeeDetails = () => {
  const employeeDetails = 'Employee details';
  return (
    <View>
      <Text>{employeeDetails}</Text>
      <Input
        label="name"
        value=""
        onChangeText={() => {}}
        placeholder="placeholder"
      />
      <Input
        label="Phone"
        value="emio"
        onChangeText={() => {}}
        placeholder="placeholder"
      />
    </View>
  );
};

export default EmployeeDetails;
