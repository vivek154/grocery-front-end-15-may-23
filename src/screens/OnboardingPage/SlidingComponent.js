import { StyleSheet, Text, View,Image,Dimensions } from 'react-native'
import React from 'react'
const width=Dimensions.get('window').width;
const height=Dimensions.get('window').height
const SlidingComponent = (props) => {
  return (
    <View style={{justifyContent:"center",alignItems:"center",backgroundColor:'white',}}>
    <View style={{width:300,height:270,marginBottom:25}}>
      <Image source={props.item.url} style={{resizeMode:'contain',width:width,height:height/2,backgroundColor:'white',alignSelf:'center'}}></Image>
      </View>
      <View style={{flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <Text style={{color:"black",fontSize:20}}>{props.item.title}</Text>
        <Text style={{color:"#000"}}>{props.item.description}</Text>
      </View>
    </View>
  )
}

export default SlidingComponent

