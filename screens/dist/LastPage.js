//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
class LastPage extends Component {
  static navigationOptions = {
    headerStyle: {backgroundColor: '#005f63'},
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>LastPage</Text>
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
export default LastPage;
