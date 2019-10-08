import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Picker,
  Button,
  Modal,
  TouchableHighlight,
  Alert,
} from 'react-native';
import {Container, Header, Content, DatePicker, Text} from 'native-base';
export default class DatePickerExample extends Component {
  constructor(props) {
    super(props);
    this.state = {chosenDate: new Date()};
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({chosenDate: newDate});
  }
  render() {
    return (
      <View>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            fontFamily: 'Cochin',
          }}>
          Date: {this.state.chosenDate.toString().substr(4, 12)}
        </Text>
      </View>
    );
  }
}
