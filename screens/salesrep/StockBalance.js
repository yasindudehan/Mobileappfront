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
  AsyncStorage,
  RefreshControl,
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
//;

var array1 = [];
var array2 = [];
var presntage_arr = [];
export default class StockBalanceScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stockBalance: [],
      isLoaded: true,
      qut: 0,
      quts: [],
      price: 0,
      prices: [],
      totalValue: 0,
      repName: '',
      repInfo: [],
      distName: '',
      data: [],
      stock: [],
      isLoading: false,
      rerefreshing: false,
    };
  }

  componentDidMount = async () => {
    const repName = await AsyncStorage.getItem('username');

    this.setState({repName: repName});
    await Axios.post(`http://192.168.1.101:4000/login/salesrep`, {
      userName: repName,
    }).then(json => {
      this.setState({data: json.data[0]});
      const datas = this.state.data;

      this.setState({repInfo: datas});
      //  console.warn(this.state.repInfo.distributor);
    });
    const distname = this.state.repInfo.distributor;
    AsyncStorage.setItem('distName', this.state.repInfo.distributor);
    this.setState({distName: distname});
    await Axios.post(`http://192.168.1.101:4000/stock/getstock`, {
      repname: repName,
      distname: distname,
    }).then(json => {
      const stockB = json.data[0];
      Object.keys(stockB).map((item, i) => {
        if (stockB[item].qut >= 0) {
          array1[item] = stockB[item];
        }
      });
      this.setState({stockBalance: array1});
      //  console.warn(this.state.stockBalance);
      if (this.state.stockBalance === undefined) {
        this.setState({isLoading: false});
      } else {
        this.setState({isLoading: true});
      }
    });
    await Axios.post(`http://192.168.1.101:4000/stock/stock`, {
      repname: repName,
      distname: distname,
    }).then(json => {
      const stoc = json.data[0];
      Object.keys(stoc).map((item, i) => {
        if (0 <= stoc[item].qut) {
          array2[item] = stoc[item];
        }
      });

      this.setState({stock: array2});

      //console.warn(this.state.stockBalance['teapouch20']);
    });
    Object.keys(this.state.stock).map((item, i) => {
      presntage_arr[item] =
        (this.state.stockBalance[item].qut / this.state.stock[item].qut) * 100;
    });

    /*Axios.get('http://192.168.1.104:4000/product')
      .then(json => {
        this.setState({
          isLoaded: true,
          products: json.data[0],
        });
      })
      .catch(error => {
        console.error(error);
      });*/
  };
  _onRefresh = () => {
    this.setState({refreshing: true});
    fetchData().then(() => {
      this.setState({refreshing: false});
    });
  }
  render() {
    const {
      products,
      qut,
      price,
      quts,
      prices,
      totalValue,
      repName,
      distName,
      repInfo,
      stockBalance,
      stock,
    } = this.state;

    if (this.state.isLoading === false) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      );
    } else {
      return (
        <View style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }>
          <Container style={styles.container}>
            <Content padder>
              {Object.keys(stock).map((item, i) => {
                return (
                  <Card>
                    <Body>
                      <Text style={styles.TextStyle1} key={i}>
                        {stockBalance[item].name}
                      </Text>
                    </Body>
                    <Body>
                      <Text key={i} style={styles.TextStyle1}>
                        {stockBalance[item].weight}
                      </Text>
                    </Body>

                    <CardItem style={{backgroundColor: '#00363a', height: 250}}>
                      <ProgressCircle
                        key={i}
                        style={{flex: 1}}
                        percent={stockBalance[item].qut
                          //stock[item].qut !== null? ((stockBalance[item].qut / stock[item].qut) * 100) : 0
                        }
                        radius={100}
                        borderWidth={5}
                        color="#a19b03"
                        shadowColor="#131414"
                        bgColor="#00363a">
                        <Text style={styles.TextStyle} key={i}>
                          {stockBalance[item].qut}
                        </Text>
                      </ProgressCircle>
                    </CardItem>
                  </Card>
                );
              })}
            </Content>
          </Container>
        </View>
      );
    }
  }
}

const styles = (StyleSheet.stockBalance = {
  container: {
    flex: 1,
  },
  TextStyle: {
    fontSize: 25,
    fontFamily: 'roboto',
    color: 'white',
  },
  TextStyle1: {
    fontSize: 25,
    fontFamily: 'roboto',
    color: '#00363a',
  },
});
