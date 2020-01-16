import {
  NAME_CHANGED,
  PHONE_CHANGED,
  SHIFT_CHANGED,
  CREATE_EMPLOYEE,
  UPDATE_EMPLOYEE,
  SAVE_EMPLOYEE,
} from './constants';
import firebase from 'firebase';
import {navigate} from '../../../NavigationService';

// for now every thing is in CreateEmployee reducers, it will
// move to EmployeeForm reducer sooner
// For time being, it is there and also to notify you guys

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

export const update_employee = ({prop, value}) => dispatch => {
  dispatch({
    type: UPDATE_EMPLOYEE,
    payload: {prop, value},
  });
};

export const save_employee = ({name, phone, shift, uid}) => dispatch => {
  const {currentUser} = firebase.auth();
  firebase
    .database()
    .ref(`/users/${currentUser.uid}/employees/${uid}`)
    .set({name, phone, shift})
    .then(() => console.log('saved'));
};
