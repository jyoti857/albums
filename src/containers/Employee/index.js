import React, {useEffect} from 'react';
import {View} from 'react-native';
import AuthForm from './AuthForm';
import CreateEmployeeForm from './CreateEmployee';
import firebase from 'firebase';
import {createStore, applyMiddleware} from 'redux';
import {rootReducers} from '../../reducers';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

const store = createStore(rootReducers, applyMiddleware(thunk));

const Employee = ({navigation}) => {
  useEffect(() => {
    const config = {
      apiKey: 'AIzaSyDCEJuI-2u6j2vYgFRcsDHmRPIlordPdSk',
      authDomain: 'reative-f643b.firebaseapp.com',
      databaseURL: 'https://reative-f643b.firebaseio.com',
      projectId: 'reative-f643b',
      storageBucket: 'reative-f643b.appspot.com',
      messagingSenderId: '1031234258854',
      appId: '1:1031234258854:web:ae4e2c4b954604c6c77167',
      measurementId: 'G-89QB2D9B1J',
    };
    !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
  }, []);
  return (
    <Provider store={store}>
      <AuthForm navigation={navigation} />
    </Provider>
  );
};

export default Employee;
