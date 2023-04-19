import { Image, StyleSheet, Text, View,Dimensions} from 'react-native'
import React from 'react';
import Mybutton from '../Mybutton'

const width=Dimensions.get('window').width;

const url="../Home/Images/img1.jpg";
const TestComp = () => {
  const handlePress=()=>{
    console.log("Added to cart");
  }


  return (
    <View style={styles.container}>
      
    </View>
  )
}

export default TestComp

const percentage=(percent,entity)=>{
  return parseInt((percent/100)*entity)
}

const containerWH={width:percentage(50,width),height:percentage(50,width)};
const discount_containerWH={width:percentage(20,containerWH.width),height:percentage(20,containerWH.height)}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:percentage(50,width),
        height:percentage(50,width),
        elevation:1,
        borderWidth:1,
        borderColor:"#000000",
        borderRadius:percentage(0,containerWH.width),
        backgroundColor:"#ffffff"
    },
    top_view_container:{
        flexDirection:"row",
        justifyContent:"space-between",
    },
    discount_container:{
      borderWidth:1,
        width:discount_containerWH.width,
        height:discount_containerWH.height,
        backgroundColor:"#ff9900",
        justifyContent:"center",
        alignItems:"center",
    },
    image_container:{
        borderWidth:1,
        justifyContent:"center",
        alignItems:"center"
    },
    image:{
      width:percentage(80,width),
      height:percentage(50,containerWH.width),
      borderWidth:1,
      resizeMode:"contain",
    },
    title_container:{
        justifyContent:"flex-end"
    },
    myButton:{
      backgroundColor:"#FFFFFF",
      borderWidth:1,
      borderColor:"#ff9900",
      borderRadius:5,
      padding:2,
      width:50,
      marginTop:2
  }
})