//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, Image} from 'react-native';
import SignatureCapture from 'react-native-signature-capture';
import {Container, Content, Card} from 'native-base';
// create a component
class Signature extends Component {
  static navigationOptions = {headerStyle: {backgroundColor: '#2bbbad'}};
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Text
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontFamily: 'Cochin',
          }}>
          Sign here
        </Text>
        <SignatureCapture
          style={[{flex: 1}, styles.signature]}
          ref="sign"
          onSaveEvent={this._onSaveEvent}
          onDragEvent={this._onDragEvent}
          saveImageFileInExtStorage={false}
          showNativeButtons={false}
          showTitleLabel={false}
          viewMode={'portrait'}
        />

        <View
          style={{flex: 1, flexDirection: 'row', backgroundColor: '#2bbbad'}}>
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
            <Text style={{fontWeight: 'bold', fontFamily: 'Cochin'}}>Save</Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.buttonStyle1}>
            <Text style={{fontWeight: 'bold', fontFamily: 'Cochin'}}>
              Submit Order
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
  }
  _onDragEvent() {
    // This callback will be called when the user enters signature
    console.log('dragged');
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
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
    backgroundColor: '#eeeeee',
    margin: 10,
    width: 50,
  },
  buttonStyle1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#58eb34',
    margin: 10,
  },
});

//make this component available to the app
export default Signature;
