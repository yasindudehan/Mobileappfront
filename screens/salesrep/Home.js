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
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <Container style={{backgroundColor: '#2bbbad'}}>
        <StatusBar backgroundColor="#2bbbad" barStyle="light-content" />
        <Header style={{backgroundColor: '#124d04'}}>
          <Body>
            <Title>Company Name</Title>
          </Body>
        </Header>
        <Tabs>
          <Tab
            heading={
              <TabHeading style={{backgroundColor: '#124d04'}}>
                <Text>PROFILE</Text>
              </TabHeading>
            }>
            <Tab1 />
            <View style={styles.container}>
              <Text>Profile Screen</Text>

              <Card style={{width: 300}}>
                <CardItem>
                  <Body>
                    <Left>
                      <Text style={styles.logoutText}>Log Out</Text>
                    </Left>
                  </Body>
                  <Body>
                    <Button iconRight onPress={this.logOut}>
                      <Text>logout</Text>
                      <Icon name="person" />
                    </Button>
                  </Body>
                </CardItem>
              </Card>
            </View>
          </Tab>
          <Tab
            heading={
              <TabHeading style={{backgroundColor: '#124d04'}}>
                <Text>ADD ORDER</Text>
              </TabHeading>
            }>
            <Tab2 />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{backgroundColor: '#124d04'}}>
                <Text>STOCK BALANCE</Text>
              </TabHeading>
            }>
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
}
const styles = (StyleSheet.home = {
  container: {
    flex: 1,
    backgroundColor: '#2bbbad',
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
});
