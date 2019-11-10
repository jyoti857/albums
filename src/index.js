import React from 'react';
import {DynamicModuleLoader} from 'redux-dynamic-modules';

import {Text} from 'react-native';
import Headers from './containers/components/Headers';
import {getAlbumsModule} from './module';

class Albums extends React.Component {
  render() {
    return (
      <DynamicModuleLoader modules={getAlbumsModule()}>
        <Headers>
          <Text>Albums</Text>
        </Headers>
      </DynamicModuleLoader>
    );
  }
}

export default Albums;
