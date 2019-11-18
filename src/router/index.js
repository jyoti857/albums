import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import AlbumScreen from '../containers/Album';
import EmployeeScreen from '../containers/Employee';
import CreateEmployeeScreen from '../containers/Employee/CreateEmployee';
import {setTopLevelNavigator} from '../../src/NavigationService';
import EmployeeDetailsScreen from '../containers/Employee/EmployeeDetails';

const MainNavigator = createStackNavigator({
  Album: {
    screen: AlbumScreen,
    navigationOptions: {
      headerTitle: 'Album',
    },
  },
  Employee: {
    screen: EmployeeScreen,
    navigationOptions: {
      headerTitle: 'Employee',
    },
  },
  EmployeeDetails: {
    screen: EmployeeDetailsScreen,
    navigationOptions: {
      headerTitle: 'Employee Details',
    },
  },
  CreateEmployee: {
    screen: CreateEmployeeScreen,
    navigationOptions: {
      headerTitle: 'Create Employee',
    },
  },
});

const App = createAppContainer(MainNavigator);

export default () => (
  <App
    ref={navigator => {
      setTopLevelNavigator(navigator);
    }}
  />
);
