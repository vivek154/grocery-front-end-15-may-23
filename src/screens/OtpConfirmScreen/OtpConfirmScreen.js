import { StyleSheet, Text, View,SafeAreaView, Pressable} from 'react-native'
import React,{useState} from 'react'
import { CodeField,Cursor,useBlurOnFulfill,useClearByFocusCell } from 'react-native-confirmation-code-field'
import ArrowOrangeLeft from "../../svg/ArrowOrangeLeft.svg"
import { otpVerify } from '../../api/api'
import { useDispatch } from 'react-redux'
import { AUTH_TYPE } from '../../redux/action/authAction'
import { setSession } from '../../api/authAxios'
const CELL_COUNT=6;

const OtpConfirmScreen = ({navigation,route}) => {
    console.log("route.params");
    console.log(route.params);
    
    const [value,setValue]=useState('123456');
    const ref=useBlurOnFulfill({value,cellCount:CELL_COUNT})
    const [props,getCellOnLayoutHandler]=useClearByFocusCell({value,setValue})
    const dispatch = useDispatch()

    const storeUserData =(userData)=>{
      dispatch({type:AUTH_TYPE.RECEIVED_USER_DATA,payload:userData})
    }

    const verifyOTP= async()=>{

      let payload=
      {
        phoneNumber:route.params?.phoneNumber,
        verificationKey:route.params?.key,
        otp:value,
      }

      try{
        let res= await otpVerify(payload)
        if(res){
          console.log("***** received user data **** ",res.data.data.user)
          const{user,accessToken,refreshToken}=res.data.data
          storeUserData(user)
          setSession(accessToken,refreshToken)
          navigation.navigate("Home")
        }
      }
      catch(error){
        console.log(error)
      }
    }
    
  return (

    <SafeAreaView style={styles.root}>
    
    <ArrowOrangeLeft></ArrowOrangeLeft>

    <View style={{marginHorizontal:20}}>
    <View style={{marginVertical:20}}>
        <Text style={styles.title}>Please Verify</Text>
        <Text style={styles.title}>Your Number</Text>
        <View style={{marginVertical:10}}>
            <Text style={{color:"#000"}}>Enter the OTP code that we have</Text>
            <Text style={{color:"#000"}}>sent by  text  to  {route.params?.phoneNumber}</Text>
        </View>
    </View>

    
    <CodeField
      ref={ref}
      {...props}
      // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
      value={value}
      onChangeText={setValue}
      cellCount={CELL_COUNT}
      rootStyle={styles.codeFieldRoot}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      renderCell={({index, symbol, isFocused}) => (
        <Text
          key={index}
          style={[styles.cell, isFocused && styles.focusCell]}
          onLayout={getCellOnLayoutHandler(index)}>
          {symbol || (isFocused ? <Cursor /> : null)}
        </Text>
      )}
    />
    
        <Pressable style={{backgroundColor:"#ff0543",justifyContent:"center",alignItems:"center",paddingVertical:6,borderRadius:10}}
                   onPress={verifyOTP}>
            <Text style={{fontSize:25,color:'white'}}>
                Submit
            </Text>
        </Pressable>
        
        <Text style={{marginVertical:20,color:"#FF0543",
    textDecorationLine:"underline",alignSelf:"center"}}>Resend OTP</Text>
    </View>
  </SafeAreaView>

  )
}

export default OtpConfirmScreen

const styles = StyleSheet.create({
  root: {flex: 1, padding: 20},
  title: {fontSize: 30,color:"black"},
  codeFieldRoot:{
    marginVertical: 20,},
  cell: {
    width: 35,
    height: 35,
    fontSize: 24,
    borderWidth: 1,
    borderRadius:5,
    borderColor: '#444',
    backgroundColor:"#444",
    textAlign: 'center',
    color:"white",
  },
  focusCell: {
    borderColor: '#000',
  },
})