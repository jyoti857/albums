import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import AlbumScreen from '../containers/Album';
import EmployeeScreen from '../containers/Employee';
import CreateEmployeeScreen from '../containers/Employee/CreateEmployee';
import UpdateEmployeeScreen from '../containers/Employee/UpdateEmployee';
import {setTopLevelNavigator} from '../../src/NavigationService';
import EmployeeDetailsScreen from '../containers/Employee/EmployeeDetails';
import {Button} from 'react-native-paper';

//------
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {rootReducers} from '../reducers';
import {createStore, applyMiddleware} from 'redux';

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
    navigationOptions: ({navigation}) => ({
      headerTitle: 'Employee Details',
      headerRight: (
        <Button onPress={() => navigation.navigate('CreateEmployee')}>
          Add
        </Button>
      ),
    }),
  },
  CreateEmployee: {
    screen: CreateEmployeeScreen,
    navigationOptions: {
      headerTitle: 'Create Employee',
    },
  },
  UpdateEmployee: {
    screen: UpdateEmployeeScreen,
    navigationOptions: {
      headerTitle: 'Update Employee',
    },
  },
});

const App = createAppContainer(MainNavigator);
const store = createStore(rootReducers, applyMiddleware(thunk));
export default () => (
  <Provider store={store}>
    <App
      ref={navigator => {
        setTopLevelNavigator(navigator);
      }}
    />
  </Provider>
);
