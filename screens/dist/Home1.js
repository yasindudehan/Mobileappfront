import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  AsyncStorage,
  Image,
} from 'react-native';

export default class HomeScreen1 extends Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#0398fc',
    },
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.flexd}>
          <TouchableOpacity style={styles.buttons} onPress={this.goProfile}>
            <Image
              source={require('../Image/profile.png')}
              style={styles.logo}
            />
            <Text>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons}>
            <Image
              source={require('../Image/addOrder.png')}
              style={styles.logo}
            />
            <Text>Add Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  goProfile = () => {
    //  alert('press');
    this.props.navigation.navigate('ProfileD');
  };
}

const styles = (StyleSheet.distributorHome = {
  container: {
    flex: 1,
    //flexDirection: 'row',
    backgroundColor: '#028799',
  },
  flexd: {
    flexDirection: 'row',
  },
  buttons: {
    width: 70,
    height: 70,
    // backgroundColor: '#1e2a3d',
    borderRadius: 200,
    margin: 50,
    marginLeft: 90,
  },
  logo: {
    width: 70,
    height: 70,
  },
});
