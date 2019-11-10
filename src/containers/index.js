import React from 'react';
import {DynamicModuleLoader} from 'redux-dynamic-modules';

import {Text} from 'react-native';
import Headers from './components/Headers';
import {getAlbumModule} from '../module';

class Albums extends React.Component {
  render() {
    return (
      <DynamicModuleLoader modules={[getAlbumModule()]}>
        <Headers>
          <Text>Albums</Text>
        </Headers>
      </DynamicModuleLoader>
    );
  }
}

export default Albums;
