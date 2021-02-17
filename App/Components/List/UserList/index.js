import React, {useState, useEffect, useRef} from 'react';
import {Animated} from 'react-native';
import VerticalRow from '../../Row/UserList';
import styles from './styles';
const UserList = ({data}) => {
  const scrollY = useRef(new Animated.Value(0)).current;

  //---------function-----------------
  const renderItem = (items) => <VerticalRow {...{items, scrollY}} />;

  const keyExtractor = (item, index) => `item-${index}-userList`;
  return (
    <Animated.FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      contentContainerStyle={styles.contentList}
      onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollY}}}], {
        useNativeDriver: true,
      })}
    />
  );
};

export default UserList;
