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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import LoginScreen from '../Login'; //Login screen
//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  sales rep MaterialTopTabNavigator
import HomeScreen from '../salesrep/Home';
import ProfileSScreen from '../salesrep/Profile';
import AddOrderSScreen from '../salesrep/AddOrder';
import StockBalanceScreen from '../salesrep/StockBalance';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Sales rep StackNavigator, Add order
import SelectRoute from '../salesrep/SelectRouteAndCustomer';
import SalesInvoice from '../salesrep/SalesInvoice';
import SignatureS1 from '../salesrep/Signature';
import SignatureS2 from '../salesrep/SalesrepSign';
import SubmitOrderS from '../salesrep/SubmitOrder';
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//distributor Material TopTabNavigator
import HomeScreen1 from '../dist/Home1';
import ProfileDScreen from '../dist/Profile';
import AddOrderDScreen from '../dist/AddOrder';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////distributor Stack Navigator Add order
import Invoice from '../dist/Invoice';
import SignatureD1 from '../dist/SubmitOrder';
import SignatureD2 from '../dist/DistributorSign';
import LastPage from '../dist/LastPage';
///////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Authentication extends React.Component {
  constructor(props) {
    super(props);
    this.loadData();
  }
  render() {
    return (
      <View
        style={{
          alignContent: 'center',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" color="#90f542" />
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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
const SalesrepOrderSatck = createStackNavigator({
  ADDORDER: {screen: AddOrderSScreen},
  Route: {screen: SelectRoute},
  SalesInvoice: {screen: SalesInvoice},
  Signature: {screen: SignatureS1},
  SalesrepSign: {screen: SignatureS2},
  SubmitOrder: {screen: SubmitOrderS},
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DistributorOrderSatck = createStackNavigator({
  ADDORDER: {screen: AddOrderDScreen},

  Invoice: {screen: Invoice},

  SubmitOrder: {screen: SignatureD1},
  DistributorSign: {screen: SignatureD2},
  LastPage: {screen: LastPage},
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const AppStack = createMaterialTopTabNavigator(
  {
    PROFILE: {screen: ProfileSScreen},
    ADDORDER: {screen: SalesrepOrderSatck},
    STOCKBALNCE: {screen: StockBalanceScreen},
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: '#006064', //color you want to change
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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const App1Stack = createMaterialTopTabNavigator(
  {
    PROFILE: {screen: ProfileDScreen},
    ADDORDER: {screen: DistributorOrderSatck},
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: '#006064', //color you want to change
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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
