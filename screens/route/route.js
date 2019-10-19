import React, {Component} from 'react';
import {
  View,
  Text,
  AsyncStorage,
  ActivityIndicator,
  StatusBar,
  Platform,
} from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createMaterialTopTabNavigator,
  createDrawerNavigator,
} from 'react-navigation';
import LoginScreen from '../Login';

import HomeScreen from '../salesrep/Home';
import ProfileSScreen from '../salesrep/Profile';
import AddOrderSScreen from '../salesrep/AddOrder';
import StockBalanceScreen from '../salesrep/StockBalance';

import HomeScreen1 from '../dist/Home1';
import ProfileDScreen from '../dist/Profile';
import AddOrderDScreen from '../dist/AddOrder';

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

const AppStack = createMaterialTopTabNavigator(
  {
    PROFILE: {screen: ProfileSScreen},
    ADDORDER: {screen: AddOrderSScreen},
    STOCKBALNCE: {screen: StockBalanceScreen},
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: '#004a00', //color you want to change
      },

      labelStyle: {
        fontSize: 10,
        color: 'white',
        fontFamily: 'Cochin',
        fontWeight: 'bold',
      },
    },
  },
); /**Sales rep tab Screen */
const App1Stack = createMaterialTopTabNavigator(
  {
    PROFILE: {screen: ProfileDScreen},
    ADDORDER: {screen: AddOrderDScreen},
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: '#004a00', //color you want to change
      },

      labelStyle: {
        fontSize: 15,
        color: 'white',
        fontFamily: 'Cochin',
        fontWeight: 'bold',
      },
    },
  },
); /*Distributor tab Screen */
const AuthStack = createSwitchNavigator({
  Login: {screen: LoginScreen},
});

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: Authentication,
      App: AppStack,
      App1: App1Stack,
      Auth: AuthStack,
      //ProfileS: ProfileSStack,
    },

    {initialRouteName: 'AuthLoading'},
  ),
);
