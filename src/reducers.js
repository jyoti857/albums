import {combineReducers} from 'redux';
import authReducers from './containers/Employee/reducers';
import createEmployee from './containers/Employee/CreateEmployee/reducers';
import employees from './containers/Employee/EmployeeDetails/reducers';
export const rootReducers = combineReducers({
  auth: authReducers,
  createEmployee,
  employees,
});
