import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import AppNavigator from './screens/route/route';
import {Container, Content} from 'native-base';
const AppIndex = createAppContainer(AppNavigator);

class App extends Component {
  render() {
    return (
      <Container>
        <StatusBar backgroundColor="#2bbbad" barStyle="light-content" />
        <AppIndex />
      </Container>
    );
  }
}

export default App;
