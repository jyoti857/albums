import React from 'react';
import {View, Picker} from 'react-native';
import Input from '../../../Components/Input';
import {Button} from 'react-native-paper';
import {connect} from 'react-redux';
import {
  name_changed,
  phone_changed,
  shift_changed,
  create_employee,
  save_employee,
} from '../CreateEmployee/actions';

const EmployeeForm = props => {
  const {
    name,
    phone,
    shift,
    name_changed,
    phone_changed,
    shift_changed,
    create_employee,
    create_or_update,
  } = props;

  return (
    <View>
      <Input
        label="name"
        value={name}
        onChangeText={name_changed}
        placeholder="name"
      />
      <Input
        label="Phone"
        value={phone}
        onChangeText={phone_changed}
        placeholder="phone"
      />
      <Picker
        selectedValue=""
        style={{height: 60, width: 100, alignSelf: 'center'}}
        onValueChange={value => shift_changed(value)}>
        <Picker.Item label="Monday" value="Monday" />
        <Picker.Item label="Tuesday" value="Tuesday" />
        <Picker.Item label="Wednesday" value="Wednesday" />
        <Picker.Item label="Thrusday" value="Thrusday" />
        <Picker.Item label="Friday" value="Friday" />
        <Picker.Item label="Saturday" value="Saturday" />
        <Picker.Item label="Sunday" value="Sunday" />
      </Picker>
      {create_or_update === 'create' ? (
        <Button
          style={{margin: 170, width: 100, alignSelf: 'center'}}
          onPress={() => create_employee(name, phone, shift)}>
          Create
        </Button>
      ) : null}
    </View>
  );
};
const mapStateToProps = state => {
  const {name, phone, shift} = state.createEmployee;
  return {name, phone, shift};
};

export default connect(mapStateToProps, {
  name_changed,
  phone_changed,
  shift_changed,
  create_employee,
})(EmployeeForm);
