import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import LocationSVG from "../../svg/location_orange.svg"
import ProfileIconSvg from "../../svg/profileIcon.svg"
import CallIconSvg from "../../svg/callIcon.svg"
const AdressCard = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../images/map.png")}>

      </Image>
      <View style={styles.adressContainer}>
         <View style={styles.svgContainer}>
          <LocationSVG></LocationSVG>
          <Text style={{color:"#000"}}>H/7 shiv flat Jivrajpark Ahmedabad</Text>
         </View>
         <View style={styles.svgContainer}>
          <ProfileIconSvg></ProfileIconSvg>
          <Text style={{color:"#000"}}>John Doe</Text>
         </View>
         <View style={styles.svgContainer}>
          <CallIconSvg></CallIconSvg>
            <Text style={{color:"#000"}}>1234567899</Text>
         </View>
      </View>
    </View>
  )
}

export default AdressCard

const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    justifyContent:"space-between",
    gap:10,
    alignItems:"center",
    alignSelf:"center",
    width:"100%",
    padding:10,
    borderRadius:10,
    elevation:5,
    backgroundColor:"#ffffff",

  },
  adressContainer:{
    flexDirection:"column",
    gap:10,
    width:"60%"
  },
  svgContainer:{
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"center",
    gap:10,
   
  }

})