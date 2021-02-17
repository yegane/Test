import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginBottom: 15,
    height: 80,
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    borderRadius: 5,
    elevation: 4,
  },
  left: {
    marginStart: 5,
  },
  right: {
      marginStart: 15
  }
});
