import React from 'react';
import {View, Text, Picker} from 'react-native';
import Input from '../../../Components/Input';
import {Button} from 'react-native-paper';
import {connect} from 'react-redux';

const EmployeeDetails = props => {
  const {name, phone, shift} = props;
  return (
    <View>
      <Text>
        EmployeeDetails
        {name}
        {phone}
        {shift}
      </Text>
    </View>
  );
};
// const styles = StyleSheet.create({

// });

const mapStateToProps = state => ({
  name: state.createEmployee.name,
  phone: state.createEmployee.phone,
  shift: state.createEmployee.shift,
});
export default connect(mapStateToProps, null)(EmployeeDetails);
