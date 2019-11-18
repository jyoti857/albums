import {
  SIGNIN,
  SIGNUP,
  ERROR_SIGNIN,
  USERNAME_CHANGED,
  PASSWORD_CHANGED,
} from './constants';
import firebase from 'firebase';
import {navigate} from '../../NavigationService';

export const userNameChanged = text => {
  return dispatch =>
    dispatch({
      type: USERNAME_CHANGED,
      payload: text,
    });
};

export const passwordChanged = text => {
  return dispatch =>
    dispatch({
      type: PASSWORD_CHANGED,
      payload: text,
    });
};

export const signin = (userName, password) => {
  return dispatch => {
    firebase
      .auth()
      .signInWithEmailAndPassword(userName, password)
      //   .then(() =>
      // dispatch({
      //   type: SIGNIN,
      //   payload: 'signed in successfully',
      // }),
      //   )
      .then(user => {
        console.log('user is not --->', user);
        loginUserSuccess(dispatch, user);
        navigate('EmployeeDetails');
      })
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(userName, password)
          //   .then(() =>
          //     dispatch({
          //       type: SIGNUP,
          //       payload: 'new user is created now.',
          //     }),
          //   )
          .then(user => {
            console.log('user from loginsuccess user --->', user);
            loginUserSuccess(dispatch, user);
          })
          //   .catch(() =>
          //     dispatch({
          //       type: ERROR_SIGNIN,
          //       payload: 'Authentication Failed!',
          //     }),
          //   );
          .catch(() => loginUserFail(dispatch));
      });
  };
};

const loginUserSuccess = (dispatch, user) =>
  dispatch({
    type: SIGNIN,
    payload: user,
  });
const loginUserFail = dispatch =>
  dispatch({
    type: ERROR_SIGNIN,
    payload: 'Authentication Failed!',
  });

export const error_signin = dispatch =>
  dispatch({
    type: ERROR_SIGNIN,
    payload: 'Authentication Failed!',
  });
