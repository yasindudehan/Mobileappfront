import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Picker,
  Button,
  Modal,
  TouchableHighlight,
  Alert,
  StatusBar,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Form,
  Icon,
} from 'native-base';
import {createAppContainer, createStackNavigator} from 'react-navigation';

import NewOrderScreen1 from './SelectRouteAndCustomer';
import SalesInvoice from './SalesInvoice';
import Signature from './Signature';
import SalesrepSign from './SalesrepSign';
import SubmitOrder from './SubmitOrder';
class OrderScreenS extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#00363a" barStyle="light-content" />

        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 40,
              fontFamily: 'Cochin',
              fontWeight: 'bold',
              color: '#428e92',
            }}>
            Add Order
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: '#00363a',
              width: 71,
              height: 71,
              borderRadius: 100,
             
              borderColor: '#428e92',
            }}
            onPress={this.newOrder}>
            <Image source={require('../Image/add.png')}
              style={{width:90,height: 90,}}/>
           
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  newOrder = () => {
    // alert('AddNew Order');
    this.props.navigation.navigate('Route');
  };
}

const styles = (StyleSheet.salesrepNeworder = {
  container: {
    flex: 1,
    backgroundColor: '#00363a',
  },
  routeText: {
    margin: 10,
    fontSize: 20,
  },
  backlogo: {
    width: 40,
    height: 30,
    margin: 0,
  },
  picker: {
    backgroundColor: 'skyblue',
    height: 40,
    margin: 10,
  },
});
/*const MainNavigator = createStackNavigator({
  Home: {screen: OrderScreenS},
  Route: {screen: NewOrderScreen1},
  SalesInvoice: {screen: SalesInvoice},
  Signature: {screen: Signature},
  SalesrepSign: {screen: SalesrepSign},
  SubmitOrder: {screen: SubmitOrder},
});

const App = createAppContainer(MainNavigator);
*/
export default OrderScreenS;
