import { StyleSheet, Text, View,ScrollView,Button} from 'react-native'
import React from 'react'


const NavigationPage = ({navigation}) => {
  return (
    <ScrollView>
        <Button title='Onboarding Page' onPress={()=>{navigation.navigate("Onboarding") }}></Button>
        <Button title='Login Screen' onPress={()=>{navigation.navigate("LoginScreen") }}></Button>
        
        <Button title='OrderInfo' onPress={()=>{navigation.navigate("OrderInfo") }}></Button>
        <Button title='Vegetables' onPress={()=>{navigation.navigate("vegetablesPage") }}></Button>
        <Button title='Fruits' onPress={()=>{navigation.navigate("FruitsPage") }}></Button>
        <Button title='MyCartPage' onPress={()=>{navigation.navigate("MyCartPage") }}></Button>
        <Button title='SavePage' onPress={()=>{navigation.navigate("SavePage") }}></Button>
        <Button title='Delivery' onPress={()=>{navigation.navigate("Delivery") }}></Button>
        <Button title='MyProfile' onPress={()=>{navigation.navigate("MyProfile") }}></Button>
        <Button title='Guarantees' onPress={()=>{navigation.navigate("Guarantees") }}></Button>
        <Button title='SpleshScreen' onPress={()=>{navigation.navigate("SpleshScreen") }}></Button>
        <Button title='OtpConfirmScreen' onPress={()=>{navigation.navigate("OtpConfirmScreen") }}></Button>
        <Button title='Home' onPress={()=>{navigation.navigate("Home") }}></Button>
        <Button title='Categories' onPress={()=>{navigation.navigate("MainCategory") }}></Button>
        <Button title='Notifications Page' onPress={()=>{navigation.navigate("MainNotification") }}></Button>
        <Button title='PaymentOptions' onPress={()=>{navigation.navigate("PaymentOptions") }}></Button>
        <Button title='OffersPage' onPress={()=>{navigation.navigate("OffersPage") }}></Button>
        <Button title='GroceryPage' onPress={()=>{navigation.navigate("GroceryPage") }}></Button>
        <Button title='ProductListPage' onPress={()=>{navigation.navigate("ProductList") }}></Button>
        <Button title='SearchPage' onPress={()=>{navigation.navigate("SearchPage") }}></Button>
        <Button title='Registration Page' onPress={()=>{navigation.navigate("Register") }}></Button>
        <Button title='Onboarding Page' onPress={()=>{navigation.navigate("Onboarding") }}></Button>
        <Button title='OrderDetails' onPress={()=>{navigation.navigate("OrderDetails")}}></Button>
      
    </ScrollView>
  )
}

export default NavigationPage

const styles = StyleSheet.create({})