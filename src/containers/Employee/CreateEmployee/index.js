import React from 'react';
import {View, Text, Picker} from 'react-native';
import Input from '../../../Components/Input';
import {Button} from 'react-native-paper';
import {
  name_changed,
  phone_changed,
  shift_changed,
  create_employee,
} from './actions';
import {connect} from 'react-redux';

const CreateEmployeeForm = props => {
  const {
    name,
    phone,
    shift,
    name_changed,
    phone_changed,
    shift_changed,
    create_employee,
  } = props;
  return (
    // <Provider store={store}>
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
      <Button
        style={{margin: 140}}
        onPress={() => create_employee(name, phone, shift)}>
        Create
      </Button>
    </View>
  );
};

const mapStateToProps = state => ({
  name: state.createEmployee.name,
  phone: state.createEmployee.phone,
  shift: state.createEmployee.shift,
});

// const styles = StyleSheet.create({

// });
export default connect(mapStateToProps, {
  name_changed,
  phone_changed,
  shift_changed,
  create_employee,
})(CreateEmployeeForm);
// export default CreateEmployeeForm;
