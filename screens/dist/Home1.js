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
import SignatureCapture from 'react-native-signature-capture';
import Date from './Date';
// create a component
class SalesInvoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '0',
      billpaid: 'not paid',
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
    const {navigation} = this.props;
    //const customerSign = navigation.getParam(' customerSign', 'NO-User');
    var signature = navigation.params
      ? navigation.params.signature
      : '<undefined>';
    return (
      <Container style={styles.container}>
        <Content padder>
          <Card>
            <Card>
              <CardItem bordered>
                <Body>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 20,
                      fontFamily: 'Cochin',
                    }}>
                    SALES INVOICE
                  </Text>
                </Body>

                <Body>
                  <Date />
                </Body>
              </CardItem>
            </Card>

            <Card>
              <CardItem bordered>
                <Body>
                  <Text>Customer Name :</Text>
                </Body>
              </CardItem>
            </Card>
            <Card>
              <CardItem bordered>
                <Body>
                  <Text>Customer Address :</Text>
                </Body>
              </CardItem>
            </Card>

            <View style={{flexDirection: 'row'}}>
              <CardItem bordered style={{flex: 3}}>
                <Body>
                  <Text style={styles.invoiceMain}>Product</Text>

                  <Text style={{marginBottom: 20}}>Tea Pouch</Text>
                </Body>
              </CardItem>

              <CardItem bordered style={{flex: 2}}>
                <Body>
                  <Text style={styles.invoiceMain}>Weight</Text>

                  <Text style={{marginBottom: 20}}>20g</Text>
                </Body>
              </CardItem>

              <CardItem bordered style={{flex: 1.4}}>
                <Body>
                  <Text style={styles.invoiceMain}>Qut</Text>

                  <Form>
                    <Picker
                      note={true}
                      mode="dropdown"
                      style={{
                        width: 100,
                        marginBottom: 20,
                        height: 22,
                        padding: 0,
                      }}
                      selectedValue={this.state.selected}
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
                  </Form>
                </Body>
              </CardItem>

              <CardItem bordered style={{flex: 1.7}}>
                <Body>
                  <Text style={styles.invoiceMain}>Rate</Text>
                </Body>
              </CardItem>

              <CardItem bordered style={{flex: 1.7}}>
                <Body>
                  <Text style={styles.invoiceMain}>Value</Text>

                  <Text style={{marginBottom: 20}}>
                    {this.state.selected * 30}
                  </Text>
                </Body>
              </CardItem>
            </View>
            <Content>
              <Card>
                <CardItem bordered>
                  <Body>
                    <Text style={styles.invoiceTotal}>Total :</Text>
                  </Body>
                  <Body>
                    <Text style={styles.invoiceTotal}>Total</Text>
                  </Body>
                </CardItem>
                <CardItem bordered>
                  <Body>
                    <Text style={styles.invoiceTotal}>Discount :</Text>
                  </Body>
                  <Body>
                    <TextInput
                      placeholder="Enter Discount"
                      style={styles.invoiceTotal}
                    />
                  </Body>
                </CardItem>
                <CardItem bordered>
                  <Body>
                    <Text style={styles.invoiceTotal}>Net Total :</Text>
                  </Body>
                  <Body>
                    <Text style={styles.invoiceTotal}>Net Total</Text>
                  </Body>
                </CardItem>
              </Card>
            </Content>
            <Card>
              <CardItem>
                <Body>
                  <Picker
                    note={true}
                    mode="dropdown"
                    style={{
                      width: 400,
                      marginBottom: 20,
                      height: 22,
                      padding: 0,
                      fontSize: 40,
                      fontFamily: 'Cochin',
                      fontWeight: 'bold',
                    }}
                    selectedValue={this.state.billpaid}
                    onValueChange={this.onPaid.bind(this)}>
                    <Picker.Item label="Paid" value="paid" />
                    <Picker.Item label="Not Paid" value="not paid" />
                  </Picker>
                </Body>
              </CardItem>
            </Card>
          </Card>
        </Content>

        <TouchableOpacity
          onPress={this.nextPage}
          style={{
            backgroundColor: '#58eb34',
            margin: 20,
            marginLeft: 350,
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
    this.props.navigation.navigate('SubmitOrder');
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
});

//make this component available to the app
export default SalesInvoice;
