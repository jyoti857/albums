import {
  NAME_CHANGED,
  PHONE_CHANGED,
  SHIFT_CHANGED,
  CREATE_EMPLOYEE,
} from './constants';
import firebase from 'firebase';
import {navigate} from '../../../NavigationService';

export const name_changed = payload => dispatch =>
  dispatch({
    type: NAME_CHANGED,
    payload,
  });
export const phone_changed = payload => dispatch =>
  dispatch({
    type: PHONE_CHANGED,
    payload,
  });
export const shift_changed = payload => dispatch =>
  dispatch({
    type: SHIFT_CHANGED,
    payload,
  });

export const create_employee = (name, phone, shift) => dispatch => {
  // navigate('EmployeeDetails');
  console.log('employee logs #*&*&#*&#*$--------->', name, phone, shift);
  //   return dispatch({
  //     type: CREATE_EMPLOYEE,
  //     name,
  //     phone,
  //     shift,
  //   });
  const {currentUser} = firebase.auth();
  console.log('#$^&#&#^$&#^$----> ', currentUser);
  firebase
    .database()
    .ref(`/users/${currentUser.uid}/employees`)
    .push({name, phone, shift})
    .then(() => {
      navigate('EmployeeDetails');
      return dispatch({
        type: CREATE_EMPLOYEE,
      });
    });
};
