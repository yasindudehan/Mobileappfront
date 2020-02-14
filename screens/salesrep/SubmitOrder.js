//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet,Button,Alert,TouchableOpacity,Image,AsyncStorage} from 'react-native';
import {Container, Content} from 'native-base';
import { Linking } from 'react-native'
import Mailer from 'react-native-mail';
// create a component
const customer_gmail='mailto:ruwanwellayasindu@gmail.com';
const subject="Your Order"
var a=[1,2,3,4];
const mailbody=a
const  mail=customer_gmail.concat('?subject=',subject,"&body=",mailbody);
class SubmitOrder extends Component {
    constructor(props){
          super(props);
          this.state={
                 issendemail:false,
          };

    };
  static navigationOptions = {
    headerStyle: {backgroundColor: '#005f63'
        
    },
      title:" Send Email",
      headerTitleStyle: {
      fontWeight: 'bold',
      color:'white',
    },
     
  };
 
  render() {
    return (
     
      <View style={styles.container}>
       
        <TouchableOpacity onPress={()=>{ 
  Linking.openURL(mail);
  this.setState({issendemail:true})
                            }}>
    <View><Image source={require('../Image/Email.png')} style={{width:100,height: 100,}}/>
      <Text style={{color:'white', textAlign: 'center'}}>Click here</Text>
    </View>
 </TouchableOpacity>
       <TouchableOpacity 
        style={{
              backgroundColor: '#00363a',
              margin: 20,
             marginTop:100,
              width: 100,
              height: 50,
              borderRadius: 20,
              borderWidth: 2,
              borderColor: '#428e92',
            
            }}
              onPress={this.nextPage}
       ><Text   style={{
                color: 'white',
                textAlign: 'center',
                marginTop: 10,
                fontSize: 20,
                fontWeight: 'bold',
                overflow: 'hidden',
              }}>Next</Text></TouchableOpacity>
               {this.errormessage}
      </View>
     
    );
  }
  nextPage=async () =>{
      if(this.state.issendemail===true){
          
     //await AsyncStorage.clear();
  //  this.props.navigation.navigate('ADDORDER');
         alert("press");
       
      }
      
  };

}


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
