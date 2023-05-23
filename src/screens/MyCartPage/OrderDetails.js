import { ActivityIndicator, StyleSheet, Text, View,Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import PageHeader from '../PageHeader/PageHeader'
import { ScrollView } from 'react-native-gesture-handler'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { getOrderDatails } from '../../api/api'

const OrderDetails = (props) => {

  const{navigation,route}=props
  const{orderId}=route.params
  const [orderDetails,setOrderDetails]=useState([])
  console.log('order Details',orderDetails)
  const [showLoader,setShowLoader]=useState(true)
  const fetchOrderDetails= async()=>{
    try{
      const response=await getOrderDatails(orderId)
      if (response.data){
        setOrderDetails(response.data)
        setShowLoader(false)
      }
    }
    catch(error){
      console.log(error)
    }
  }
useEffect(()=>{
  fetchOrderDetails()
},[orderId])
  
    
  
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <PageHeader text="Order Details" navigation={navigation} 
        navigateTo="MyOrder"></PageHeader>
      </View>
      <View style={styles.bodyContainer}>
        <ScrollView style={{paddingVertical:8}}>
          {!showLoader &&
            orderDetails.map((product,index)=>
            <View key={index} style={styles.cardContainer}>
              <Image source={{uri: product.productImage}} style={styles.image}></Image>

              <View style={{width: '60%', flexDirection: 'row'}}>
                <View style={styles.middleBox}>
                  <Text style={{fontWeight: 'bold', color: 'black', fontSize: 15}}>
                    {product.productName}
                  </Text>
                  <Text style={{color: 'black'}}>Price : {product.price}</Text>
                  <Text style={{color: 'black'}}>Quantity : {product.quantity}</Text>
                  <Text style={{color: 'black'}}>Sum Total : {product.quantity * product.price}</Text>
                </View>
              </View>
            </View>
          )}
          {
            showLoader &&
            <ActivityIndicator color={"#FF5403"} style={{alignSelf:"center"}}></ActivityIndicator>
          }
        </ScrollView>
      </View>
    </View>
  )
}

export default OrderDetails

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#FFF"
  },
  headerContainer:{
    height:hp("10%")
  },
  bodyContainer:{
    height:hp("90%"),
    backgroundColor:"#FFF"
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    minHeight: '15%',
    padding: 10,
    elevation: 5,
    borderRadius: 10,
    maxwidth: '90%',
    minWidth: '70%',
    marginVertical: 7,
  },
  middleBox:{
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    marginHorizontal: 10,
    width: 120,
  },
  image:{
    width: 101,
    height: 101,
    resizeMode: 'contain',
  }
})