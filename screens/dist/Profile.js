import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  AsyncStorage,
  Image,
} from 'react-native';

export default class ProfleScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Profile',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#0398fc',
      },
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.navigate('App1')}>
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
        <Text>Profile Screen</Text>

        <TouchableOpacity style={styles.logout} onPress={this.LogOut}>
          <Text>LogOut</Text>
        </TouchableOpacity>
      </View>
    );
  }
  LogOut = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}
const styles = (StyleSheet.DistributorProfile = {
  container: {
    flex: 1,
    backgroundColor: '#028799',
  },
  logout: {
    width: 100,
    height: 30,
    backgroundColor: 'blue',
  },
  backlogo: {
    width: 40,
    height: 30,
    margin: 0,
  },
});
