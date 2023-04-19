import { StyleSheet, Text, View,Image} from 'react-native'
import React from 'react'

const GuaranteesCard = (props) => {
  return (
    <View style={styles.container}>
      <Image source={props.item.url} style={{width:50,height:60,resizeMode:"contain"}}></Image>
      <View style={{flexDirection:"column",gap:5}}>
        <Text style={{fontSize:17,color:"white",fontWeight:"bold"}}>{props.item.title}</Text>
        <Text style={{color:"white"}}>{props.item.description}</Text>
      </View>
    </View>
  )
}

export default GuaranteesCard

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        backgroundColor:"#ff5403",
        gap:20,
        paddingVertical:10,
        paddingHorizontal:15,
        marginVertical:10,
        alignItems:"center",
        borderRadius:5,
        maxHeight:70
    }
})