import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

export default class ProfileScreenS extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Profile',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#0398fc',
      },
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.navigate('App')}>
          <Image
            source={require('../Image/back3.png')}
            style={styles.backlogo}
          />
        </TouchableOpacity>
      ),
    };
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
      </View>
    );
  }
}
const styles = (StyleSheet.salesrepProfile = {
  container: {
    flex: 1,
    backgroundColor: '#6c81a3',
  },
  backlogo: {
    width: 40,
    height: 30,
    margin: 0,
  },
});
