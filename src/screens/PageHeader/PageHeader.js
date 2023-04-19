import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ArrowSVG from "../../svg/Arrow.svg"
const PageHeader = (props) => {
  return (
    <View style={styles.container}>
        <View style={styles.titleContainer}>
            <ArrowSVG></ArrowSVG>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    </View>
  )
}

export default PageHeader

const styles = StyleSheet.create({
    container:{
        width:"100%",
        minHeight:"12%",
        backgroundColor:"#FF5403",
        borderBottomRightRadius:40,
        borderBottomLeftRadius:40,
        
    },
    titleContainer:{
        flexDirection:"row",
        maxWidth:"50%",
        justifyContent:"flex-start",
        gap:10,
        alignItems:"center",
        width:"60%",
        marginVertical:"15%",
        marginHorizontal:20
    },
    text:{
        color:"white",
        fontSize:22,
        fontWeight:"bold"
    }

})