import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

const Headers = ({children}) => {
  const {headersParent, headersContent} = styles;
  return (
    <View style={headersParent}>
      <Text style={headersContent}>{children}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  headersParent: {
    marginTop: 60,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  headersContent: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Headers;
