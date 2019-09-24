import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Picker,
  Button,
  Modal,
  TouchableHighlight,
  Alert,
} from 'react-native';

export default class OrderScreenS extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'NewOrder',
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
        <Text>Select Route</Text>
      </View>
    );
  }
}

const styles = (StyleSheet.salesrepNeworder = {
  container: {
    flex: 1,
    backgroundColor: '#6c81a3',
  },
  routeText: {
    margin: 10,
    fontSize: 20,
  },
  backlogo: {
    width: 40,
    height: 30,
    margin: 0,
  },
  picker: {
    backgroundColor: 'skyblue',
    height: 40,
    margin: 10,
  },
});
