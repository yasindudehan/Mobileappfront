import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  AsyncStorage,
  StatusBar,
  TextInput,
} from 'react-native';
import {Container, Content, Card, CardItem, Form} from 'native-base';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import UpdateProfile from './UpdateProfile';

class ProfileScreenS extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <Container>
        <Content style={styles.container}>
          <View>
            <StatusBar backgroundColor="#00363a" barStyle="light-content" />
            <View style={styles.header}></View>

            <Image
              style={styles.avatar}
              source={{
                uri: 'http://www.hightiptv.com/images/image-profile-8.png',
              }}
            />

            <View style={styles.body}>
              <View style={styles.bodyContent}>
                <Text style={styles.name}>Sales Rep Name</Text>
                <Text style={styles.info}>Sales Rep</Text>
                <Text style={styles.description}>Works at Lavish pvt Lt </Text>

                <Form>
                  <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={this.nextPage}>
                    <Text style={{color: 'white'}}>Profile Update</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                   style={styles.buttonContainer}
                    onPress={this.LogOut}>
                  <Text style={{color: 'white'}}>Log Out</Text>
                 
                  </TouchableOpacity>
                </Form>
              </View>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
  nextPage = () => {
    // alert('Pressed');
    this.props.navigation.navigate('UpdateProfile');
  };
  LogOut = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}
const styles = (StyleSheet.salesrepProfile = {
  container: {
    flex: 1,
    backgroundColor: '#00363a',
  },
  backlogo: {
    width: 40,
    height: 30,
    margin: 0,
  },
  header: {
    backgroundColor: '#006064',
    height: 90,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 30,
  },
  name: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  name1: {
    fontSize: 28,
    color: '#696969',
    fontWeight: '600',
  },
  info: {
    fontSize: 16,
    color: '#00BFFF',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: '#696969',
    marginTop: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#00363a',
    borderWidth: 3,
    borderColor: '#428e92',

    paddingHorizontal: 25,
  },
  input: {
    width: 250,
    height: 50,
    borderWidth: 1,
    borderColor: '#717e85',
    margin: 10,
  },
});
const MainNavigator = createStackNavigator({
  Home: {screen: ProfileScreenS},
  UpdateProfile: {screen: UpdateProfile},
});

const App = createAppContainer(MainNavigator);

export default App;
