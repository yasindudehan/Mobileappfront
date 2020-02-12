//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, Image} from 'react-native';
import SignatureCapture from 'react-native-signature-capture';
import {Container, Content, Card} from 'native-base';
// create a component
class Signature extends Component {
  constructor(props) {
    super(props);
    this.state = {signature: null, photo: ''};
  }

  static navigationOptions = {headerStyle: {backgroundColor: '#005f63'}};
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Text
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontFamily: 'Cochin',
          }}>
          {JSON.stringify(this.props.navigation.getParam('id'))}
        </Text>

        <SignatureCapture
          style={[{flex: 1}, styles.signature]}
          ref="sign"
          onSaveEvent={this._onSaveEvent}
          onDragEvent={this._onDragEvent}
          saveImageFileInExtStorage={true}
          showNativeButtons={false}
          showTitleLabel={true}
          viewMode={'portrait'}
        />

        <View
          style={{flex: 1, flexDirection: 'row', backgroundColor: '#00363a'}}>
          <TouchableHighlight
            style={styles.buttonStyle}
            onPress={() => {
              this.resetSign();
            }}>
            <Image
              source={require('../Image/eraser.png')}
              style={{width: 50, height: 50}}
            />
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.buttonStyle1}
            onPress={() => {
              this.saveSign();
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontFamily: 'Cochin',
                color: 'white',
              }}>
              Save
            </Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.buttonStyle1}
            onPress={this.nextPage}>
            <Text
              style={{
                fontWeight: 'bold',
                fontFamily: 'Cochin',
                color: 'white',
              }}>
              Next
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
  saveSign() {
    this.refs['sign'].saveImage();
  }

  resetSign() {
    this.refs['sign'].resetImage();
  }

  _onSaveEvent(result) {
    //result.encoded - for the base64 encoded png
    //result.pathName - for the file path name
    console.log(result);
    this.setState({photo: result});
  }
  _onDragEvent() {
    // This callback will be called when the user enters signature
    console.log('dragged');
  }
  nextPage = () => {
    this.props.navigation.navigate('SubmitOrder');
  };
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signature: {
    flex: 1,
    borderColor: '#000033',
    borderWidth: 1,
  },
  buttonStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#00363a',
    margin: 10,
    width: 50,
    borderWidth: 3,
    borderColor: '#006064',
  },
  buttonStyle1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#00363a',
    margin: 10,
    borderWidth: 3,
    borderColor: '#006064',
  },
});

//make this component available to the app
export default Signature;
