import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  AsyncStorage,
  Image,
  StatusBar,
} from 'react-native';
import Tab1 from './Profile';
import Tab2 from './AddOrder';
import Tab3 from './StockBalance';

//import Icon from 'react-native-vector-icons/FontAwesome';
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
  Title,
  CardItem,
  Card,
  TabHeading,
} from 'native-base';
export default class HomeScreen extends Component {
  render() {
    return (
      <Container style={{backgroundColor: '#37474f'}}>
        <Image source={require('../Image/tea.jpg')} style={{opacity: 0.5}} />
        <StatusBar backgroundColor="#00363a" barStyle="light-content" />
        <Header style={{backgroundColor: '#006064'}}>
          <Body>
            <Right>
              <Image
                source={require('../Image/logo3.png')}
                style={{width: 150, height: 50}}
              />
            </Right>
          </Body>
        </Header>
      </Container>
    );
  }
}
const styles = (StyleSheet.home = {
  container: {
    flex: 1,
    backgroundColor: '#00363a',
  },
  flexd: {
    flexDirection: 'row',
  },

  button2: {
    width: 50,
    height: 50,
    margin: 10,
    backgroundColor: 'blue',
    borderRadius: 100,
  },
  button1: {
    //justifyContent:'center',
    width: 70,
    height: 70,
    // backgroundColor: 'blue',
  },
  button2Text: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingBottem:10,
    margin: 0,
    padding: 10,
    fontSize: 40,
    color: 'white',
  },
  buttons: {
    width: 70,
    height: 70,
    // backgroundColor: '#1e2a3d',
    borderRadius: 200,
    margin: 50,
    //marginLeft: 20,
  },
  logo: {
    width: 70,
    height: 70,
  },
  logoutText: {
    fontSize: 30,
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
});
