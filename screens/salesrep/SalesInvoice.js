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
      qut: [],
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
      CustomerName: '',
      CustomerAdd: '',
    };
  }
  async componentDidMount() {
    await Axios.get('http://192.168.8.103:4000/product')

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
      CustomerAdd: JSON.stringify(
        this.props.navigation.getParam('custAddress'),
      ),
      CustomerName: JSON.stringify(this.props.navigation.getParam('custName')),
    });
  }

  /* onChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };*/
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

  static navigationOptions = {headerStyle: {backgroundColor: '#005f63'}};
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
                data={['Customer  Name :', this.state.CustomerName]}
                textStyle={{fontSize: 30}}
              />
              <Row
                data={['Customer Address :', this.state.CustomerAdd]}
                textStyle={{fontSize: 30}}
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
                    value={this.state.tq1}
                    onChangeText={tq1 => this.setState({tq1})}
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
                    {(this.state.tq1 * 30).toFixed(2)}
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
      salesrepName: 'kasun perera',
      Invoiceno: ID,
      customerName: this.state.CustomerName,
      teapouch20: {
        qut: this.state.tq1,
        price: parseInt(this.state.tq1) * 30.0,
      },
      teapouch50: {qut: this.state.tq2, price: parseInt(this.state.tq2) * 50.0},
      teapouch100: {
        qut: this.state.tq3,
        price: parseInt(this.state.tq3) * 100.0,
      },
      teapouch200: {
        qut: this.state.tq4,
        price: parseInt(this.state.tq4) * 200.0,
      },
      teapouch400: {
        qut: this.state.tq5,
        price: parseInt(this.state.tq5) * 400.0,
      },
      teapouch1kg1: {
        qut: this.state.tq6,
        price: parseInt(this.state.tq6) * 800.0,
      },
      teapouch1kg2: {
        qut: this.state.tq7,
        price: parseInt(this.state.tq7) * 800.0,
      },
      teapouch1kg3: {
        qut: this.state.tq8,
        price: parseInt(this.state.tq8) * 700.0,
      },
      teapouch1kg4: {
        qut: this.state.tq9,
        price: parseInt(this.state.tq9) * 300.0,
      },
      teabag1: {qut: this.state.tq10, price: parseInt(this.state.tq10) * 500.0},
      teabag2: {qut: this.state.tq11, price: parseInt(this.state.tq11) * 500.0},
      teabag3: {qut: this.state.tq12, price: parseInt(this.state.tq12) * 800.0},
      teasachet1: {
        qut: this.state.tq13,
        price: parseInt(this.state.tq13) * 300.0,
      },
      teasachet2: {
        qut: this.state.tq14,
        price: parseInt(this.state.tq14) * 500.0,
      },
      teasachet3: {
        qut: this.state.tq15,
        price: parseInt(this.state.tq15) * 800.0,
      },
      teabulk1: {
        qut: this.state.tq16,
        price: parseInt(this.state.tq16) * 3200.0,
      },
      teabulk2: {
        qut: this.state.tq17,
        price: parseInt(this.state.tq17) * 3200.0,
      },
      teabulk3: {
        qut: this.state.tq18,
        price: parseInt(this.state.tq18) * 3200.0,
      },
      teabulk4: {
        qut: this.state.tq19,
        price: parseInt(this.state.tq19) * 20000.0,
      },
      teabulk5: {
        qut: this.state.tq20,
        price: parseInt(this.state.tq20) * 20000.0,
      },
      teabulk6: {
        qut: this.state.tq21,
        price: parseInt(this.state.tq21) * 30000.0,
      },
      teabottle: {
        qut: this.state.tq22,
        price: parseInt(this.state.tq22) * 350.0,
      },
      teabasket1: {
        qut: this.state.tq23,
        price: parseInt(this.state.tq23) * 2200.0,
      },
      teabasket2: {
        qut: this.state.tq24,
        price: parseInt(this.state.tq24) * 2200.0,
      },
      totalValue: this.state.total,
    };
    Axios.post('http://192.168.1.104:4000/order/submit', order)
      .then(response => {
        console.log('', response);
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      });
    var id = 0;
    this.props.navigation.navigate('Signature', {
      id: this.state.totalValue,
    });
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
