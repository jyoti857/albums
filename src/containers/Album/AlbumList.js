import React, {useState, useEffect} from 'react';
import request from '../../utils/request';

import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
  Linking,
} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import Card_ from './Card_';
import CardSection from './CardSection';
import Button from '../../Components/Button';

const AlbumList = () => {
  const [albumList, setAlbumList] = useState([]);
  const url = 'http://rallycoding.herokuapp.com/api/music_albums/';
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  useEffect(() => {
    // const response = request(url, options);
    // console.log('response ----> ', response);
    fetch(url)
      .then(data => data.json())
      .then(data => {
        console.log('data ==>', data, albumList);
        setAlbumList(data);
      })
      .catch(err => {
        console.log('error -->', err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={{marginBottom: 30}}>
      <FlatList
        data={albumList}
        renderItem={({item}) => {
          return (
            <ScrollView>
              <Card_>
                <CardSection>
                  <Image
                    style={{width: 100, height: 100, borderRadius: 20}}
                    source={{uri: item.thumbnail_image}}
                  />
                  <TouchableRipple
                    onPress={() => console.log('Pressed')}
                    rippleColor="transparent">
                    <View>
                      <Text style={styles.titleArtist}>{item.artist}</Text>
                      <Text style={styles.titleArtist}>{item.title}</Text>
                    </View>
                  </TouchableRipple>
                </CardSection>
                <CardSection>
                  <Image
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{
                      height: 300,
                      flex: 1,
                      width: null,
                      borderRadius: 20,
                    }}
                    source={{url: item.image}}
                  />
                </CardSection>
                <CardSection>
                  <Button
                    title="Buy now"
                    onPress={() => Linking.openURL(item.url)}
                  />
                </CardSection>
              </Card_>
            </ScrollView>
          );
        }}
        keyExtractor={item => item.url}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   // marginBottom: 20,
  // },
  titleArtist: {
    color: 'black',
    fontSize: 30,
    paddingHorizontal: 40,
  },
});

export default AlbumList;
