import React, {useEffect} from 'react';
import {View, Text, Picker} from 'react-native';
import Input from '../../../Components/Input';
import {Button} from 'react-native-paper';
import {connect} from 'react-redux';
import {fetch_employees} from './actions';

const EmployeeDetails = props => {
  const {name, phone, shift, fetch_employees, employees} = props;
  useEffect(() => {
    fetch_employees();
  }, [fetch_employees]);
  return (
    <View>
      <Text>
        EmployeeDetails
        {/* {name}
        {phone}
        {shift} */}
      </Text>
    </View>
  );
};
// const styles = StyleSheet.create({

// });

const mapStateToProps = state => ({
  // name: state.createEmployee.name,
  // phone: state.createEmployee.phone,
  // shift: state.createEmployee.shift,
  employees: state.employees || 'jyoti',
});
export default connect(mapStateToProps, {fetch_employees})(EmployeeDetails);
