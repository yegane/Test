import React, {useState, useEffect} from 'react';
import {SafeAreaView, View} from 'react-native';
import Header from '../../Components/Header';
import UserList from '../../Components/List/UserList';
import Loading from '../../Components/Loading';
import styles from './ListStyles';

const ListScreen = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => {
        setLoading(false);
        setData(json);
      })
      .catch((err) => console.log({err}));
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      {loading ? <Loading /> : <UserList {...{data}} />}
    </View>
  );
};

export default ListScreen;
