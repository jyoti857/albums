import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import AlbumScreen from '../containers/Album';
import EmployeeScreen from '../containers/Employee';

const MainNavigator = createStackNavigator(
  {
    Album: {screen: AlbumScreen},
    Employee: {screen: EmployeeScreen},
  },
  {
    initialRouteName: 'Album',
    defaultNavigationOptions: {
      title: 'Albums',
    },
  },
);

const App = createAppContainer(MainNavigator);

export default App;
