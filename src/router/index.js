import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import AlbumScreen from '../containers/Album';
import EmployeeScreen from '../containers/Employee';

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
  // navigationOptions: ({navigation}) => {
  //   const {routeName} = navigation.state.routes[navigation.state.index];
  //   console.log('this is the route name ----->', routeName);
  //   return {headerTitle: routeName};
  // },
});

const App = createAppContainer(MainNavigator);

export default App;
