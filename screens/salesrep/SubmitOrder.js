//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet,Button,Alert,TouchableOpacity,Image,AsyncStorage,PermissionsAndroid} from 'react-native';
import {Container, Content} from 'native-base';
import { Linking } from 'react-native'
import Mailer from 'react-native-mail';
var RNFS = require("react-native-fs");
import RNHTMLtoPDF from 'react-native-html-to-pdf';
const today = new Date();
import Axios from 'axios';
import { IP} from 'react-native-dotenv';
import { NavigationActions,StackActions  } from 'react-navigation';
// create a component
/* const customer_gmail='mailto:ruwanwellayasindu@gmail.com';
const subject="Your Order"
var a=[1,2,3,4];
const mailbody=a
const  mail=customer_gmail.concat('?subject=',subject,"&body=",mailbody,attachment:{path:"./cc.pdf",type:"pdf"}); */
let path;
class SubmitOrder extends Component {
    constructor(props){
          super(props);
          this.state={
                 issendemail:false,
                 path:null,
                 order:{},
                 products:[]
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
  async componentDidMount() {
    Axios.get(`http://${await IP}:4000/product`)
    .then(json => {
      this.setState({
        products: json.data[0],
      });
    })
    .catch(error => {
      console.error(error);
    });

    this.setState({
      order:  await this.props.navigation.state.params.order,
    });
  }
  requestRunTimePermission=()=> {
    const filepath = '/storage/emulated/0/Downloads/order.pdf';

    RNFS.exists(filepath)
    .then( (result) => {
        console.log("file exists: ", result);

        if(result){
          return RNFS.unlink(filepath)
            .then(() => {
              console.log('FILE DELETED');
            })
            // `unlink` will throw an error, if the item to unlink does not exist
            .catch((err) => {
              console.log(err.message);
            });
        }

      })
      .catch((err) => {
        console.log(err.message);
      });
    var that = this;
    async function externalStoragePermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'External Storage Write Permission',
          message:'App needs access to Storage data.',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        that.createPDF_File();
      } else {
        alert('WRITE_EXTERNAL_STORAGE permission denied');
      }
    } catch (err) {
      Alert.alert('Write permission err', err);
      console.warn(err);
    }
   }
 
    if (Platform.OS === 'android') {
      externalStoragePermission();
    } else {
      this.createPDF_File();
    }
  }
  async createPDF_File() {
    let options = {
      // HTML Content for PDF.
      // I am putting all the HTML code in Single line but if you want to use large HTML code then you can use + Symbol to add them.
      html:
      `
      <!doctype html>
      <html>
         <head>
            <meta charset="utf-8">
            <title>PDF Result Template</title>
            <style>
               .invoice-box {
               max-width: 800px;
               margin: auto;
               padding: 30px;
               border: 1px solid #eee;
               box-shadow: 0 0 10px rgba(0, 0, 0, .15);
               font-size: 16px;
               line-height: 24px;
               font-family: 'Helvetica Neue', 'Helvetica',
               color: #555;
               }
               .margin-top {
               margin-top: 50px;
               }
               .justify-center {
               text-align: center;
               }
               .invoice-box table {
               width: 100%;
               line-height: inherit;
               text-align: left;
               }
               .invoice-box table td {
               padding: 5px;
               vertical-align: top;
               }
               .invoice-box table tr td:nth-child(2) {
               text-align: right;
               }
               .invoice-box table tr.top table td {
               padding-bottom: 20px;
               }
               .invoice-box table tr.top table td.title {
               font-size: 45px;
               line-height: 45px;
               color: #333;
               }
               .invoice-box table tr.information table td {
               padding-bottom: 40px;
               }
               .invoice-box table tr.heading td {
               background: #eee;
               border-bottom: 1px solid #ddd;
               font-weight: bold;
               }
               .invoice-box table tr.details td {
               padding-bottom: 20px;
               }
               .invoice-box table tr.item td {
               border-bottom: 1px solid #eee;
               }
               .invoice-box table tr.item.last td {
               border-bottom: none;
               }
               .invoice-box table tr.total td:nth-child(2) {
               border-top: 2px solid #eee;
               font-weight: bold;
               }
               @media only screen and (max-width: 600px) {
               .invoice-box table tr.top table td {
               width: 100%;
               display: block;
               text-align: center;
               }
               .invoice-box table tr.information table td {
               width: 100%;
               display: block;
               text-align: center;
               }
               }
            </style>
         </head>
         <body>
            <div class="invoice-box">
               <table cellpadding="0" cellspacing="0">
                  <tr class="top">
                     <td colspan="5">
                        <table>
                           <tr>
                              <td class="title"><img  src="https://i.ibb.co/wW8pSh1/Logo.png"
                                 style="width:100%; max-width:156px;"></td>
                              <td>
                                <p><strong>SALES INVOICE</strong></p>
                                <p>LAavish Tea (PVT) LTD</p>
                                <p>No 05, Guildford Crescent</p>
                                <p>Colombo 07</p>
                                <p>${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}</p>
                              </td>
                           </tr>
                        </table>
                     </td>
                  </tr>
                  <tr class="information">
                     <td colspan="5">
                        <table>
                           <tr>
                              <td>
                                 Customer name: ${this.state.order.customerName}
                              </td>
                              <td>
                                 Sales Representative name: ${this.state.order.salesrepName}
                              </td>
                           </tr>
                        </table>
                     </td>
                  </tr>
                  <tr class="heading">
                     <td>Product</td>
                     <td>Weight</td>
                     <td>Qty</td>
                     <td>Rate</td>
                     <td>Value</td>
                  </tr>
                  <tr class="item">
                     <td>${this.state.products["teapouch20"].name}</td>
                     <td>${this.state.products["teapouch20"].weight}</td>
                     <td>${this.state.order["teapouch20"].qut?this.state.order["teapouch20"].qut:""}</td>
                     <td>${this.state.products["teapouch20"].rate}</td>
                     <td>${this.state.order["teapouch20"].price?this.state.order["teapouch20"].price:""}</td>
                  </tr>
                  <tr class="item">
                     <td>${this.state.products["teapouch50"].name}</td>
                     <td>${this.state.products["teapouch50"].weight}</td>
                     <td>${this.state.order["teapouch50"].qut?this.state.order["teapouch50"].qut:""}</td>
                     <td>${this.state.products["teapouch50"].rate}</td>
                     <td>${this.state.order["teapouch50"].price?this.state.order["teapouch50"].price:""}</td>
                  </tr>
                  <tr class="item">
                     <td>${this.state.products["teapouch100"].name}</td>
                     <td>${this.state.products["teapouch100"].weight}</td>
                     <td>${this.state.order["teapouch100"].qut?this.state.order["teapouch100"].qut:""}</td>
                     <td>${this.state.products["teapouch100"].rate}</td>
                     <td>${this.state.order["teapouch100"].price?this.state.order["teapouch100"].price:""}</td>
                  </tr>
                  <tr class="item">
                     <td>${this.state.products["teapouch200"].name}</td>
                     <td>${this.state.products["teapouch200"].weight}</td>
                     <td>${this.state.order["teapouch200"].qut?this.state.order["teapouch200"].qut:""}</td>
                     <td>${this.state.products["teapouch200"].rate}</td>
                     <td>${this.state.order["teapouch200"].price?this.state.order["teapouch200"].price:""}</td>
                  </tr>
                  <tr class="item">
                     <td>${this.state.products["teapouch400"].name}</td>
                     <td>${this.state.products["teapouch400"].weight}</td>
                     <td>${this.state.order["teapouch400"].qut?this.state.order["teapouch400"].qut:""}</td>
                     <td>${this.state.products["teapouch400"].rate}</td>
                     <td>${this.state.order["teapouch400"].price?this.state.order["teapouch400"].price:""}</td>
                  </tr>
                  <tr class="item">
                     <td>${this.state.products["teapouch1kg1"].name}</td>
                     <td>${this.state.products["teapouch1kg1"].weight}</td>
                     <td>${this.state.order["teapouch1kg1"].qut?this.state.order["teapouch1kg1"].qut:""}</td>
                     <td>${this.state.products["teapouch1kg1"].rate}</td>
                     <td>${this.state.order["teapouch1kg1"].price?this.state.order["teapouch1kg1"].price:""}</td>
                  </tr>
                  <tr class="item">
                     <td>${this.state.products["teapouch1kg2"].name}</td>
                     <td>${this.state.products["teapouch1kg2"].weight}</td>
                     <td>${this.state.order["teapouch1kg2"].qut?this.state.order["teapouch1kg2"].qut:""}</td>
                     <td>${this.state.products["teapouch1kg2"].rate}</td>
                     <td>${this.state.order["teapouch1kg2"].price?this.state.order["teapouch1kg2"].price:""}</td>
                  </tr>
                  <tr class="item">
                     <td>${this.state.products["teapouch1kg3"].name}</td>
                     <td>${this.state.products["teapouch1kg3"].weight}</td>
                     <td>${this.state.order["teapouch1kg3"].qut?this.state.order["teapouch1kg3"].qut:""}</td>
                     <td>${this.state.products["teapouch1kg3"].rate}</td>
                     <td>${this.state.order["teapouch1kg3"].price?this.state.order["teapouch1kg3"].price:""}</td>
                  </tr>
                  <tr class="item">
                     <td>${this.state.products["teapouch1kg4"].name}</td>
                     <td>${this.state.products["teapouch1kg4"].weight}</td>
                     <td>${this.state.order["teapouch1kg4"].qut?this.state.order["teapouch1kg4"].qut:""}</td>
                     <td>${this.state.products["teapouch1kg4"].rate}</td>
                     <td>${this.state.order["teapouch1kg4"].price?this.state.order["teapouch1kg4"].price:""}</td>
                  </tr>
                  <tr class="item">
                     <td>${this.state.products["teabag1"].name}</td>
                     <td>${this.state.products["teabag1"].weight}</td>
                     <td>${this.state.order["teabag1"].qut?this.state.order["teabag1"].qut:""}</td>
                     <td>${this.state.products["teabag1"].rate}</td>
                     <td>${this.state.order["teabag1"].price?this.state.order["teabag1"].price:""}</td>
                  </tr>
                  <tr class="item">
                     <td>${this.state.products["teabag2"].name}</td>
                     <td>${this.state.products["teabag2"].weight}</td>
                     <td>${this.state.order["teabag2"].qut?this.state.order["teabag2"].qut:""}</td>
                     <td>${this.state.products["teabag2"].rate}</td>
                     <td>${this.state.order["teabag2"].price?this.state.order["teabag2"].price:""}</td>
                  </tr>
                  <tr class="item">
                     <td>${this.state.products["teabag3"].name}</td>
                     <td>${this.state.products["teabag3"].weight}</td>
                     <td>${this.state.order["teabag3"].qut?this.state.order["teabag3"].qut:""}</td>
                     <td>${this.state.products["teabag3"].rate}</td>
                     <td>${this.state.order["teabag3"].price?this.state.order["teabag3"].price:""}</td>
                  </tr>
                  <tr class="item">
                     <td>${this.state.products["teasachet1"].name}</td>
                     <td>${this.state.products["teasachet1"].weight}</td>
                     <td>${this.state.order["teasachet1"].qut?this.state.order["teasachet1"].qut:""}</td>
                     <td>${this.state.products["teasachet1"].rate}</td>
                     <td>${this.state.order["teasachet1"].price?this.state.order["teasachet1"].price:""}</td>
                  </tr>
                  <tr class="item">
                     <td>${this.state.products["teasachet2"].name}</td>
                     <td>${this.state.products["teasachet2"].weight}</td>
                     <td>${this.state.order["teasachet2"].qut?this.state.order["teasachet2"].qut:""}</td>
                     <td>${this.state.products["teasachet2"].rate}</td>
                     <td>${this.state.order["teasachet2"].price?this.state.order["teasachet2"].price:""}</td>
                  </tr>
                  <tr class="item">
                     <td>${this.state.products["teasachet3"].name}</td>
                     <td>${this.state.products["teasachet3"].weight}</td>
                     <td>${this.state.order["teasachet3"].qut?this.state.order["teasachet3"].qut:""}</td>
                     <td>${this.state.products["teasachet3"].rate}</td>
                     <td>${this.state.order["teasachet3"].price?this.state.order["teasachet3"].price:""}</td>
                  </tr>
                  <tr class="item">
                     <td>${this.state.products["teabulk1"].name}</td>
                     <td>${this.state.products["teabulk1"].weight}</td>
                     <td>${this.state.order["teabulk1"].qut?this.state.order["teabulk1"].qut:""}</td>
                     <td>${this.state.products["teabulk1"].rate}</td>
                     <td>${this.state.order["teabulk1"].price?this.state.order["teabulk1"].price:""}</td>
                  </tr>
                  <tr class="item">
                     <td>${this.state.products["teabulk2"].name}</td>
                     <td>${this.state.products["teabulk2"].weight}</td>
                     <td>${this.state.order["teabulk2"].qut?this.state.order["teabulk2"].qut:""}</td>
                     <td>${this.state.products["teabulk2"].rate}</td>
                     <td>${this.state.order["teabulk2"].price?this.state.order["teabulk2"].price:""}</td>
                  </tr>
                  <tr class="item">
                     <td>${this.state.products["teabulk3"].name}</td>
                     <td>${this.state.products["teabulk3"].weight}</td>
                     <td>${this.state.order["teabulk3"].qut?this.state.order["teabulk3"].qut:""}</td>
                     <td>${this.state.products["teabulk3"].rate}</td>
                     <td>${this.state.order["teabulk3"].price?this.state.order["teabulk3"].price:""}</td>
                  </tr>
                  <tr class="item">
                     <td>${this.state.products["teabulk4"].name}</td>
                     <td>${this.state.products["teabulk4"].weight}</td>
                     <td>${this.state.order["teabulk4"].qut?this.state.order["teabulk4"].qut:""}</td>
                     <td>${this.state.products["teabulk4"].rate}</td>
                     <td>${this.state.order["teabulk4"].price?this.state.order["teabulk4"].price:""}</td>
                  </tr>
                  <tr class="item">
                     <td>${this.state.products["teabulk5"].name}</td>
                     <td>${this.state.products["teabulk5"].weight}</td>
                     <td>${this.state.order["teabulk5"].qut?this.state.order["teabulk5"].qut:""}</td>
                     <td>${this.state.products["teabulk5"].rate}</td>
                     <td>${this.state.order["teabulk5"].price?this.state.order["teabulk5"].price:""}</td>
                  </tr>
                  <tr class="item">
                     <td>${this.state.products["teabulk6"].name}</td>
                     <td>${this.state.products["teabulk6"].weight}</td>
                     <td>${this.state.order["teabulk6"].qut?this.state.order["teabulk6"].qut:""}</td>
                     <td>${this.state.products["teabulk6"].rate}</td>
                     <td>${this.state.order["teabulk6"].price?this.state.order["teabulk6"].price:""}</td>
                  </tr>
                  <tr class="item">
                     <td>${this.state.products["teabottle"].name}</td>
                     <td>${this.state.products["teabottle"].weight}</td>
                     <td>${this.state.order["teabottle"].qut?this.state.order["teabottle"].qut:""}</td>
                     <td>${this.state.products["teabottle"].rate}</td>
                     <td>${this.state.order["teabottle"].price?this.state.order["teabottle"].price:""}</td>
                  </tr>
                  <tr class="item">
                     <td>${this.state.products["teabasket1"].name}</td>
                     <td>${this.state.products["teabasket1"].weight}</td>
                     <td>${this.state.order["teabasket1"].qut?this.state.order["teabasket1"].qut:""}</td>
                     <td>${this.state.products["teabasket1"].rate}</td>
                     <td>${this.state.order["teabasket1"].price?this.state.order["teabasket1"].price:""}</td>
                  </tr>
                  <tr class="item">
                     <td>${this.state.products["teabasket2"].name}</td>
                     <td>${this.state.products["teabasket2"].weight}</td>
                     <td>${this.state.order["teabasket2"].qut?this.state.order["teabasket2"].qut:""}</td>
                     <td>${this.state.products["teabasket2"].rate}</td>
                     <td>${this.state.order["teabasket2"].price?this.state.order["teabasket2"].price:""}</td>
                  </tr>
               </table>
               <br />
               <h1 class="justify-center">Total price: Rs ${this.state.order.totalValue} </h1>
            </div>
         </body>
      </html>`,      
      fileName: 'order',

      directory: 'Downloads',
    };

    let file = await RNHTMLtoPDF.convert(options);
    await this.setState({path:file.filePath});
    this.handleEmail();

    
  } 
  handleEmail=async()=>{
    await Mailer.mail({
      subject: 'Your Order',
      recipients: [this.props.navigation.state.params.custEmail,'lavish.tea.pvt.ltd@gmail.com'],
      body: '<b>Your order copy is attached herewith</b>',
      isHTML: true,
      attachment: {
        path: this.state.path,  
        type: 'pdf',
        name:'order.pdf'
      }
    }, (error, event) => {
      Alert.alert(
        error,
        event,
        [
          {text: 'Ok', onPress: () => console.log('OK: Email Error Response')},
          {text: 'Cancel', onPress: () => console.log('CANCEL: Email Error Response')}
        ],
        { cancelable: true }
      )
    })
    
  }
  render() {
    return (
     
      <View style={styles.container}>
       
        <TouchableOpacity onPress={()=>{ 
            this.requestRunTimePermission();
            this.setState({issendemail:true}) }}>
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
              }}>Finish</Text></TouchableOpacity>
               {this.errormessage}
      </View>
     
    );
  }
  nextPage=async () =>{
     /*  if(this.state.issendemail===true){
          
     //await AsyncStorage.clear();
  //  this.props.navigation.navigate('ADDORDER');
         alert("press");
       
      } */
      //const type=await AsyncStorage.getItem('logged');
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'ADDORDER' })],
    });
        this.props.navigation.dispatch(resetAction);
        /* if(type==='1'){
          this.props.navigation.navigate('PROFILE');
        }
        else if(type==='2'){
            this.props.navigation.navigate('App1');
          } */
      
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
