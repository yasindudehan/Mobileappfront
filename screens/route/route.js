import React, {Component} from 'react';
import {
  View,
  Text,
  AsyncStorage,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import HomeScreen from '../salesrep/Home';
import LoginScreen from '../Login';
import HomeScreen1 from '../dist/Home1';

class Authentication extends React.Component {
  constructor(props) {
    super(props);
    this.loadData();
  }
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
  loadData = async () => {
    const logged = await AsyncStorage.getItem('logged');
    if (logged === '1') {
      this.props.navigation.navigate('App'); //navigate Sales rep HomeScreen
    } else if (logged === '2') {
      this.props.navigation.navigate('App1'); //navigate Distributor homeScreen
    } else {
      this.props.navigation.navigate('Auth');
    }
  };
}
const AppStack = createStackNavigator({
  Home: HomeScreen,
}); /**Sales rep Home Screen */
const App1Stack = createStackNavigator({
  Home1: HomeScreen1,
}); /*Distributor Home Screen */
const AuthStack = createStackNavigator({Login: LoginScreen});

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: Authentication,
      App: AppStack,
      App1: App1Stack,
      Auth: AuthStack,
    },

    {initialRouteName: 'AuthLoading'},
  ),
);
