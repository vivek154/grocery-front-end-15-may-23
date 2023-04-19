import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const SpleshScreen = () => {
  return (
    <View style={{
        flex:1,
        backgroundColor:"#FF5403",
        alignItems:"center",
        justifyContent:"center"
    }}>
      <Image source={require("../../images/Group15.png")} style={{resizeMode:"contain"}}></Image>
    </View>
  )
}

export default SpleshScreen

const styles = StyleSheet.create({})