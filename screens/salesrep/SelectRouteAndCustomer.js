import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Icon,
  Picker,
  Form,
  Card,
  CardItem,
  Text,
  ListItem,
  Left,
  Right,
  List,
  Button,
  Footer,
  Radio,
  Body,
} from 'native-base';
import Axios from 'react-native-axios';
import {
  View,
  TouchableOpacity,
  ScrollView,
  CheckBox,
  Option,
  Image,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import {FlatList, TextInput} from 'react-native-gesture-handler';
//;
export default class SelectRoute extends React.Component {
  static navigationOptions = {headerStyle: {backgroundColor: '#006064'}};
  constructor(props) {
    super(props);
    this.state = {
      selected: 'k',
      valueselected: false,
      routes: [],
      sRoute: '',
      shops: [],
      shopselect: '/',
      isLoding: false,
      custadd: '/',
      shopemail:"",
      refreshing: false,
    };
  }

  async componentDidMount() {
    Axios.get(`http://192.168.1.101:4000/select`)
      .then(res => {
        this.setState({
          routes: res.data,
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  onValueChange(value) {
    this.setState({
      selected: value,
    });
  }
  updateRoute = async(sRoute) => {
    this.setState({sRoute: sRoute});
    Axios.post(`http://192.168.1.101:4000/select`, {
      route: sRoute,
    })
      .then(res => {
        this.setState({
          shops: res.data,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
  _onRefresh = () => {
    this.setState({refreshing: true});
    fetchData().then(() => {
      this.setState({refreshing: false});
    });
  };

  render() {
    if (this.state.isLoaded === false) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      );
    } else {
      const newArray = [];
      this.state.routes.forEach(obj => {
        if (!newArray.some(o => o.route === obj.route)) {
          newArray.push({...obj});
        }
      });
      console.log(newArray);

      return (
       
        <Container style={{backgroundColor: '#00363a'}}
        
        
        >
       
    
          <Text
            style={{marginLeft: 5, fontFamily: 'Cochin', fontWeight: 'bold'}}>
            Select Route
          </Text>

          <Card style={{backgroundColor: '#428e92'}}>
            <Form>
           
              <Picker
                style={{witdth: 0}}
                mode="dropdown"
                placeholder="Select One"
                placeholderStyle={{color: '#2874F0'}}
                note={true}
                selectedValue={this.state.sRoute}
                onValueChange={this.updateRoute}>
                <Picker.Item label="Select  Route" value="non" />
                {newArray.map(data => {
                  return (
                    <Picker.Item
                      label={data.route}
                      value={data.route}
                      key={data.route}
                    />
                  );
                })}
              </Picker>
            </Form>
          </Card>
          <Text
            style={{marginLeft: 5, fontFamily: 'Cochin', fontWeight: 'bold'}}>
            Select Customer
          </Text>
          <Content>
            <Card style={{backgroundColor: '#428e92'}}>
              <ScrollView>
                {this.state.shops.map((shop, index) => {
                  return (
                    <View>
                      {this.state.shopselect == shop.shop ? (
                        <TouchableOpacity key={shop._id}>
                          <View 
                          style={{
                            flex: 1,
                            flexDirection: 'row',
                            borderWidth: 1,
                            borderColor: 'white',
                            }}>
                            <Text key={index} style={{margin: 5, flex: 1}}>
                              {shop.shop}
                            </Text>

                            <Image
                              style={{width: 20, height: 20, margin: 5}}
                              source={require('../Image/True.png')}
                              key={index}
                            />
                          </View>
                          
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                          key={index}
                          onPress={() => {
                            this.setState({
                              shopselect: shop.shop,
                              custadd: shop.area,
                              shopemail:shop.email
                            });
                          }}>
                          <View
                            style={{
                              flex: 1,
                              flexDirection: 'row',
                              borderWidth: 1,
                              borderColor: 'white',
                            }}>
                            <Text key={shop._id} style={{margin: 5, flex: 1}}>
                              {shop.shop}
                            </Text>

                            <Image
                              style={{width: 20, height: 20, margin: 5}}
                              source={require('../Image/false.png')}
                              key={index}
                            />
                          </View>
                        </TouchableOpacity>
                      )}
                    </View>
                  );
                })}
              </ScrollView>
            </Card>
          </Content>
          <Content>
            
            <TouchableOpacity
              style={{
                backgroundColor: '#00363a',
                margin: 20,
                marginLeft: 190,
                width: 100,
                height: 50,
                borderRadius: 20,
                borderWidth: 2,
                borderColor: '#428e92',
              }}
              onPress={this.NextPage}>
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
           
          </Content>
        </Container>
      );
    }
  }

  NextPage = () => {
    if (this.state.shopselect !== '/') {
      var customer = this.state.shopselect;
      var custadd = this.state.custadd;
      var sRoute = this.state.sRoute;
      var custemail=this.state.shopemail;
      var customeradd = this.props.navigation.navigate('SalesInvoice', {
        custName: customer,
        custAddress: custadd,
        custRoute: sRoute,
        custEmail:custemail,
      });
    }
  };
}
