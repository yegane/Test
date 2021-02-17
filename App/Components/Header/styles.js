import {StatusBar, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    paddingTop: StatusBar.currentHeight || 44,
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  text: {
    fontSize: 25,
  },
});
