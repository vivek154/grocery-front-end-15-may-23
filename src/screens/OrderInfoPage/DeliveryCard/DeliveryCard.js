import { StyleSheet, Text, View,Image, ScrollView } from 'react-native'
import React from 'react'

const DeliveryCard = ({navigation}) => {
  return (
    
    <View style={styles.container}>
      <Image source={require("../../../images/apple.jpg")} style={styles.image}></Image>
      
      <View style={{width:"60%",flexDirection:"row"}}> 
        <View style={styles.middleBox}>
          <Text style={{fontWeight:"bold",color:"black",fontSize:15}}>Fresh Apple</Text>
          <Text style={{color:"black"}}>H/7 shiv flat Jivrajpark Ahmedabad</Text>
          <Text>$10</Text>
        </View>

        <View style={styles.endRightBox}>
          <View style={styles.quantityContainer}>
              <Text style={{fontSize:12,color:"black"}}>1KG</Text>
          </View>
        </View>
      </View>  
    </View>
    
  )
}

export default DeliveryCard

const styles = StyleSheet.create({

    container:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignSelf:"center",
        backgroundColor:"#ffffff",
        minHeight:"15%",
        padding:10,
        elevation:5,
        borderRadius:10,
        width:"100%",
        marginVertical:10
    },
    image:{
        width:101,
        height:101,
        resizeMode:"contain"
    },
    middleBox:{
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"flex-start",
        flexWrap:"wrap",
        marginHorizontal:10,
        gap:5
    },
    endRightBox:{
        flexDirection:"column",
        justifyContent:"flex-end",
    
    },
    quantityContainer:{
        minHeight:30,
        minWidth:30,
        backgroundColor:"grey",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#E5E5E5",
    }
})