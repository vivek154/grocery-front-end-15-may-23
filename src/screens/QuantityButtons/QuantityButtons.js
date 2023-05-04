import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { postmycart } from '../../api/api';



const QuantityButtons = () => {

    const   [count,setcount]=useState(0);

    postmycart({quantity:count})
  return (
    <View style={styles.container}>
        <Pressable style={[styles.buttons,{borderColor:"#C4C4C4"}]} onPress={()=>console.log("Hellow")}>
            <Text style={{color:"#C4C4C4"}} onPress={()=>setcount(count-1)}>-</Text>
        </Pressable >

            <Text style={{color:"black"}}>{count}</Text>

        <View style={[styles.buttons]}>
            <Text style={{color:"black"}} onPress={()=>setcount(count+1)}>+</Text>
        </View>
    </View>
  )
}

export default QuantityButtons

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        gap:5,
        alignItems:"center"
    },
    buttons:{
        justifyContent:"center",
        alignItems:"center",
        borderWidth:1,
        justifyContent:"center",
        width:20,
        height:20,
    }
})