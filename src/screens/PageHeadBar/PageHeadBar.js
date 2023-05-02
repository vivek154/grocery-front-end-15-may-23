import { StyleSheet, Text, View,Image,Pressable} from 'react-native'
import React from 'react'
import SearchIconSVG from "../../svg/Search.svg"
import BellIconSVG from "../../svg/BellIcon.svg"
import BasketIconSVG from "../../svg/BasketIcon.svg"
const PageHeadBar = ({title,navigation}) => {

  function showSearchPage(){
    navigation.navigate("SearchPage")
  }
  function showMyCart(){
    navigation.navigate("MyCartPage")
  }
  function showMyProfile(){
    navigation.navigate("MyProfile")
  }
  function showNotificationPage(){
    navigation.navigate("MainNotification")
  }
  return (
    <View style={styles.container}>
      <Text style={{fontSize:23,fontWeight:"bold",color:"black"}}>{title}</Text>
      <View style={styles.iconsContainer}>
        <Pressable onPress={showSearchPage}>
            <SearchIconSVG></SearchIconSVG>
        </Pressable>
        <Pressable onPress={showNotificationPage}>
            <BellIconSVG></BellIconSVG>
        </Pressable>
        <Pressable onPress={showMyCart}>
            <BasketIconSVG></BasketIconSVG>
        </Pressable>
        
        <Pressable onPress={showMyProfile}>
          <Image source={require("../../images/profilePic.png")}></Image>
        </Pressable>
      </View>
    </View>
  )
}

export default PageHeadBar

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        height:"10%",
        paddingHorizontal:20,
        backgroundColor:"white"
    },
    iconsContainer:{
        flexDirection:"row",
        gap:10,
        alignItems:"center",
        justifyContent:"center"
    }
})