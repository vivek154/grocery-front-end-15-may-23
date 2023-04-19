import { StyleSheet, Text, View,Image,ScrollView} from 'react-native'
import React from 'react'
import GuaranteesCard from './GuaranteesCard'
const images=[
    {
        url:require("../../images/Quality.png"),
        title:"Quality",
        description:"You Can Trust"
    },
    {
        url:require("../../images/Ontime.png"),
        title:"On Time Guarantee",
        description:"5% Bill value back if we late"
    },
    {
        url:require("../../images/Returnpolicy.png"),
        title:"Return Policy",
        description:"No Questions Asked"
    },
    {
        url:require("../../images/Deleivery.png"),
        title:"Free Delivery",
        description:"On Orders above $100"
    }
]

const Guarantees = () => {
  return (
    <View style={{flexDirection:"column",justifyContent:"space-between",height:"100%",backgroundColor:"white"}}>
        
        <Image source={require("../../images/top_left.png")} style={{alignSelf:"flex-start"}}></Image>
        <ScrollView style={{minHeight:"50%"}}>
        <View style={{paddingHorizontal:10}}>
            <Text style={{color:"black",fontWeight:"bold",fontSize:30}}>Our Guarantees</Text>
            {images.map((item,index)=>{
                return(
                    <GuaranteesCard item={item} key={index}></GuaranteesCard>
                )
            })}
        </View>
        </ScrollView>
        <View style={{flexDirection:"row",width:"100%",justifyContent:"flex-end"}}>
            <Image source={require("../../images/bottom_right.png")}></Image>
        </View>
    </View>
  )
}

export default Guarantees

const styles = StyleSheet.create({

})