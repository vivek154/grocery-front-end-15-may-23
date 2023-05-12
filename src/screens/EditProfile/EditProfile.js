import { StyleSheet, Text, View,TextInput} from 'react-native'
import React, { useState } from 'react'
import Mybutton from '../Mybutton'
import { updateUserProfileData} from '../../api/api'
import { useDispatch, useSelector } from 'react-redux'
import { AUTH_TYPE } from '../../redux/action/authAction'
import PageHeader from '../PageHeader/PageHeader'

const EditProfile = (props) => {
    
    const {navigation}=props
    const state= useSelector(state=>state?.auth)
    console.log("state at edit profile page",state)
    const data=useSelector((state)=>state.auth.myCart);
    console.log("Data from my cart length",data);
    console.log("Length",data.length);
    const userID = state?.userData.id
    const dispatch=useDispatch()
    const [name,setName]= useState('')
    const [email,setEmail]= useState('')
    const [phoneNumber,setPhoneNumber]=useState('')
    const [adress,setAdress]=useState('')

    const requestUpdateProfile= async() =>{
        try{
        let userData={
            fullName:name,
            email:email,
            phoneNumber:phoneNumber,
            adress:adress,
            userId:userID
        }
        let response = await updateUserProfileData(userData)
        dispatch({type:AUTH_TYPE.UPDATE_USER_DATA,payload:response.data})
        console.log("updated profile response ",response.data)
        setTimeout(()=>navigation.navigate("MyProfile"),1500)
        
        }
        catch(err){
            console.log(err)
        }
        
    }

  return (
    <>
    <View style={{backgroundColor:'white'}}>
    <PageHeader text="Edit Profile"></PageHeader>
    </View>
    <View style={styles.container}>
        
            <Text style={styles.lable}> Name</Text>

            <TextInput value={name} placeholder='' onChangeText={setName} style={styles.textInput}></TextInput>
        

        
            <Text style={styles.lable}>Email</Text>
            <TextInput value={email} placeholder='' onChangeText={setEmail} style={styles.textInput}></TextInput>
        

        
            
            <Text style={styles.lable}>Phone Number</Text>
            <TextInput value={phoneNumber} placeholder='' onChangeText={setPhoneNumber} style={styles.textInput}></TextInput>
        

        
            <Text style={styles.lable}>Adress</Text>
            <TextInput value={adress} placeholder='' onChangeText={setAdress} style={styles.textInput}></TextInput>
        
            <View style={{justifyContent:"center",alignItems:"center",marginVertical:15}}>
                <Mybutton width={200} btnTxt="save changes" onPress={requestUpdateProfile}></Mybutton>
            </View>
    </View>
    </>
  )
}

export default EditProfile

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#FFFFFF",
        padding:10
    },
    textInput:{
        borderWidth:1,
        borderColor:"#000",
        color:"#000"
    },
    lable:{
        color:"#000"
    }
})