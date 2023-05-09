import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DownArrowSvg from "../../svg/downArrow.svg"
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'


const ProfileActionCard = ({LeftSvg,optionName,navigation,item}) => {
  return (
    <View style={styles.container}>
        <View style={{flexDirection:"row",alignItems:"center",gap:10}}>
            <View style={{width:50,height:40,justifyContent:"center",alignItems:"center"}}>
                <LeftSvg></LeftSvg>
            </View>
            <Text style={{color:"#000"}} onPress={()=>navigation.navigate(item.goto)}>{optionName}</Text>
        </View>
        <View>
            <DownArrowSvg></DownArrowSvg>
        </View>
    </View>
  )
}

export default ProfileActionCard

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:'center',
        marginHorizontal:"5%",
        padding:5,
        
        width:responsiveScreenWidth(90),
       
        borderRadius:4,
        
       
        rowGap:4
        
    }
})