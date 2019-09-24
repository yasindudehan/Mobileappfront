import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  AsyncStorage,
  Image,
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
} from 'native-base';
export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>HOME</Title>
          </Body>
          <Right />
        </Header>
        <Tabs>
          <Tab heading="PROFILE">
            <View style={styles.container}>
              <Text>Sales rep Home Screen</Text>
              <TouchableOpacity onPress={this.logOut} style={styles.button1}>
                <Text>LOGOUT</Text>
              </TouchableOpacity>
            </View>
            <Tab1 />
          </Tab>
          <Tab heading="ADDORDER">
            <Tab2 />
          </Tab>
          <Tab heading="STOCKBLANCE">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
  logOut = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
  goProfile = () => {
    this.props.navigation.navigate('ProfileS');
  };
  addOrder = () => {
    this.props.navigation.navigate('OrderS');
  };
  stockBalance = () => {
    this.props.navigation.navigate('BalanceStock');
  };
}

const styles = (StyleSheet.home = {
  container: {
    flex: 1,
    backgroundColor: '#6c81a3',
  },
  flexd: {
    flexDirection: 'row',
  },
  button1: {
    //justifyContent:'center',
    width: 100,
    height: 50,
    backgroundColor: 'blue',
  },
  button2: {
    width: 50,
    height: 50,
    margin: 10,
    backgroundColor: 'blue',
    borderRadius: 100,
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
});
