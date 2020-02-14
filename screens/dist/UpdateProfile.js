//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  Container,
  Content,
  Card,
  CardItem,
  Form,
  Body,
  Right,
} from 'native-base';

// create a component
class UpdateProfile extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={styles.container}>
        <Content padder>
          <Card>
            <Form>
              <CardItem>
                <Body>
                  <Text style={{fontSize: 20, margin: 10}}>First Name :</Text>
                </Body>
                <Body>
                  <TextInput placeholder="First Name" style={{fontSize: 20}} />
                </Body>
              </CardItem>
              <CardItem>
                <Body>
                  <Text style={{fontSize: 20, margin: 10}}>Last Name :</Text>
                </Body>
                <Body>
                  <TextInput placeholder="Last Name" style={{fontSize: 20}} />
                </Body>
              </CardItem>
              <Right>
                <TouchableOpacity
                  style={styles.buttonContainer}
                  onPress={this.Update}>
                  <Text style={{color: 'white'}}>Update</Text>
                </TouchableOpacity>
              </Right>
            </Form>
          </Card>
        </Content>
      </View>
    );
  }
  Update = () => {
    this.props.navigation.navigate('Home');
  };
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //   justifyContent: 'center',
    //  alignItems: 'center',
    backgroundColor: '#00363a',
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#00363a',
    borderWidth: 3,
    borderColor: '#006064',
  },
});

//make this component available to the app
export default UpdateProfile;
