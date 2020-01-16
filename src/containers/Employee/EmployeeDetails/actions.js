import {FETCH_EMPLOYEES} from './constants';
import firebase from 'firebase';
import {navigate} from '../../../NavigationService';

export const fetch_employees = () => dispatch => {
  const {currentUser} = firebase.auth();
  firebase
    .database()
    .ref(`users/${currentUser.uid}/employees`)
    .on('value', snapshot => {
      return dispatch({
        type: FETCH_EMPLOYEES,
        payload: snapshot.val(),
      });
    });
};
