import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const QuantityButtons = () => {
  return (
    <View style={styles.container}>
        <View style={[styles.buttons,{borderColor:"#C4C4C4"}]}>
            <Text style={{color:"#C4C4C4"}}>-</Text>
        </View >

            <Text style={{color:"black"}}>1Kg</Text>

        <View style={[styles.buttons]}>
            <Text style={{color:"black"}}>+</Text>
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