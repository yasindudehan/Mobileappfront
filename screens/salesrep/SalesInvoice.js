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

import SignatureCapture from 'react-native-signature-capture';
import Date from './Date';
import {green} from 'ansi-colors';
// create a component
class SalesInvoice extends React.Component {
  a = () => {
    const value = 0;
    return (
      <Picker
        note={true}
        mode="dropdown"
        style={{
          width: 50,
          marginBottom: 20,
          height: 22,
          padding: 0,
        }}
        onValueChange={this.onValueChange.bind(this)}>
        <Picker.Item label="0" value="0" />
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />
        <Picker.Item label="6" value="6" />
        <Picker.Item label="7" value="7" />
        <Picker.Item label="8" value="8" />
        <Picker.Item label="9" value="9" />
        <Picker.Item label="10" value="10" />
      </Picker>
    );
  };
  constructor(props) {
    super(props);
    const picker = this.a();
    this.state = {
      selected: '0',
      billpaid: 'not paid',
      tableHead: ['Product', 'Weight', 'Qut', 'Rate', 'Value'],
      tableData: [
        ['Tea Pouch ', '20g', '3', '4', '5'],
        ['Tea Pouch', 'b', 'c', picker, 'e'],
        ['1', '2', '3', '456\n789', '4556'],
        ['a', 'b', 'c', 'd', 'e'],
        ['a', 'b', 'b', 'b', 'b'],
      ],
    };
  }
  onValueChange(value: string) {
    this.setState({
      selected: value,
    });
  }
  onPaid(value: string) {
    this.setState({
      billpaid: value,
    });
  }
  static navigationOptions = {headerStyle: {backgroundColor: '#2bbbad'}};
  render() {
    const state = this.state;
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
            <Table borderStyle={{borderWidth: 2, borderColor: 'green'}}>
              <Row
                data={state.tableHead}
                style={styles.head}
                textStyle={styles.text}
              />
              <Row data={['TEA RANGE']} style={{backgroundColor: 'green'}} />
              <Rows data={state.tableData} textStyle={styles.text} />
              <Row data={['01 kg POUCH']} style={{backgroundColor: 'green'}} />
              <Rows data={state.tableData} textStyle={styles.text} />
              <Row data={['TEA BAG']} style={{backgroundColor: 'green'}} />
              <Rows data={state.tableData} textStyle={styles.text} />
              <Row data={['TEA SACHET']} style={{backgroundColor: 'green'}} />
              <Rows data={state.tableData} textStyle={styles.text} />
              <Row data={['TEA BULCK']} style={{backgroundColor: 'green'}} />
              <Rows data={state.tableData} textStyle={styles.text} />
              <Row data={['TEA BOTTLE']} style={{backgroundColor: 'green'}} />
              <Rows data={state.tableData} textStyle={styles.text} />
              <Row
                data={['TEA BASKET RANGE']}
                style={{backgroundColor: 'green'}}
              />
              <Rows data={state.tableData} textStyle={styles.text} />
            </Table>
            <Table borderStyle={{borderWidth: 2, borderColor: 'green'}}>
              <Row
                data={['Total       ', 'total here']}
                style={{backgroundColor: '#DCFDD7'}}
              />
              <Row
                data={['Discount ', ' here']}
                style={{backgroundColor: '#DCFDD7'}}
              />
              <Row
                data={['Net Total   ', ' here']}
                style={{backgroundColor: '#DCFDD7'}}
              />
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
