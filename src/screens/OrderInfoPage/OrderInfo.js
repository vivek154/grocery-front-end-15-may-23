import { StyleSheet, Text, View,ScrollView,TextInput} from 'react-native'
import React from 'react'
import AdressCard from '../AdressCard/AdressCard'
import PageHeader from '../PageHeader/PageHeader'
import DeliveryCard from './DeliveryCard/DeliveryCard'
import BottomNavBar from '../BottomNavBar/BottomNavBar'
import Mybutton from '../Mybutton'

const OrderInfo = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <PageHeader text="Order Information"></PageHeader>
      <ScrollView style={{paddingHorizontal:10}}>
      <View style={styles.adressCardContainer}>
        <AdressCard></AdressCard>
      </View>
      <View style={{flexDirection:"row",justifyContent:"space-between",marginVertical:10}}>
        <Text style={{color:"black",fontWeight:"bold"}}>Delivery Time</Text>
        <Text style={{color:"black"}}>3:00pm</Text>
        <Text style={{color:"black"}}>23 Apr 2022</Text>
        <Text style={{color:"#FF0504"}}>Edit</Text>
      </View>
      <DeliveryCard></DeliveryCard>
      <Text style={{color:"black",fontWeight:"bold"}}>Note</Text>
      <View style={styles.textBox}>
        <TextInput multiline numberOfLines={6}></TextInput>
      </View> 
      <View style={styles.buttonContainer}>
        <Mybutton btnTxt="Rating" txtColor="white" myButton={styles.myButton}></Mybutton>
        <Mybutton btnTxt="Repeat Order" txtColor="white" myButton={styles.myButton}></Mybutton>
      </View>
      </ScrollView> 
   </View>
   
   <BottomNavBar></BottomNavBar>
   </>
  )
}

export default OrderInfo

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  adressCardContainer:{
    marginVertical:10,
  },
  textBox:{
    flex:1,
    width:"100%",
    alignSelf:"center",
    marginVertical:10,
    backgroundColor:"white",
    borderRadius:5,
    elevation:5
  },
  myButton:{
    backgroundColor:"#FF5403",
    borderColor:"#000000",
    fontWeight:"bold",
    fontSize:12,
    borderRadius:20,
    padding:10,
    width:"45%",

},
buttonContainer:{
  width:"100%",
  flexDirection:"row",
  alignSelf:"center",
  alignItems:"center",
  justifyContent:"space-around",
  marginHorizontal:10,
}
})