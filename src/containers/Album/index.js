import React from 'react';
import {DynamicModuleLoader} from 'redux-dynamic-modules';

import {Text, View, Button} from 'react-native';
// import Headers from './components/Headers';
// import {getAlbumModule} from '../../module';
import AlbumList from './AlbumList';

// to check the button component
// import Button from '../Components/Button';

class Albums extends React.Component {
  render() {
    const {navigation} = this.props;
    console.log('navigation in Album index', navigation);
    return (
      // <DynamicModuleLoader modules={[getAlbumModule()]}>
      <View>
        {/* <Headers>
          <Text>Albums</Text>
        </Headers> */}
        {/* <Button title="this is button title" /> */}
        <Button
          title="go to Employee screen"
          onPress={() => navigation.navigate('Employee')}
        />
        <AlbumList />
      </View>
      // </DynamicModuleLoader>
    );
  }
}

export default Albums;
