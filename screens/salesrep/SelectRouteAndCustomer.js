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
  Radio,
  List,
  Button,
  Footer,
} from 'native-base';
import {View, TouchableOpacity, ScrollView} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

export default class SelectRoute extends React.Component {
  static navigationOptions = {headerStyle: {backgroundColor: '#006064'}};
  constructor(props) {
    super(props);
    this.state = {
      selected: 'k',
      valueselected: false,
    };
  }
  onValueChange(value: string) {
    this.setState({
      selected: value,
    });
  }
  render() {
    return (
      <Container style={{backgroundColor: '#00363a'}}>
        <Text style={{marginLeft: 5, fontFamily: 'Cochin', fontWeight: 'bold'}}>
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
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}>
              <Picker.Item label="Select Route" value="k" />
              <Picker.Item label="Nugegoda" value="1" />
            </Picker>
          </Form>
        </Card>
        <Text style={{marginLeft: 5, fontFamily: 'Cochin', fontWeight: 'bold'}}>
          Select Customer
        </Text>
        <Content>{this.selectpickerDisplay()}</Content>
        <Content>
          <TouchableOpacity
            style={{
              backgroundColor: '#00363a',
              margin: 20,
              marginLeft: 200,
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
  selectpickerDisplay = () => {
    if (this.state.selected === '1') {
      return (
        <Card style={{backgroundColor: '#428e92'}}>
          <ScrollView>
            <ListItem selected={false}>
              <Left>
                <Text>Shop1</Text>
              </Left>
              <Right>
                <Radio
                  color={'#f0ad4e'}
                  selectedColor={'#5cb85c'}
                  selected={false}
                />
              </Right>
            </ListItem>

            <ListItem selected={false}>
              <Left>
                <Text>Shop3</Text>
              </Left>
              <Right>
                <Radio
                  color={'#f0ad4e'}
                  selectedColor={'#5cb85c'}
                  selected={true}
                />
              </Right>
            </ListItem>
          </ScrollView>
        </Card>
      );
    } else if (this.state.selected !== 'k') {
      return (
        <Form>
          <Text style={{margin: 10, fontSize: 50, color: 'red'}}>
            No Customers
          </Text>
        </Form>
      );
    }
  };
  NextPage = () => {
    this.props.navigation.navigate('SalesInvoice');
  };
}
