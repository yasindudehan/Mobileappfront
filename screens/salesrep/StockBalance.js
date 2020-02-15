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

var quts_arr = [];
var rate_arr = [];
var price_arr = [];
var total = 0;
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
    };
  }

  componentDidMount = async () => {
    const repName = await AsyncStorage.getItem('username');
    this.setState({repName: repName});
    await Axios.post('http://192.168.1.104:4000/login/salesrep', {
      userName: repName,
    }).then(json => {
      this.setState({repInfo: json.data[0]});

      //  console.warn(this.state.repInfo.distributor);
    });
    const distname = this.state.repInfo.distributor;
    this.setState({distName: distname});
    await Axios.post('http://192.168.1.104:4000/stock/getstock', {
      repname: repName,
      distname: distname,
    }).then(json => {
      this.setState({stockBalance: json.data[0]});
      //console.warn(this.state.stockBalance['teapouch20']);
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
    } = this.state;
    const a = 100;
    const b = 1000;

    if (this.state.isLoaded === false) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Container style={styles.container}>
            <Content padder>
              {Object.keys(stockBalance).map((item, i) => {
                quts_arr[item] = parseInt(stockBalance[item].qut);

                return (
                  <Card>
                    <Body>
                      <Text style={styles.TextStyle1}>
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
                        style={{flex: 1}}
                        percent={((b - a) / b) * 100}
                        radius={100}
                        borderWidth={5}
                        color="#a19b03"
                        shadowColor="#131414"
                        bgColor="#00363a">
                        <Text style={styles.TextStyle}>
                          {((b - a) / b) * 100}%
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
