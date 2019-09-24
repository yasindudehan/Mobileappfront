import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';

import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Segment,
  Content,
  Text,
  Tabs,
  Tab,
} from 'native-base';
export default class StockBalanceScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Stock Balance',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#0398fc',
      },
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.navigate('App')}>
          <Image
            source={require('../Image/back3.png')}
            style={{width: 40, height: 30}}
          />
        </TouchableOpacity>
      ),
    };
  };
  render() {
    return (
      <View>
        <Text>Stock Blance</Text>
      </View>
    );
  }
}
const styles = (StyleSheet.stockBalance = {
  container: {
    flex: 1,
    backgroundColor: '#6c81a3',
  },
});
