import { StyleSheet, Text, View,TextInput,ActivityIndicator} from 'react-native'
import React, { useEffect, useState } from 'react'
import Mybutton from '../Mybutton'
import { getUserDataById, updateUserProfileData} from '../../api/api'
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
    const [fetchDataIndicator,setFetchDataIndicator]=useState(true)
    const getUserData=async()=>{
        let responce= await getUserDataById(userID)
        if(responce.data){
            const{fullName,email,address,phoneNumber}=responce.data
            setName(fullName?fullName:"")
            setEmail(email?email:"")
            setPhoneNumber(phoneNumber?phoneNumber:"")
            setAdress(address?address:"")
            setFetchDataIndicator(false)
        }
    }
    useEffect(()=>{
        getUserData()                                                                                                                                                                                                                                      
    },[])
    const requestUpdateProfile= async() =>{
        try{
        let userData={
            fullName:name,
            email:email,
            phoneNumber:phoneNumber,
            address:adress,
            userId:userID
        }
        let response = await updateUserProfileData(userData)
        dispatch({type:AUTH_TYPE.UPDATE_USER_DATA,payload:response.data})
        setTimeout(()=>navigation.navigate("MyProfile"),1500)
        
        }
        catch(err){
            console.log(err)
        }
        
    }

  return (
    <>
    <View style={{backgroundColor:'white'}}>
    <PageHeader text="Edit Profile" navigation={navigation} navigateTo={"MyProfile"} ></PageHeader>
    </View>
    <View style={styles.container}>
        
            <Text style={styles.lable}> Name</Text>

            <TextInput value={name} placeholder='' onChangeText={setName} style={styles.textInput}></TextInput>
        

        
            <Text style={styles.lable}>Email</Text>
            <TextInput value={email} placeholder='' onChangeText={setEmail} style={styles.textInput}></TextInput>
        

        
            
            <Text style={styles.lable}>Phone Number</Text>
            <TextInput value={phoneNumber} placeholder='' onChangeText={setPhoneNumber} style={styles.textInput}></TextInput>
        

        
            <Text style={styles.lable}>Address</Text>
            <TextInput value={adress} placeholder='' onChangeText={setAdress} style={styles.textInput}></TextInput>
        
            <View style={{justifyContent:"center",alignItems:"center",marginVertical:15}}>
                { !fetchDataIndicator &&
                    <Mybutton txtColor={"#fff"} width={200} btnTxt="save changes" onPress={requestUpdateProfile}></Mybutton>
                }
                {
                    fetchDataIndicator && <ActivityIndicator></ActivityIndicator>
                }
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
        color:"#000",
        borderRadius:10,
    },
    lable:{
        color:"#000",
        fontWeight:'bold'
    },
})