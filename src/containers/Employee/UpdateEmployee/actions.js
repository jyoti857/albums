import {UPDATE_EMPLOYEE} from './constants';

export const upadateEmployee = ({prop, value}) => dispatch => {
  dispatch({
    type: UPDATE_EMPLOYEE,
    payload: {prop, value},
  });
};
