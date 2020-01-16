import React, {useEffect} from 'react';
import {View} from 'react-native';
// import Input from '../../../Components/Input';
import {Button} from 'react-native-paper';
import {update_employee, save_employee} from '../CreateEmployee/actions';
import {connect} from 'react-redux';
import EmployeeForm from '../EmployeeForm';
import _ from 'lodash';

const UpdateEmployeeForm = props => {
  const {item} = props.navigation.state.params;
  //   useEffect(() => {
  //     _.each(item, (value, prop) => {
  //       props.update_employee({prop, value});
  //     });
  //   }, [item, props]);
  const saveButtonPressed = () => {
    const {name, phone, shift, uid} = props;
    props.save_employee({name, phone, shift, uid});
    console.log('inside employee form, upon save button presserd  ---> ', {
      name,
      phone,
      shift,
      uid,
    });
  };
  return (
    <View>
      <EmployeeForm create_or_update="update" />

      <View style={{margin: 170, flexDirection: 'row', alignSelf: 'center'}}>
        <Button onPress={saveButtonPressed}>Save</Button>
        <Button style={{width: 100}}> Delete</Button>
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  const {name, phone, shift} = state.createEmployee;
  return {name, phone, shift};
};

// const styles = StyleSheet.create({

// });
export default connect(mapStateToProps, {update_employee, save_employee})(
  UpdateEmployeeForm,
);
// export default CreateEmployeeForm;
