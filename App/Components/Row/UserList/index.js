import React, {useState, useEffect} from 'react';
import {Animated, Text, View} from 'react-native';
import styles from './styles';

const VerticalRow = ({items, scrollY}) => {
  console.log({scrollY});
  const {item, index} = items;
  const inputRange = [-1, 0, 100 * index, 100 * (index + 2)];

  const scale = scrollY.interpolate({
    inputRange,
    outputRange: [1, 1, 1, 0.8],
    extrapolate: 'clamp',
  });

    const translateY = scrollY.interpolate({
      inputRange,
      outputRange: [0, 0, 0, 220],
      extrapolate: 'clamp',
    });
  return (
    <Animated.View style={[styles.container, {transform: [{scale}, {translateY}]}]}>
      <View style={styles.left}>
        <Text>{item.id}</Text>
      </View>

      <View style={styles.right}>
        <Text>{item.title}</Text>
        <Text>{item.completed.toString()}</Text>
      </View>
    </Animated.View>
  );
};

export default VerticalRow;
