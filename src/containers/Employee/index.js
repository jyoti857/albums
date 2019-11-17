import React, {useEffect} from 'react';
import {View} from 'react-native';
import EmployeeForm from './EmployeeForm';
import firebase from 'firebase';

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
    <View>
      <EmployeeForm navigation={navigation} />
    </View>
  );
};

export default Employee;
