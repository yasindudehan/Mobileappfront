import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  DatePickerIOSComponent,
  ActivityIndicator,
  FlatList,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import Axios from 'axios';
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
  CardItem,
  Card,
} from 'native-base';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from 'react-native-table-component';
import {TextInput} from 'react-native-gesture-handler';
export default class StockBalanceScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: {},
      isLoaded: true,
      currentLogitude: 'unknown',
      currentLatitude: 'unknown',
    };
  }
  async componentDidMount() {
    await Axios.get('http://192.168.1.102:4000/product')

      .then(json => {
        this.setState({
          isLoaded: true,
          products: json.data[0],
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
  componentWillUnmount = () => {
    navigator.geolocation.clearWatch(this.watchID);
  };
  render() {
    const {products} = this.state;
    const a = 100;
    const b = 1000;
    if (this.state.isLoaded === false) {
      return <ActivityIndicator />;
    } else {
      return (
        <View>
          <Table>
            <View
              style={{
                flex: 3,
                alignSelf: 'stretch',
                borderWidth: 1,
                borderColor: 'green',
                borderBottomWidth: 0,
                marginBottom: 50,
                backgroundColor: 'green',
              }}>
              <Text>Product Name</Text>
            </View>
            <View
              style={{
                flex: 3,
                flexDirection: 'row',
                alignSelf: 'stretch',
                borderWidth: 1,
                borderColor: 'green',
                borderBottomWidth: 0,
                marginBottom: 50,
              }}>
              <View
                style={{
                  flex: 2,
                  alignSelf: 'stretch',
                  borderWidth: 1,
                  borderColor: 'green',
                  borderBottomWidth: 0,
                }}>
                <Text>Weight</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignSelf: 'stretch',
                  borderWidth: 1,
                  borderColor: 'green',
                  borderBottomWidth: 0,
                }}>
                <Text>Qut</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignSelf: 'stretch',
                  borderWidth: 1,
                  borderColor: 'green',
                  borderBottomWidth: 0,
                }}>
                <Text>Rate</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignSelf: 'stretch',
                  borderWidth: 1,
                  borderColor: 'green',
                  borderBottomWidth: 0,
                }}>
                <Text>Value</Text>
              </View>
            </View>

            {Object.keys(products).map((p, i) => {
              return (
                <View>
                  <View style={{backgroundColor: 'green'}}>
                    <Text key={{i}}>{products[p].name}</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignSelf: 'stretch',
                      borderWidth: 1,
                      borderColor: 'green',
                      borderBottomWidth: 0,
                    }}>
                    <View style={{flex: 2}}>
                      <Text key={i}>{products[p].weight}</Text>
                    </View>
                    <View style={{flex: 1}}>
                      <TextInput placeholder="____" key={i} />
                    </View>
                    <View style={{flex: 1}}>
                      <Text key={i}>{products[p].rate}</Text>
                    </View>
                    <View style={{flex: 1}}>
                      <Text key={i}>-------</Text>
                    </View>
                  </View>
                </View>
              );
            })}
            <Text>{this.state.initialPosition}</Text>
            <Text></Text>
          </Table>
        </View>
      );
    }
  }
}
const styles = (StyleSheet.stockBalance = {
  container: {
    flex: 1,
    backgroundColor: '#00363a',
  },
});
