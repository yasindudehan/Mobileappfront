//import liraries
import React, {Component} from 'react';
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
      selecteds: '',
    };
  }

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
                  <Text>...</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>...</Text>
                </View>
                <View
                  style={{
                    flex: 1.5,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>....</Text>
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
                  <Text>.....</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>.....</Text>
                </View>
                <View
                  style={{
                    flex: 1.5,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>........</Text>
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
                  <Text>.....</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>.....</Text>
                </View>
                <View
                  style={{
                    flex: 1.5,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>........</Text>
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
                  <Text>.....</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>.....</Text>
                </View>
                <View
                  style={{
                    flex: 1.5,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>........</Text>
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
                  <Text>.....</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>.....</Text>
                </View>
                <View
                  style={{
                    flex: 1.5,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>........</Text>
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
                  <Text>.....</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>.....</Text>
                </View>
                <View
                  style={{
                    flex: 1.5,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>........</Text>
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
                  <Text>.....</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>.....</Text>
                </View>
                <View
                  style={{
                    flex: 1.5,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>........</Text>
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
                  <Text>.....</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>.....</Text>
                </View>
                <View
                  style={{
                    flex: 1.5,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>........</Text>
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
                  <Text>.....</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>.....</Text>
                </View>
                <View
                  style={{
                    flex: 1.5,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>........</Text>
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
                  <Text>.....</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>.....</Text>
                </View>
                <View
                  style={{
                    flex: 1.5,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>........</Text>
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
                  <Text>.....</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>.....</Text>
                </View>
                <View
                  style={{
                    flex: 1.5,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>........</Text>
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
                  <Text>.....</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>.....</Text>
                </View>
                <View
                  style={{
                    flex: 1.5,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>........</Text>
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
                  <Text>.....</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>.....</Text>
                </View>
                <View
                  style={{
                    flex: 1.5,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>........</Text>
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
                  <Text>.....</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>.....</Text>
                </View>
                <View
                  style={{
                    flex: 1.5,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>........</Text>
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
                  <Text>.....</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>.....</Text>
                </View>
                <View
                  style={{
                    flex: 1.5,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>........</Text>
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
                  <Text>.....</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>.....</Text>
                </View>
                <View
                  style={{
                    flex: 1.5,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>........</Text>
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
                  <Text>.....</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>.....</Text>
                </View>
                <View
                  style={{
                    flex: 1.5,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>........</Text>
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
                  <Text>.....</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>.....</Text>
                </View>
                <View
                  style={{
                    flex: 1.5,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>........</Text>
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
                  <Text>.....</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>.....</Text>
                </View>
                <View
                  style={{
                    flex: 1.5,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>........</Text>
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
                  <Text>.....</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>.....</Text>
                </View>
                <View
                  style={{
                    flex: 1.5,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>........</Text>
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
                  <Text>.....</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>.....</Text>
                </View>
                <View
                  style={{
                    flex: 1.5,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>........</Text>
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
                  <Text>.....</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>.....</Text>
                </View>
                <View
                  style={{
                    flex: 1.5,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>........</Text>
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
                  <Text>.....</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>.....</Text>
                </View>
                <View
                  style={{
                    flex: 1.5,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>........</Text>
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
                  <Picker style={{width: 55, height: 70}}>
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                    <Picker.Item label="3" value="2" />
                  </Picker>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>.....</Text>
                </View>
                <View
                  style={{
                    flex: 1.5,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                  }}>
                  <Text>........</Text>
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
                    flex: 3,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                    backgroundColor: '#BDFDB3',
                  }}>
                  <Text>here</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignSelf: 'stretch',
                  borderWidth: 1,
                  borderColor: '#BDFDB3',
                  borderBottomWidth: 0,
                }}>
                <View
                  style={{
                    flex: 1,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                    backgroundColor: '#BDFDB3',
                  }}>
                  <Text>Discount</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                    backgroundColor: '#BDFDB3',
                  }}>
                  <TextInput placeholder="here" />
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
                    backgroundColor: '#BDFDB3',
                  }}>
                  <Text>NET TOTAL</Text>
                </View>
                <View
                  style={{
                    flex: 3,
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderBottomWidth: 0,
                    backgroundColor: '#BDFDB3',
                  }}>
                  <Text>here</Text>
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
  nextPage = () => {
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
