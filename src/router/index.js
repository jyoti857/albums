import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import AlbumScreen from '../containers/index';

const MainNavigator = createStackNavigator({
  Album: {screen: AlbumScreen},
});

const App = createAppContainer(MainNavigator);

export default App;
