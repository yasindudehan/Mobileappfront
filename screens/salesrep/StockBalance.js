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
  Dimensions,
  ScrollView,
  SafeAreaView,
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
import Date from './Date';
import {TabNavigator} from 'react-navigation';
import Geolocation from '@react-native-community/geolocation';
import { IP} from 'react-native-dotenv';

var quts_arr = [];
var rate_arr = [];
var price_arr = [];
var total = 0;
export default class StockBalanceScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: {},
      isLoaded: true,
      latitude: 'latitude',
      longitude: 'longitude',
      error: null,
      currentLongitude: 'un',
      currentLatitude: 'un',
      qut: 0,
      quts: [],
      price: 0,
      prices: [],
      totalValue: 0,
    };
  }

  /* async componentWillMount() {
    /*  navigator.geolocation.getCurrentPosition(
      position => {
        console.log('wokeeey');
        console.log(position);
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      error => this.setState({error: error.message}),
      {enableHighAccuracy: false, timeout: 200000, maximumAge: 1000},
    );
    var that = this;
    //Checking for the permission just after component loaded
    if (Platform.OS === 'ios') {
      this.callLocation(that);
    } else {
      async function requestLocationPermission() {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This App needs to Access your location',
            },
          );

          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //To Check, If Permission is granted

            that.callLocation(that);
          } else {
            alert('Permission Denied');
          }
        } catch (err) {
          alert('err', err);
          console.warn(err);
        }
      }
      requestLocationPermission();
    }
  }
  callLocation(that) {
    //alert("callLocation Called");

    Geolocation.getCurrentPosition(
      //Will give you the current location
      position => {
        console.warn('ghjghjgudygsyuyud');
        const currentLongitude = JSON.stringify(position.coords.longitude);
        //getting the Longitude from the location json
        const currentLatitude = JSON.stringify(position.coords.latitude);
        //getting the Latitude from the location json

        that.setState({currentLongitude: currentLongitude});
        //Setting state Longitude to re re-render the Longitude Text
        that.setState({currentLatitude: currentLatitude});
        //Setting state Latitude to re re-render the Longitude Text
      },
      error => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
    that.watchID = Geolocation.watchPosition(position => {
      //Will give you the location on location change
      console.log(position);
      const currentLongitude = JSON.stringify(position.coords.longitude);
      //getting the Longitude from the location json
      const currentLatitude = JSON.stringify(position.coords.latitude);
      //getting the Latitude from the location json
      that.setState({currentLongitude: currentLongitude});
      //Setting state Longitude to re re-render the Longitude Text
      that.setState({currentLatitude: currentLatitude});
      //Setting state Latitude to re re-render the Longitude Text
    });
    /* await Axios.get('http://192.168.8.102:4000/product')

      .then(json => {
        this.setState({
          isLoaded: true,
          products: json.data[0],
        });
      })
      .catch(error => {
        console.error(error);
      });
  }*/
  componentDidMount = () => {
    Axios.get(`http://${IP}:4000/product`)
      .then(json => {
        this.setState({
          isLoaded: true,
          products: json.data[0],
        });
      })
      .catch(error => {
        console.error(error);
      });
  };
  render() {
    const {products, qut, price, quts, prices, totalValue} = this.state;
    const a = 100;
    const b = 1000;
    if (this.state.isLoaded === false) {
      return (
        <View>
          <Text>{this.state.currentLatitude}</Text>
        </View>
      );
    } else {
      return (
        <View style={{backgroundColor: '#00363a'}}>
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
            <Text style={{color: 'white'}}>Product Name</Text>
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
                flex: 1,
                alignSelf: 'stretch',
                borderWidth: 1,
                borderColor: 'green',

                borderRightWidth: 2,
                borderBottomWidth: 0,
                backgroundColor: 'white',
                margin: 1,
              }}>
              <Text style={{color: 'white'}}>Weight</Text>
            </View>
            <View
              style={{
                flex: 1,
                alignSelf: 'stretch',
                borderWidth: 1,
                borderColor: 'green',
                borderBottomWidth: 0,
                backgroundColor: 'white',
                margin: 1,
              }}>
              <Text style={{color: 'white'}}>Rate</Text>
            </View>
            <View
              style={{
                flex: 1,
                alignSelf: 'stretch',
                borderWidth: 1,
                borderColor: 'green',
                borderBottomWidth: 0,
                backgroundColor: 'white',
                margin: 1,
              }}>
              <Text style={{color: 'white'}}>Qut</Text>
            </View>
            <View
              style={{
                flex: 1,
                alignSelf: 'stretch',
                borderWidth: 1,
                borderColor: 'green',
                borderBottomWidth: 0,
                backgroundColor: 'white',
                margin: 1,
              }}>
              <Text style={{color: 'white'}}>Value</Text>
            </View>
          </View>

          <ScrollView>
            {Object.keys(products).map((p, i) => {
              rate_arr[[products[p].name + products[p].weight]] =
                products[p].rate;
              return (
                <View>
                  <View style={{backgroundColor: 'green'}}>
                    <Text style={{color: 'white'}} key={{i}}>
                      {products[p].name}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignSelf: 'stretch',
                      borderWidth: 1,
                      borderColor: 'green',
                      borderBottomWidth: 0,
                    }}>
                    <View
                      style={{
                        flex: 1,
                        backgroundColor: 'white',
                        margin: 1,
                      }}>
                      <Text style={{textAlign: 'center', FontSize: 10}} key={i}>
                        {products[p].weight}
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        backgroundColor: 'white',
                        margin: 1,
                      }}>
                      <Text
                        name={products[p].name + products[p].weight}
                        style={{textAlign: 'center', FontSize: 10}}
                        key={i}>
                        {products[p].rate}
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        backgroundColor: 'white',
                        margin: 1,
                      }}>
                      <TextInput
                        style={{textAlign: 'center', FontSize: 10}}
                        keyboardType="numeric"
                        placeholder="____"
                        name={products[p].name + products[p].weight}
                        value={qut}
                        key={i}
                        onChangeText={qut =>
                          this.qutchange(
                            qut,
                            products[p].name + products[p].weight,
                          )
                        }
                      />
                    </View>
                    <View
                      style={{
                        flex: 1,
                        backgroundColor: 'white',
                        margin: 1,
                      }}>
                      <Text
                        name={products[p].name + products[p].weight}
                        style={{textAlign: 'center', FontSize: 10}}
                        key={i}>
                        {price_arr[[products[p].name + products[p].weight]]}
                      </Text>
                    </View>
                  </View>
                </View>
              );
            })}
            <Button title="abc" />
          </ScrollView>
        </View>
      );
    }
  }

  qutchange = (e, i) => {
    // console.warn([i]);

    quts_arr[[i]] = e;
    price_arr[[i]] = quts_arr[[i]] * rate_arr[[i]];
    for (var item in price_arr) {
      total = total + price_arr[item];
      // console.warn('KKKK');
    }

    this.setState({totalValue: total});
    console.warn(this.state.totalValue);
    //console.warn(price_arr[[i]]);
    // this.setState({[quts[i]]: e});
    //  console.warn(totalvalue);
    this.setState({i: e});
  };
}
const styles = (StyleSheet.stockBalance = {
  container: {
    flex: 1,
    backgroundColor: '#00363a',
  },
});
