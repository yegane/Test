import React, {useState, useEffect} from 'react';
import { Image, Text, View } from 'react-native';

const Row = ({items}) => {
  const {item, index} = items;
  return (
    <View style={{flexDirection: 'row', marginVertical: 15}}>
      <Image
        source={{uri: item.image}}
        style={{
          width: 100,
          height: 100,
          resizeMode: 'cover',
          borderRadius: 100,
        }}
      />
      <View style={{marginStart: 20}}>
        <Text>{item.name}</Text>
        <Text>{item.family}</Text>
      </View>
    </View>
  );
};

export default Row;
