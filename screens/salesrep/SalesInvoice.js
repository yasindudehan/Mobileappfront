//import liraries
import React, {Component} from 'react';
import Axios from 'axios';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Picker,
  TextInput,
  PermissionsAndroid,
  Platform,
  ActivityIndicator,
  AsyncStorage,
  TouchableHighlightBase,
} from 'react-native';
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Right,
  Left,
  Form,
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

import Geolocation from '@react-native-community/geolocation';
import Date from './Date';
import {green} from 'ansi-colors';
//;

// create a component
var quts_arr = [];
var rate_arr = [];
var price_arr = [];
var total = 0;
class SalesInvoice extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      qut: 0,
      quts: [],
      price: 0,
      prices: [],
      rates: [],
      totalValue: 0,
      total: '0',
      CustomerName: '',
      CustomerAdd: '',
      products: [],
      pay_type: '/',
      currentLongitude: 'un',
      currentLatitude: 'un',
      isLoaded: false,
      username: '',
      disName: '',
      stockId: '',
      Id: 0,
      stockBalance: [],
    };
  }
  componentDidMount = async () => {
    const username = await AsyncStorage.getItem('username');
    const disName = await AsyncStorage.getItem('distName');
    this.setState({username: username});
    this.setState({disName: disName});
    Axios.get(`http://192.168.1.105:4000/product`)
      .then(json => {
        this.setState({
          isLoaded: true,
          products: json.data[0],
        });
      })
      .catch(error => {
        console.error(error);
      });
    this.setState({
      CustomerAdd: 
        this.props.navigation.getParam('custAddress'),
      
      CustomerName: this.props.navigation.getParam('custName'),
    });
    Axios.get(`http://192.168.1.105:4000/order/getId`).then(json => {
      this.setState({
        stockId: json.data[0],
      });
      const stockId = this.state.stockId._id;
      this.setState({Id: stockId});
    });
  };
  async UNSAFE_componentWillMount() {
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

          if (true) {
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
  }

  static navigationOptions = {headerStyle: {backgroundColor: '#005f63'}};
  render() {
    if (this.state.isLoaded === false) {
      return (
        <View>
          <ActivityIndicator />
          <Text>....</Text>
        </View>
      );
    } else {
      return (
        <Container style={styles.container}>
          <Content padder>
            <Card
              style={{
                borderwidth: 2,
                borderColor: 'green',
                backgroundColor: '#ebe6e6',
              }}>
              <Table>
                <Cell
                  data={['SALESINVOICE']}
                  textStyle={{fontSize: 25, color: 'green'}}
                />

                <Date />

                <Row
                  data={['Customer  Name :', this.state.CustomerName]}
                  textStyle={{fontSize: 20}}
                />
                <Row
                  data={['Customer Address :', this.state.CustomerAdd]}
                  textStyle={{fontSize: 20}}
                />
                <Row
                  data={['Sales Rep  Name :', this.state.username]}
                  textStyle={{fontSize: 20}}
                />
              </Table>
              <Table>
                <View
                  style={{
                    flex: 3,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                    backgroundColor: 'green',
                  }}>
                  <Text style={{color: 'white'}}>Product</Text>
                </View>
                <View
                  style={{
                    flex: 3,
                    flexDirection: 'row',
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'white',

                    backgroundColor: 'green',
                  }}>
                  <View
                    style={{
                      flex: 1,
                      alignSelf: 'stretch',
                      borderWidth: 1,
                      borderColor: 'white',
                      borderBottomWidth: 0,
                    }}>
                    <Text style={{color: 'white'}}>Weight</Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      alignSelf: 'stretch',
                      borderWidth: 1,
                      borderColor: 'white',
                      borderBottomWidth: 0,
                    }}>
                    <Text style={{color: 'white'}}>Rate</Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      alignSelf: 'stretch',
                      borderWidth: 1,
                      borderColor: 'white',
                      borderBottomWidth: 0,
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
                    }}>
                    <Text style={{color: 'white'}}>Value</Text>
                  </View>
                </View>
                {Object.keys(this.state.products).map((p, i) => {
                  rate_arr[
                    [
                      this.state.products[p].name +
                        this.state.products[p].weight,
                    ]
                  ] = this.state.products[p].rate;
                  return (
                    <View>
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
                            flex: 3,
                            alignSelf: 'stretch',
                            borderWidth: 1,
                            borderColor: 'green',
                            borderBottomWidth: 0,
                            backgroundColor: 'green',
                          }}>
                          <Text style={{color: 'white'}}>
                            {this.state.products[p].name}
                          </Text>
                        </View>
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
                            alignSelf: 'stretch',
                            borderWidth: 1,
                            borderColor: 'green',
                            borderBottomWidth: 0,
                          }}>
                          <Text>{this.state.products[p].weight}</Text>
                        </View>
                        <View
                          style={{
                            flex: 1,
                            alignSelf: 'stretch',
                            borderWidth: 1,
                            borderColor: 'green',
                            borderBottomWidth: 0,
                          }}>
                          <Text
                            name={
                              this.state.products[p].name +
                              this.state.products[p].weight
                            }
                            style={{textAlign: 'center', FontSize: 10}}
                            key={i}>
                            {this.state.products[p].rate}
                          </Text>
                        </View>
                        <View
                          style={{
                            flex: 1,
                            alignSelf: 'stretch',
                            borderWidth: 1,
                            borderColor: 'green',
                            borderBottomWidth: 0,
                          }}>
                          <TextInput
                            style={{textAlign: 'center', FontSize: 10}}
                            keyboardType="numeric"
                            placeholder="____"
                            name={
                              this.state.products[p].name +
                              this.state.products[p].weight
                            }
                            value={this.state.quts}
                            key={i}
                            onChangeText={qut =>
                              this.qutchange(
                                qut,
                                this.state.products[p].name +
                                  this.state.products[p].weight,
                              )
                            }
                          />
                        </View>
                        <View
                          style={{
                            flex: 1,
                            alignSelf: 'stretch',
                            borderWidth: 1,
                            borderColor: 'green',
                            borderBottomWidth: 0,
                          }}>
                          <Text
                            name={
                              this.state.products[p].name +
                              this.state.products[p].weight
                            }
                            style={{textAlign: 'center', FontSize: 10}}
                            key={i}>
                            {
                              this.state.prices[
                                [
                                  this.state.products[p].name +
                                    this.state.products[p].weight,
                                ]
                              ]
                            }
                          </Text>
                        </View>
                      </View>
                    </View>
                  );
                })}
              </Table>

              <Table>
                <View
                  style={{
                    flex: 3,
                    flexDirection: 'row',
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',

                    height: 50,
                  }}>
                  <View
                    style={{
                      flex: 3,
                      alignSelf: 'stretch',
                      borderWidth: 1,
                      borderColor: 'green',

                      backgroundColor: '#BDFDB3',
                    }}>
                    <Text>TOTAL</Text>
                  </View>
                  <View
                    style={{
                      flex: 2.15,
                      alignSelf: 'stretch',
                      borderWidth: 1,
                      borderColor: 'green',

                      backgroundColor: '#BDFDB3',
                    }}>
                    <Text>Rs {this.state.totalValue}</Text>
                  </View>
                </View>
              </Table>
              <Card
                style={{
                  alignSelf: 'stretch',
                  backgroundColor: '#BDFDB3',
                  borderWidth: 1,
                  borderColor: 'green',
                }}>
                <Picker
                  selectedValue={this.state.pay_type}
                  style={{witdth: 0, alignSelf: 'stretch'}}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({pay_type: itemValue})
                  }>
                  <Picker.Item label="Pay type" value=" / " />
                  <Picker.Item label="Cash" value="Cash" />
                  <Picker.Item label="Cheque" value="Cheque" />
                  <Picker.Item label="Credit" value="Credit" />
                </Picker>
              </Card>
            </Card>
          </Content>

          <TouchableOpacity
            onPress={this.nextPage}
            style={{
              backgroundColor: '#00363a',
              margin: 20,
              marginLeft: 200,
              width: 100,
              height: 50,
              borderRadius: 20,
              borderWidth: 2,
              borderColor: '#006064',
            }}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                marginTop: 10,
                fontSize: 20,
                fontWeight: 'bold',
                overflow: 'hidden',
              }}>
              Next
            </Text>
          </TouchableOpacity>
        </Container>
      );
    }
  }

  nextPage = e => {
    var ID = function() {
      return (
        '_' +
        Math.random()
          .toString(36)
          .substr(2, 9)
      );
    };
    e.preventDefault();

    const order = {
      salesrepName: this.state.username,
      distName: this.state.disName,
      CustomerAddress: this.state.CustomerAdd,
      pay_type: this.state.pay_type,
      Latitude: this.state.currentLatitude,
      Longitude: this.state.currentLongitude,
      customerName: this.state.CustomerName,

      teapouch20: {
        qut: parseInt(this.state.quts['tea pouch20g']),
        price: this.state.prices['tea pouch20g'],
      },
      teapouch50: {
        qut: parseInt(this.state.quts['tea pouch50g']),
        price: this.state.prices['tea pouch50g'],
      },
      teapouch100: {
        qut: parseInt(this.state.quts['Tea pouch100g']),
        price: this.state.prices['Tea pouch100g'],
      },
      teapouch200: {
        qut: parseInt(this.state.quts['Tea pouch200g']),
        price: this.state.prices['Tea pouch200g'],
      },
      teapouch400: {
        qut: parseInt(this.state.quts['Tea pouch400g']),
        price: this.state.prices['Tea pouch400g'],
      },
      teapouch1kg1: {
        qut: parseInt(this.state.quts['Tea pouch Premium Quality1kg']),
        price: this.state.prices['Tea pouch Premium Quality1kg'],
      },
      teapouch1kg2: {
        qut: parseInt(this.state.quts['Tea pouch Export Quality1kg']),
        price: this.state.prices['Tea pouch Export Quality1kg'],
      },
      teapouch1kg3: {
        qut: parseInt(this.state.quts['Tea pouch BOPF Quality1kg']),
        price: this.state.prices['Tea pouch BOPF Quality1kg'],
      },
      teapouch1kg4: {
        qut: parseInt(this.state.quts['Tea pouch Catering Pack1kg']),
        price: this.state.prices['Tea pouch Catering Pack1kg'],
      },
      teabag1: {
        qut: parseInt(this.state.quts['Teabag Packet Type25pack']),
        price: this.state.prices['Teabag Packet Type25pack'],
      },
      teabag2: {
        qut: parseInt(this.state.quts['Teabag Packet Type50pack']),
        price: this.state.prices['Teabag Packet Type50pack'],
      },
      teabag3: {
        qut: parseInt(this.state.quts['Teabag Packet Type100pack']),
        price: this.state.prices['Teabag Packet Type100pack'],
      },
      teasachet1: {
        qut: parseInt(this.state.quts['Tea sachet Catering Type250Bag']),
        price: this.state.prices['Tea sachet Catering Type250Bag'],
      },
      teasachet2: {
        qut: parseInt(this.state.quts['Tea sachet Catering Type500Bag']),
        price: this.state.prices['Tea sachet Catering Type500Bag'],
      },
      teasachet3: {
        qut: parseInt(this.state.quts['Tea sachet Catering Type1000Bag']),
        price: this.state.prices['Tea sachet Catering Type1000Bag'],
      },
      teabulk1: {
        qut: parseInt(this.state.quts['Tea bulk Premium Quality5kg']),
        price: this.state.prices['Tea bulk Premium Quality5kg'],
      },
      teabulk2: {
        qut: parseInt(this.state.quts['Tea bulk Export Quality5kg']),
        price: this.state.prices['Tea bulk Export Quality5kg'],
      },
      teabulk3: {
        qut: parseInt(this.state.quts['Tea bulk Catering Quality5kg']),
        price: this.state.prices['Tea bulk Catering Quality5kg'],
      },
      teabulk4: {
        qut: parseInt(this.state.quts['Tea bulk Export Quality25kg']),
        price: this.state.prices['Tea bulk Export Quality25kg'],
      },
      teabulk5: {
        qut: parseInt(this.state.quts['Tea bulk Tea Box25kg']),
        price: this.state.prices['Tea bulk Tea Box25kg'],
      },
      teabulk6: {
        qut: parseInt(this.state.quts['Tea bulk Bag Type50kg']),
        price: this.state.prices['Tea bulk Bag Type50kg'],
      },
      teabottle: {
        qut: parseInt(this.state.quts['Tea bottle250g']),
        price: this.state.prices['Tea bottle250g'],
      },
      teabasket1: {
        qut: parseInt(this.state.quts['Tea Basket PF-l4.5kg']),
        price: this.state.prices['Tea Basket PF-l4.5kg'],
      },
      teabasket2: {
        qut: parseInt(this.state.quts['Tea Basket BP-l4kg']),
        price: this.state.prices['Tea Basket BP-l4kg'],
      },
      totalValue: this.state.totalValue,
    };

    if (this.state.pay_type !== '/' && this.state.totalValue !== 0) {
      Axios.post(`http://192.168.1.105:4000/order/submit`, order)
        .then(response => {
          console.log('', response);
          console.log(response.data);
        })
        .catch(err => {
          console.log(err);
        });
       Axios.put(
        `http://192.168.1.105:4000/stock/getstock/${this.state.Id}`,
        order,
      )
        .then(response => {
          console.log('', response);
        })
        .catch(err => {
          console.warn(err);
        });

      this.props.navigation.navigate('Signature', {
        id: Object.assign({}, this.state.quts),
        order:order,
        custEmail:this.props.navigation.state.params.custEmail,
      });
    }
  };
  qutchange = (e, i) => {
    quts_arr[[i]] = e;
    price_arr[[i]] = quts_arr[[i]] * rate_arr[[i]];

    this.setState({i: e});
    this.setState({rates: rate_arr});
    this.setState({quts: quts_arr});
    this.setState({prices: price_arr});
    var total = 0;
    {
      Object.keys(this.state.products).map((p, i) => {
        if (
          price_arr[
            [this.state.products[p].name + this.state.products[p].weight]
          ] !== undefined
        ) {
          total =
            total +
            price_arr[
              [this.state.products[p].name + this.state.products[p].weight]
            ];
        }
        // }
      });
    }
    this.setState({totalValue: total});
    //console.warn(this.state.totalValue);
    //console.warn(price_arr[[i]]);
    // this.setState({[quts[i]]: e});
    //  console.warn(totalvalue);
    /* total = total + price_arr[[i]];
    this.setState({totalValue: total}) */
  };
  totalValue = () => {
    console.warn('fjsfsdkjfsjl');
  };
}

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00363a',
  },
  invoiceMain: {
    marginBottom: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    fontFamily: 'Cochin',
  },
  invoiceTotal: {
    marginBottom: 20,
    fontWeight: 'bold',
    fontFamily: 'Cochin',
  },
  head: {height: 40},
  text: {margin: 6, color: 'green'},
});

//make this component available to the app
export default SalesInvoice;
