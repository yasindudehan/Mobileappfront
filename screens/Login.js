import React, {Component} from 'react';
import Axios from 'axios';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  AsyncStorage,
  StatusBar,
} from 'react-native';
import {Container, Header, Content, Text, Button, Toast} from 'native-base';
const Info = {
  userId: 'kasun',
  password: '12345',
};
const Info1 = {
  userId1: 'shalitha',
  password1: '12345',
};

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {userId: '', password: ''};
  }
  async componentDidMount() {
    await Axios('http://192.168.1.102:4000/login/signIn', {
      username: this.state.userId,
      password: this.state.password,
    });
  }
  render() {
    // const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#00363a" barStyle="light-content" />
        <ImageBackground
          source={require('./Image/Logo.png')}
          style={styles.backgroundimage}
        />
        <TextInput
          onChangeText={userId => this.setState({userId})}
          value={this.state.userId}
          style={styles.input}
          placeholder="USERNAME"
        />
        <TextInput
          onChangeText={password => this.setState({password})}
          value={this.state.password}
          secureTextEntry={true}
          style={styles.input}
          placeholder="PASSWORD"
        />
        <TouchableOpacity style={styles.button} onPress={this.onSign}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
  onSign = async () => {
    if (
      Info.userId === this.state.userId &&
      Info.password === this.state.password
    ) {
      await AsyncStorage.setItem('logged', '1');
      this.props.navigation.navigate('App');
    } else if (
      Info1.userId1 === this.state.userId &&
      Info1.password1 === this.state.password
    ) {
      await AsyncStorage.setItem('logged', '2');
      this.props.navigation.navigate('App1');
    } else {
      alert('Wrong password');
    }
  };
  /* onSign = e => {
    const userdata = {
      username: this.state.userId,
      password: this.state.password,
    };
    Axios.post('http://192.168.137.11:4000/login/signIn', userdata).then(
      res => {
        if (res.status === 200) {
          this.props.navigation.navigate('App');
        } else {
          alert('ghjgjh');
        }
      },
    );
  };*/
}

const styles = (StyleSheet.cretate = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  input: {
    width: 250,
    height: 50,
    borderWidth: 1,
    borderColor: '#717e85',
    margin: 10,
  },
  button: {
    margin: 10,
    backgroundColor: '#006064',
    width: 260,
    height: 50,
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    color: '#cdd0d1',
    fontSize: 20,
  },
  backgroundimage: {
    width: 150,
    height: 105,
    justifyContent: 'center',
  },
});
