import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import Input from '../../../Components/Input';
import {Button} from 'react-native-paper';
import {connect} from 'react-redux';
import {fetch_employees} from './actions';
import _ from 'lodash';
import {TouchableRipple} from 'react-native-paper';
import ListItem from './ListItem';

const EmployeeDetails = props => {
  const {fetch_employees, employees} = props;
  console.log('inside EmployDetails---->', employees);
  useEffect(() => {
    fetch_employees();
  }, [fetch_employees]);
  return (
    <View>
      <Text style={{alignSelf: 'center', margin: 10}}>Employee Details</Text>
      <FlatList
        data={employees}
        renderItem={item => {
          console.log('inside render item ---> ', item.item);
          return <ListItem item={item.item} />;
        }}
        keyExtractor={item => item.uid}
      />
    </View>
  );
};
// const styles = StyleSheet.create({

// });

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => ({
    ...val,
    uid,
  }));
  return {employees};
};
export default connect(mapStateToProps, {fetch_employees})(EmployeeDetails);
