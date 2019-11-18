import {combineReducers} from 'redux';
import authReducers from './containers/Employee/reducers';
import employeeDetailsReducers from './containers/Employee/EmployeeDetails/reducers';

export const rootReducers = combineReducers({
  auth: authReducers,
  eDetails: employeeDetailsReducers,
});
