//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Container, Content} from 'native-base';
// create a component
class SubmitOrder extends Component {
  static navigationOptions = {
    headerStyle: {backgroundColor: '#005f63'},
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>MyClass</Text>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00363a',
  },
});

//make this component available to the app
export default SubmitOrder;
