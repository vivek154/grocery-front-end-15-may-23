import { StyleSheet, Text, View,Dimensions,Pressable } from 'react-native'
import React from 'react'
const width=Dimensions.get("screen").width;
import HomeSVG from "../../svg/Home.svg"
import CategoriesSVG from "../../svg/Categories.svg"
import SearchSVG from "../../svg/Search.svg"
import ProductListSVG from "../../svg/Productlist.svg"
import BasketSVG from "../../svg/Basket.svg"

const BottomNavBar = ({navigation}) => { 

  function showHome(){
    navigation.navigate("Home");
  }
  function showCategories(){
    navigation.navigate("MainCategory");
  }
  function showSearchPage(){
    navigation.navigate("SearchPage");
  }
  function showProductList(){
    navigation.navigate("ProductList");
  }
  function showMyCart(){
    navigation.navigate("MyCartPage");
  }
  return (
  <View style={styles.BottomNavBar}>
    <Pressable style={styles.iconsContainer} onPress={showHome}>
        <HomeSVG></HomeSVG>
        <Text style={{color:"#000"}}>Home</Text>
    </Pressable>
    <Pressable style={styles.iconsContainer} onPress={showCategories}>
        <CategoriesSVG></CategoriesSVG>
        <Text style={{color:"#000"}}>Categories</Text>
    </Pressable>
    <Pressable style={styles.iconsContainer} onPress={showSearchPage}>
        <SearchSVG></SearchSVG>
        <Text style={{color:"#000"}}>Search</Text>
    </Pressable>
    <Pressable style={styles.iconsContainer} onPress={showProductList}>
        <ProductListSVG></ProductListSVG>
        <Text style={{color:"#000"}}>Productlist</Text>
    </Pressable>
    <Pressable style={styles.iconsContainer} onPress={showMyCart}>
        <BasketSVG></BasketSVG>
        <Text style={{color:"#000"}}>Basket</Text>
    </Pressable>
  </View>
  )
}

export default BottomNavBar

const styles = StyleSheet.create({
    BottomNavBar:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly",
        minHeight:(0.15*width),
        minWidth:"100%",
        borderTopRightRadius:(0.25*0.15*width),
        borderTopLeftRadius:(0.25*0.15*width),
        shadowRadius:(0.25*width),
        alignSelf:"center",
        position:"absolute",
        bottom:0,
        elevation:1,
        backgroundColor:"white",
        
      },
      iconsContainer:{
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
      }
})



