import React from 'react';
import {TouchableRipple} from 'react-native-paper';
import {View, Text} from 'react-native';
import {navigate} from '../../../NavigationService';

const ListItem = props => {
  const {item} = props;
  console.log('item tapped from ListItem--->', item);
  return (
    <TouchableRipple
      onPress={() => {
        navigate('UpdateEmployee', {item});
        console.log('from touchable ripple--->', item);
      }}>
      <View
        style={{
          flexDirection: 'row',
          margin: 10,
          padding: 10,
          justifyContent: 'space-between',
        }}>
        <Text>{item.name}</Text>
        <Text>{item.phone}</Text>
        <Text>{item.shift}</Text>
      </View>
    </TouchableRipple>
  );
};

export default ListItem;
