import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ArrowSVG from "../../svg/Arrow.svg"
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
const PageHeader = (props) => {
    const {navigation,navigateTo}=props
  return (
    <View style={styles.container}>
    
        <View style={styles.titleContainer}>
            <Pressable style={{width:20}} onPress={()=>navigation.navigate(navigateTo?navigateTo:"Home")}>
                  <ArrowSVG></ArrowSVG>
            </Pressable>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    </View>
  )
}

export default PageHeader;

const styles = StyleSheet.create({
    container:{
        height:hp("10%"),
        width:"100%",
        backgroundColor:"#FF5403",
        borderBottomRightRadius:40,
        borderBottomLeftRadius:40,
        justifyContent:"center"
    },
    titleContainer:{
        flexDirection:"row",
        justifyContent:"flex-start",
        gap:10,
        alignItems:"center",
        marginBottom:0,
        marginHorizontal:20,
        height:40
    },
    text:{
        color:"white",
        fontSize:22,
        fontWeight:"bold"
    }

})