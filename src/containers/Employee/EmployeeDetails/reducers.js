import {FETCH_EMPLOYEES} from './constants';

const initialState = {};

const employeeReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES:
      console.log('from employee reducers *(#$*(#*---> ', action);
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default employeeReducers;
