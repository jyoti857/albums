import React from 'react';
import {DynamicModuleLoader} from 'redux-dynamic-modules';

import {Text} from 'react-native';
import Headers from './components/Headers';
import {getAlbumModule} from '../module';
import AlbumList from './components/AlbumList';

class Albums extends React.Component {
  render() {
    return (
      <DynamicModuleLoader modules={[getAlbumModule()]}>
        <Headers>
          <Text>Albums</Text>
        </Headers>
        <AlbumList />
      </DynamicModuleLoader>
    );
  }
}

export default Albums;
