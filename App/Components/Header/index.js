import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Groceries</Text>
    </View>
  );
};

export default Header;
