import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  AsyncStorage,
  StatusBar,
} from 'react-native';

export default class ProfileScreenS extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#2bbbad" barStyle="light-content" />
        <Text>Profile</Text>
      </View>
    );
  }
}
const styles = (StyleSheet.salesrepProfile = {
  container: {
    flex: 1,
    backgroundColor: '#2bbbad',
  },
  backlogo: {
    width: 40,
    height: 30,
    margin: 0,
  },
});
