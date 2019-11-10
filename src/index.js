import React from 'react';
import {Provider} from 'react-redux';
import Albums from './containers/index';
import store from './configuratorStore';
const App = () => {
  return (
    <Provider store={store}>
      <Albums />
    </Provider>
  );
};

export default App;
