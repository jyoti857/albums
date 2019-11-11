import React, {useState, useEffect} from 'react';
import request from '../../utils/request';

import {View, Text, Image} from 'react-native';
import {TouchableRipple} from 'react-native-paper';

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
        console.log('error -->', err.json());
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View>
      <Text>This is Album list </Text>
      {albumList.map((album, index) => {
        return (
          <View key={index}>
            <Text>{album.artist}</Text>
            <Image
              style={{width: 100, height: 100, borderRadius: 20}}
              source={{url: album.thumbnail_image}}
            />
            <Text>{album.url}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default AlbumList;
