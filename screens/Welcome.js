//import liraries
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Picker,
  TextInput,
} from 'react-native';
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Right,
  Left,
  Form,
} from 'native-base';
import styles from './styles';

class Welcome extends Component
{
    render() // body design................................
    {
        return 
        {
            <View>
                <View style={styles.mainbody}>
                    <Image style = {styles.imgsspalsh} source = {require = ("../../assets/a.jpg")}/> /* lavish logo
                    <Text style = {styles.titlesplash}>  
                     Lavish Pvt Ltd {"\n"} powerd by Team 4 bits
                    
                    </Text>
                    < Button style ={styles.btntake} >
                        <Text style = {styles.textbtn}>
                            Get Started
                        </Text>
                     </Button>  

                </View>
            </View>

        }
    
    }
}


const styeles = 
{
    mainbody :{
        marginTop : 30,
        marginLeft :24,
        marginRight : 24,
        marginBottom :28,
    },
    imgsplash :{
        width :300,
        height :290,
        marginLeft : 25,
        marginTop : 40,
     
    },
    titlesplash:{
        TextAlign :"center",
        fontSize : 32,
        LineHeight : 55,
        marginTop : 20,
        color : "#654321", //styles..................

    },
    btntake:{
        width :240,
        height : 45,
        borderRadius :200,
        blackColor : "#008080",
        marginTop : 30,
        marginLeft : 45,
    

    },
    textbtn:{
        color : "#ffffff",
        fontSize : 18,
        fontWeight : "bold",


    }
    

}


export default Welcome



