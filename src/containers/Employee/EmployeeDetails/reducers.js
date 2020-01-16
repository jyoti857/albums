import {FETCH_EMPLOYEES} from './constants';

const initialState = {};

const employeeReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES:
      return action.payload;
    default:
      return state;
  }
};

export default employeeReducers;
