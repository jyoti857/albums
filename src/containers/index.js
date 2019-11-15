import React from 'react';
import {DynamicModuleLoader} from 'redux-dynamic-modules';

import {Text, View} from 'react-native';
import Headers from './components/Headers';
import {getAlbumModule} from '../module';
import AlbumList from './components/AlbumList';

// to check the button component
import Button from '../Components/Button';

class Albums extends React.Component {
  render() {
    return (
      //   <View style={{flex: 1}}>
      <DynamicModuleLoader modules={[getAlbumModule()]}>
        <Headers>
          <Text>Albums</Text>
        </Headers>
        {/* <Button title="this is button title" /> */}
        <AlbumList />
      </DynamicModuleLoader>
      //   </View>
    );
  }
}

export default Albums;
