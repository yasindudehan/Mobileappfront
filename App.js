import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  YellowBox,
  StatusBar,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import AppNavigator from './screens/route/route';
import {Container, Content} from 'native-base';
YellowBox.ignoreWarnings(['ViewPagerAndroid']);
YellowBox.ignoreWarnings(['Warning: Async Storage has been extracted from react-native core']);
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
