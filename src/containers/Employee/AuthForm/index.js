import React, {useState} from 'react';
import {CardSection} from '../../../Components/Card';
import Input from '../../../Components/Input';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import {signin, userNameChanged, passwordChanged} from '../actions';
import {connect} from 'react-redux';

const AuthForm = props => {
  const {
    navigation,
    signin,
    userNameChanged,
    passwordChanged,
    userName,
    password,
    onSuccess,
    onFailure,
  } = props;
  //   console.log('from Employee from ------> ', userName, password);
  return (
    <View>
      {/* <CardSection> */}
      <View style={{margin: 30}}>
        <Input
          value={userName}
          onChangeText={userNameChanged}
          placeholder="User name"
          label="user name"
        />
      </View>
      <View>
        <Input
          value={password}
          onChangeText={passwordChanged}
          placeholder="Password"
          label="password"
        />
      </View>
      {onFailure ? (
        <Text
          style={{
            color: 'red',
            alignSelf: 'center',
            margin: 10,
            fontSize: 30,
          }}>
          {onFailure}
        </Text>
      ) : (
        <Text
          style={{
            color: 'green',
            alignSelf: 'center',
            margin: 10,
            fontSize: 30,
          }}>
          {onSuccess.user ? onSuccess.user.uid : ''}
        </Text>
      )}
      {/* {onSuccess ? <Text>{onSuccess}</Text> : null} */}
      {/* </CardSection> */}
      <Button onPress={() => signin(userName, password)}>Submit</Button>
    </View>
  );
};

const mapStateToProps = state => ({
  userName: state.auth.userName,
  password: state.auth.password,
  onSuccess: state.auth.onSuccess,
  onFailure: state.auth.onFailure,
});
// const mapDispatchToProps = dispatch => ({
//   signin: (userName, password) => dispatch(signin(userName, password)),
// });

export default connect(mapStateToProps, {
  signin,
  userNameChanged,
  passwordChanged,
})(AuthForm);
