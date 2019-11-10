import React from 'react';
// eslint-disable-next-line object-curly-spacing
import {AppRegistry, Text} from 'react-native';
import App from './App';
// eslint-disable-next-line object-curly-spacing
import {name as appName} from './app.json';

// const App = () => <Text>This is some text</Text>;

AppRegistry.registerComponent(appName, () => App);
