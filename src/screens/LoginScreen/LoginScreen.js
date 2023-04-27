
import {StyleSheet, Text, TextInput, View,Image, ScrollView, Linking,StatusBar} from 'react-native'
import React, {useState} from 'react';
import Mybutton from '../Mybutton'
import { mobileLogin } from '../../api/api';



const LoginScreen = ({navigation}) => {

    function showRegistration(){
      navigation.navigate("Register")
    }

    const[mobNo,setMobNo]=useState("");
 

  
    const handlePress= async () => {
      navigation.navigate("Home")

      let postData={phoneNumber:String(mobNo),roleId:2}
      console.log(typeof(mobileLogin));
      console.log(postData)
      try{
        let res =await mobileLogin(postData);
         console.log(res.data.data);
         console.log(typeof(res.data.data));
         if(res && res.data){
          let key=res.data.data
          navigation.navigate('OtpConfirmScreen',{key:key,phoneNumber:String(mobNo)})
         }
      }
      
      catch(error){
        console.log(error);
      }

    }  

  return (
    <ScrollView style={{backgroundColor:"#ffffff"}}>
        <View style={styles.container}>
        <Image style={styles.imgApple} source={require("../../images/apple.jpg")}></Image>
        <View style={styles.container}>
            <Text style={{alignSelf:"flex-start",marginLeft:20,fontWeight:"bold",fontSize:30,color:"#000"}}>Login</Text>  
            <TextInput style={styles.ipMobNo} placeholder='Enter Mobile no' keyboardType='numeric'onChangeText={setMobNo} value={mobNo} maxLength={10}></TextInput>
            <Mybutton handlePress={handlePress} btnTxt="GET OTP" txtColor="#ffffff" myButton={styles.myButton} width={300}></Mybutton>
            <Text style={{color:"#ff9900",textDecorationLine:"underline",marginTop:10}} onPress={()=> Linking.openURL("/")}>Forget Password?</Text>
            <Text style={{marginTop:40}}>Don't have an account 
            <Text style={{color:"#ff9900"}} onPress={showRegistration}> Register?</Text>
            </Text>
        </View>
        </View>
    </ScrollView>
    
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
      marginTop:100,
      flex: 1,
      backgroundColor:'#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical:20
    },
  
    inputContainer:{
      width:300
    },
    imgApple:{
      width:300,
      height:200,
      resizeMode:"contain"
    },
    ipMobNo:{
      height:40,
      width:300,
      margin:12,
      borderWidth:1,
      borderRadius:20,
      padding:10    
    },
    myButton:{
        backgroundColor:"#000000",
        borderWidth:1,
        borderColor:"#000000",
        borderRadius:20,
        padding:10,
        width:300,
        marginTop:15,
        fontWeight:"bold",
        fontSize:17
        
    }
  });
  