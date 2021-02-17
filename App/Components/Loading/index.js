import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import styles from './styles'
const Loading = () => {
    return ( 
        <View style={styles.container}>
            <ActivityIndicator />
        </View>
     );
}
 
export default Loading;