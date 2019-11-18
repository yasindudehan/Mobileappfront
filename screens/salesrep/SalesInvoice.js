//import liraries
import React, {Component} from 'react';
import Axios from 'axios';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Picker,
  TextInput,
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

import Date from './Date';
import {green} from 'ansi-colors';
// create a component

class SalesInvoice extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
//       salesrepName:"",
//       customerName:"",
//       invoiceNo:'0',
//       teapouch20:{
//         name:'',
//         weight:'',
//         qut:'',
//         price:''
//       },
//        teapouch20:{
//         name:'',
//         weight:'',
//         qut:'',
//         price:''
//       },
//     teapouch20:{
//         name:'',
//         weight:'',
//         qut:'',
//         price:''
//       },
//     teapouch20:{
//         name:'',
//         weight:'',
//         qut:'',
//         price:''
//       },
//     teapouch50:{
//         name:'',
//         weight:'',
//         qut:'',
//         price:''
//       },
//     teapouch100:{
//         name:'',
//         weight:'',
//         qut:'',
//         price:''
//       },
//     teapouch200:{
//         name:'',
//         weight:'',
//         qut:'',
//         price:''
//       },
//     teapouch400:{
//         name:'',
//         weight:'',
//         qut:'',
//         price:''
//       },
//     teapouch1kg1:{
//         name:'',
//         weight:'',
//         qut:'',
//         price:''
//       },
//      teapouch1kg2:{
//         name:'',
//         weight:'',
//         qut:'',
//         price:''
//       },
//      teapouch1kg3:{
//         name:'',
//         weight:'',
//         qut:'',
//         price:''
//       },
//      teapouch1kg4:{
//         name:'',
//         weight:'',
//         qut:'',
//         price:''
//       },
//      teabag1:{
//         name:'',
//         weight:'',
//         qut:'',
//         price:''
//       },
//      teabag2:{
//         name:'',
//         weight:'',
//         qut:'',
//         price:''
//       },
//      teabag3:{
//         name:'',
//         weight:'',
//         qut:'',
//         price:''
//       },
//      teasachet1:{
//         name:'',
//         weight:'',
//         qut:'',
//         price:''
//       },
//      teasachet2:{
//         name:'',
//         weight:'',
//         qut:'',
//         price:''
//       },
//      teasachet3:{
//         name:'',
//         weight:'',
//         qut:'',
//         price:''
//       },
//      teabulk1:{
//         name:'',
//         weight:'',
//         qut:'',
//         price:''
//       },
//     teabulk2:{
//         name:'',
//         weight:'',
//         qut:'',
//         price:''
//       },
//     teabulk3:{
//         name:'',
//         weight:'',
//         qut:'',
//         price:''
//       },
//     teabulk4:{
//         name:'',
//         weight:'',
//         qut:'',
//         price:''
//       },
//       teabulk5:{
//         name:'',
//         weight:'',
//         qut:'',
//         price:''
//       },
//     teabulk6:{
//         name:'',
//         weight:'',
//         qut:'',
//         price:''
//       },
//     teabottle:{
//         name:'',
//         weight:'',
//         qut:'',
//         price:''
//       },
//     teabasket1:{
//         name:'',
//         weight:'',
//         qut:'',
//         price:''
//       },
//     teabasket2:{
//         name:'',
//         weight:'',
//         qut:'',
//         price:''
//       },
//     orderDate:'',
    
      tq1: '0',
      tq2: '0',
      tq3: '0',
      tq4: '0',
      tq5: '0',
      tq6: '0',
      tq7: '0',
      tq8: '0',
      tq9: '0',
      tq10: '0',
      tq11: '0',
      tq12: '0',
      tq13: '0',
      tq14: '0',
      tq15: '0',
      tq16: '0',
      tq17: '0',
      tq18: '0',
      tq19: '0',
      tq20: '0',
      tq21: '0',
      tq22: '0',
      tq23: '0',
      tq24: '0',
      total: '0',
    };
  }

  totalValue = totatvalue => {
    var totalValue =
      parseInt(this.state.tq1) * 30.0 +
      parseInt(this.state.tq2) * 50.0 +
      parseInt(this.state.tq3) * 100.0 +
      parseInt(this.state.tq4) * 200.0 +
      parseInt(this.state.tq5) * 400.0 +
      parseInt(this.state.tq6) * 800.0 +
      parseInt(this.state.tq7) * 800.0 +
      parseInt(this.state.tq8) * 700.0 +
      parseInt(this.state.tq9) * 300.0 +
      parseInt(this.state.tq10) * 500.0 +
      parseInt(this.state.tq11) * 500.0 +
      parseInt(this.state.tq12) * 800.0 +
      parseInt(this.state.tq13) * 300.0 +
      parseInt(this.state.tq14) * 500.0 +
      parseInt(this.state.tq15) * 800.0 +
      parseInt(this.state.tq16) * 3200.0 +
      parseInt(this.state.tq17) * 3200.0 +
      parseInt(this.state.tq18) * 3200.0 +
      parseInt(this.state.tq19) * 20000.0 +
      parseInt(this.state.tq20) * 20000.0 +
      parseInt(this.state.tq21) * 30000.0 +
      parseInt(this.state.tq22) * 350.0 +
      parseInt(this.state.tq23) * 2200.0 +
      parseInt(this.state.tq24) * 2200.0;
    totalValue = totalValue.toFixed(2);
    this.setState({total: totalValue});
  };

  static navigationOptions = {headerStyle: {backgroundColor: '#2bbbad'}};
  render() {
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
                data={['Customer  Name ', ':customer name']}
                textStyle={{fontSize: 10}}
              />
              <Row
                data={['Customer Address ', ':customer address']}
                textStyle={{fontSize: 10}}
              />
            </Table>
            <Table>
              <View
                style={{
                  flex: 3,
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
                  }}>
                  <Text>Product</Text>
                </View>

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
                    flex: 1.5,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>Value</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 3,
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
                  <Text>TEA RANGE</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 3,
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
                  }}>
                  <Text>Tea Pouch</Text>
                </View>

                <View
                  style={{
                    flex: 2,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>20g</Text>
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
                    value={this.state.tq1}//value={this.state.teapouch20.qut}
                    onChangeText={tq1 => this.setState({tq1})}  //onchange fumction
                    placeholder="____"
                    numeric
                    keyboardType="numeric"
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
                  <Text>30.00</Text>
                </View>
                <View
                  style={{
                    flex: 1.5,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text style={{marginTop: 10}}>
                    {(this.state.tq1 * 30).toFixed(2)}//this.state.teapouch20.qut
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flex: 3,
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
                  }}>
                  <Text>Tea Pouch</Text>
                </View>

                <View
                  style={{
                    flex: 2,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>50g</Text>
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
                    value={this.state.tq2}
                    onChangeText={tq2 => this.setState({tq2})}
                    placeholder="____"
                    numeric
                    keyboardType="numeric"
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
                  <Text>50.00</Text>
                </View>
                <View
                  style={{
                    flex: 1.5,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text> {(this.state.tq2 * 50).toFixed(2)}</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 3,
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
                  }}>
                  <Text>Tea Pouch</Text>
                </View>

                <View
                  style={{
                    flex: 2,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>100g</Text>
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
                    value={this.state.tq3}
                    onChangeText={tq3 => this.setState({tq3})}
                    placeholder="____"
                    numeric
                    keyboardType="numeric"
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
                  <Text>100.00</Text>
                </View>
                <View
                  style={{
                    flex: 1.5,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text> {(this.state.tq3 * 100).toFixed(2)}</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 3,
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
                  }}>
                  <Text>Tea Pouch</Text>
                </View>

                <View
                  style={{
                    flex: 2,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>200g</Text>
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
                    value={this.state.tq4}
                    onChangeText={tq4 => this.setState({tq4})}
                    placeholder="____"
                    numeric
                    keyboardType="numeric"
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
                  <Text>200.00</Text>
                </View>
                <View
                  style={{
                    flex: 1.5,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text> {(this.state.tq4 * 200).toFixed(2)}</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 3,
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
                  }}>
                  <Text>Tea Pouch</Text>
                </View>

                <View
                  style={{
                    flex: 2,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>400g</Text>
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
                    value={this.state.tq5}
                    onChangeText={tq5 => this.setState({tq5})}
                    placeholder="____"
                    numeric
                    keyboardType="numeric"
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
                  <Text>400.00</Text>
                </View>
                <View
                  style={{
                    flex: 1.5,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text> {(this.state.tq5 * 400).toFixed(2)}</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 3,
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
                  <Text>01 kg POUCH</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 3,
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
                  }}>
                  <Text>Premium Quality</Text>
                </View>

                <View
                  style={{
                    flex: 2,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>1 kg</Text>
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
                    value={this.state.tq6}
                    onChangeText={tq6 => this.setState({tq6})}
                    placeholder="____"
                    numeric
                    keyboardType="numeric"
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
                  <Text>800.00</Text>
                </View>
                <View
                  style={{
                    flex: 1.5,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text> {(this.state.tq6 * 800).toFixed(2)}</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 3,
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
                  }}>
                  <Text>Export Quality</Text>
                </View>

                <View
                  style={{
                    flex: 2,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>1 kg</Text>
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
                    value={this.state.tq7}
                    onChangeText={tq7 => this.setState({tq7})}
                    placeholder="____"
                    numeric
                    keyboardType="numeric"
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
                  <Text>800.00</Text>
                </View>
                <View
                  style={{
                    flex: 1.5,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text> {(this.state.tq7 * 800).toFixed(2)}</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 3,
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
                  }}>
                  <Text>BOPF Quality</Text>
                </View>

                <View
                  style={{
                    flex: 2,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>1 kg</Text>
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
                    value={this.state.tq8}
                    onChangeText={tq8 => this.setState({tq8})}
                    placeholder="____"
                    numeric
                    keyboardType="numeric"
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
                  <Text>700.00</Text>
                </View>
                <View
                  style={{
                    flex: 1.5,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text> {(this.state.tq8 * 700).toFixed(2)}</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 3,
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
                  }}>
                  <Text>Catering Pack</Text>
                </View>

                <View
                  style={{
                    flex: 2,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>1 kg</Text>
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
                    value={this.state.tq9}
                    onChangeText={tq9 => this.setState({tq9})}
                    placeholder="____"
                    numeric
                    keyboardType="numeric"
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
                  <Text>300.00</Text>
                </View>
                <View
                  style={{
                    flex: 1.5,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text> {(this.state.tq9 * 300).toFixed(2)}</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 3,
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
                  <Text>TEA BAG</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 3,
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
                  }}>
                  <Text>Packet Type</Text>
                </View>

                <View
                  style={{
                    flex: 2,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>25 Pack</Text>
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
                    value={this.state.tq10}
                    onChangeText={tq10 => this.setState({tq10})}
                    placeholder="____"
                    numeric
                    keyboardType="numeric"
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
                  <Text>500.00</Text>
                </View>
                <View
                  style={{
                    flex: 1.5,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text> {(this.state.tq10 * 500).toFixed(2)}</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 3,
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
                  }}>
                  <Text>Packet Type</Text>
                </View>

                <View
                  style={{
                    flex: 2,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>50 Pack</Text>
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
                    value={this.state.tq11}
                    onChangeText={tq11 => this.setState({tq11})}
                    placeholder="____"
                    numeric
                    keyboardType="numeric"
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
                  <Text>500.00</Text>
                </View>
                <View
                  style={{
                    flex: 1.5,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text> {(this.state.tq11 * 500).toFixed(2)}</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 3,
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
                  }}>
                  <Text>Packet Type</Text>
                </View>

                <View
                  style={{
                    flex: 2,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>100 Pack</Text>
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
                    value={this.state.tq12}
                    onChangeText={tq12 => this.setState({tq12})}
                    placeholder="____"
                    numeric
                    keyboardType="numeric"
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
                  <Text>800.00</Text>
                </View>
                <View
                  style={{
                    flex: 1.5,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text> {(this.state.tq12 * 800).toFixed(2)}</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 3,
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
                  <Text>TEA SACHET</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 3,
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
                  }}>
                  <Text>Catering Type</Text>
                </View>

                <View
                  style={{
                    flex: 2,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>250 Bag</Text>
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
                    value={this.state.tq13}
                    onChangeText={tq13 => this.setState({tq13})}
                    placeholder="____"
                    numeric
                    keyboardType="numeric"
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
                  <Text>300.00</Text>
                </View>
                <View
                  style={{
                    flex: 1.5,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text> {(this.state.tq13 * 300).toFixed(2)}</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 3,
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
                  }}>
                  <Text>Catering Type</Text>
                </View>

                <View
                  style={{
                    flex: 2,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>500 Bag</Text>
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
                    value={this.state.tq14}
                    onChangeText={tq14 => this.setState({tq14})}
                    placeholder="____"
                    numeric
                    keyboardType="numeric"
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
                  <Text>500.00</Text>
                </View>
                <View
                  style={{
                    flex: 1.5,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text> {(this.state.tq14 * 800).toFixed(2)}</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 3,
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
                  }}>
                  <Text>Catering Type</Text>
                </View>

                <View
                  style={{
                    flex: 2,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>1000 Bag</Text>
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
                    value={this.state.tq15}
                    onChangeText={tq15 => this.setState({tq15})}
                    placeholder="____"
                    numeric
                    keyboardType="numeric"
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
                  <Text>800.00</Text>
                </View>
                <View
                  style={{
                    flex: 1.5,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text> {(this.state.tq15 * 800).toFixed(2)}</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 3,
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
                  <Text>TEA BULK</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 3,
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
                  }}>
                  <Text>Premium Quality</Text>
                </View>

                <View
                  style={{
                    flex: 2,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>5 kg</Text>
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
                    value={this.state.tq16}
                    onChangeText={tq16 => this.setState({tq16})}
                    placeholder="____"
                    numeric
                    keyboardType="numeric"
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
                  <Text>3200.00</Text>
                </View>
                <View
                  style={{
                    flex: 1.5,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text> {(this.state.tq16 * 3200).toFixed(2)}</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 3,
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
                  }}>
                  <Text>Export Quality</Text>
                </View>

                <View
                  style={{
                    flex: 2,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>5 kg</Text>
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
                    value={this.state.tq17}
                    onChangeText={tq17 => this.setState({tq17})}
                    placeholder="____"
                    numeric
                    keyboardType="numeric"
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
                  <Text>3200.00</Text>
                </View>
                <View
                  style={{
                    flex: 1.5,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text> {(this.state.tq17 * 3200).toFixed(2)}</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 3,
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
                  }}>
                  <Text>Catering Quality</Text>
                </View>

                <View
                  style={{
                    flex: 2,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>5 kg</Text>
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
                    value={this.state.tq18}
                    onChangeText={tq18 => this.setState({tq18})}
                    placeholder="____"
                    numeric
                    keyboardType="numeric"
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
                  <Text>3200.00</Text>
                </View>
                <View
                  style={{
                    flex: 1.5,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text> {(this.state.tq18 * 3200).toFixed(2)}</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 3,
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
                  }}>
                  <Text>Export Quality</Text>
                </View>

                <View
                  style={{
                    flex: 2,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>25 kg</Text>
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
                    value={this.state.tq19}
                    onChangeText={tq19 => this.setState({tq19})}
                    placeholder="____"
                    numeric
                    keyboardType="numeric"
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
                  <Text>20000.00</Text>
                </View>
                <View
                  style={{
                    flex: 1.5,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text> {(this.state.tq19 * 20000).toFixed(2)}</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 3,
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
                  }}>
                  <Text>Tea Box</Text>
                </View>

                <View
                  style={{
                    flex: 2,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>25 kg</Text>
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
                    value={this.state.tq20}
                    onChangeText={tq20 => this.setState({tq20})}
                    placeholder="____"
                    numeric
                    keyboardType="numeric"
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
                  <Text>20000.00</Text>
                </View>
                <View
                  style={{
                    flex: 1.5,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text> {(this.state.tq20 * 20000).toFixed(2)}</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 3,
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
                  }}>
                  <Text>Bag Type</Text>
                </View>

                <View
                  style={{
                    flex: 2,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>50 kg</Text>
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
                    value={this.state.tq21}
                    onChangeText={tq21 => this.setState({tq21})}
                    placeholder="____"
                    numeric
                    keyboardType="numeric"
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
                  <Text>30000.00</Text>
                </View>
                <View
                  style={{
                    flex: 1.5,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text> {(this.state.tq21 * 30000).toFixed(2)}</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 3,
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
                  <Text>TEA BOTTLE</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 3,
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
                  }}>
                  <Text>Tea Bottle</Text>
                </View>

                <View
                  style={{
                    flex: 2,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>250g</Text>
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
                    value={this.state.tq22}
                    onChangeText={tq22 => this.setState({tq22})}
                    placeholder="____"
                    numeric
                    keyboardType="numeric"
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
                  <Text>350.00</Text>
                </View>
                <View
                  style={{
                    flex: 1.5,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text> {(this.state.tq22 * 350).toFixed(2)}</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 3,
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
                  <Text>TEA BASKET RANGE</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 3,
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
                  }}>
                  <Text>PF-l</Text>
                </View>

                <View
                  style={{
                    flex: 2,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>4.5 kg</Text>
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
                    value={this.state.tq23}
                    onChangeText={tq23 => this.setState({tq23})}
                    placeholder="____"
                    numeric
                    keyboardType="numeric"
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
                  <Text>2200.00</Text>
                </View>
                <View
                  style={{
                    flex: 1.5,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text> {(this.state.tq23 * 2200).toFixed(2)}</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 3,
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
                  }}>
                  <Text>BP-l</Text>
                </View>

                <View
                  style={{
                    flex: 2,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>4.0 kg</Text>
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
                    value={this.state.tq24}
                    onChangeText={tq24 => this.setState({tq24})}
                    placeholder="____"
                    numeric
                    keyboardType="numeric"
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
                  <Text>2200.00</Text>
                </View>
                <View
                  style={{
                    flex: 1.5,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text> {(this.state.tq24 * 2200).toFixed(2)}</Text>
                </View>
              </View>
            </Table>
            <Table>
              <View
                style={{
                  flex: 3,
                  flexDirection: 'row',
                  alignSelf: 'stretch',
                  borderWidth: 1,
                  borderColor: 'green',
                  borderBottomWidth: 0,
                  height: 50,
                }}>
                <View
                  style={{
                    flex: 3,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
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
                    borderBottomWidth: 0,
                    backgroundColor: '#BDFDB3',
                  }}>
                  <Text onPress={this.totalValue}>Rs {this.state.total}</Text>
                </View>
              </View>
            </Table>
          </Card>
        </Content>

        <TouchableOpacity
          onPress={this.nextPage}
          style={{
            backgroundColor: '#58eb34',
            margin: 20,
            marginLeft: 200,
            width: 100,
            height: 50,
            borderRadius: 20,
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
  nextPage = e => {
    e.preventDefault();
    const order = {
      qut1: this.state.tq1,
      qut2: this.state.tq2,
      qut3: this.state.tq3,
      qut4: this.state.tq4,
      qut5: this.state.tq5,
      qut6: this.state.tq6,
      qut7: this.state.tq7,
      qut8: this.state.tq8,
      qut9: this.state.tq9,
      qut10: this.state.tq10,
      qut11: this.state.tq11,
      qut12: this.state.tq12,
      qut13: this.state.tq13,
      qut14: this.state.tq14,
      qut15: this.state.tq15,
      qut16: this.state.tq16,
      qut17: this.state.tq17,
      qut18: this.state.tq18,
      qut19: this.state.tq19,
      qut20: this.state.tq20,
      qut21: this.state.tq21,
      qut22: this.state.tq22,
      qut23: this.state.tq23,
      qut24: this.state.tq24,
       //   totalValue: this.state.totalValue,
      // salesrepName: this.state.salesrepName,
//     customerName: this.state.customerName,
//     Invoiceno: this.state.Invoiceno,
//     teapouch20: this.state.teapouch20,
//     name: this.state.name,             or this.state.teapouch20.name
//     weight: this.state.weight,
//     qut: this.state.qut,
//     price: this.state.price,
//     teapouch50: req.body.teapouch50,
//     name: req.body.name,
//     weight: req.body.weight,
//     qut: req.body.qut,
//     price: req.body.price,
//     teapouch100: req.body.teapouch100,
//     name: req.body.name,
//     weight: req.body.weight,
//     qut: req.body.qut,
//     price: req.body.price,
//     teapouch200: req.body.teapouch200,
//     name: req.body.name,
//     weight: req.body.weight,
//     qut: req.body.qut,
//     price: req.body.price,
//     teapouch400: req.body.teapouch400,
//     name: req.body.name,
//     weight: req.body.weight,
//     qut: req.body.qut,
//     price: req.body.price,
//     teapouch1kg1: req.body.teapouch1kg1,
//     name: req.body.name,
//     weight: req.body.weight,
//     qut: req.body.qut,
//     price: req.body.price,
//     teapouch1kg2: req.body.teapouch1kg2,
//     name: req.body.name,
//     weight: req.body.weight,
//     qut: req.body.qut,
//     price: req.body.price,
//     teapouch1kg3: req.body.teapouch1kg3,
//     name: req.body.name,
//     weight: req.body.weight,
//     qut: req.body.qut,
//     price: req.body.price,
//     teapouch1kg4: req.body.teapouch1kg4,
//     name: req.body.name,
//     weight: req.body.weight,
//     qut: req.body.qut,
//     price: req.body.price,
//     teabag1: req.body.teabag1,
//     name: req.body.name,
//     weight: req.body.weight,
//     qut: req.body.qut,
//     price: req.body.price,
//     teabag2: req.body.teabag2,
//     name: req.body.name,
//     weight: req.body.weight,
//     qut: req.body.qut,
//     price: req.body.price,
//     teabag3: req.body.teabag3,
//     name: req.body.name,
//     weight: req.body.weight,
//     qut: req.body.qut,
//     price: req.body.price,
//     teasachet1: req.body.teasachet1,
//     name: req.body.name,
//     weight: req.body.weight,
//     qut: req.body.qut,
//     price: req.body.price,
//     teasachet2: req.body.teasachet2,
//     name: req.body.name,
//     weight: req.body.weight,
//     qut: req.body.qut,
//     price: req.body.price,
//     teasachet3: req.body.teasachet3,
//     name: req.body.name,
//     weight: req.body.weight,
//     qut: req.body.qut,
//     price: req.body.price,
//     teabulk1: req.body.teabulk1,
//     name: req.body.name,
//     weight: req.body.weight,
//     qut: req.body.qut,
//     price: req.body.price,
//     teabulk2: req.body.teabulk2,
//     name: req.body.name,
//     weight: req.body.weight,
//     qut: req.body.qut,
//     price: req.body.price,
//     teabulk3: req.body.teabulk3,
//     name: req.body.name,
//     weight: req.body.weight,
//     qut: req.body.qut,
//     price: req.body.price,
//     teabulk4: req.body.teabulk4,
//     name: req.body.name,
//     weight: req.body.weight,
//     qut: req.body.qut,
//     price: req.body.price,
//     teabulk5: req.body.teabulk5,
//     name: req.body.name,
//     weight: req.body.weight,
//     qut: req.body.qut,
//     price: req.body.price,
//     teabulk6: req.body.teabulk6,
//     name: req.body.name,
//     weight: req.body.weight,
//     qut: req.body.qut,
//     price: req.body.price,
//     teabottle: req.body.teabottle,
//     name: req.body.name,
//     weight: req.body.weight,
//     qut: req.body.qut,
//     price: req.body.price,
//     teabasket1: req.body.teabasket1,
//     name: req.body.name,
//     weight: req.body.weight,
//     qut: req.body.qut,
//     price: req.body.price,
//     teabasket2: req.body.teabasket2,
//     name: req.body.name,
//     weight: req.body.weight,
//     qut: req.body.qut,
//     price: req.body.price
  
    };
    Axios.post('http://localhost:4000/submit', order)
      .then(response => {
        console.log('', response);
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      });

    this.props.navigation.navigate('Signature');
  };
}

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2bbbad',
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
