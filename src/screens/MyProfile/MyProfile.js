import { StyleSheet, Text, View,ScrollView} from 'react-native'
import React from 'react'
import PageHeader from '../PageHeader/PageHeader'
import ProfileCard from './ProfileCard'
import LocationIcon from "../../svg/location_orange.svg"
import LogOutIcon from "../../svg/logoutIcon.svg"
import Mybutton from '../Mybutton'
import data from "./data"
import ProfileActionCard from './ProfileActionCard'
import BottomNavBar from '../BottomNavBar/BottomNavBar'
import { responsiveHeight, responsiveScreenHeight } from "react-native-responsive-dimensions";
import { useSelector } from 'react-redux'
const MyProfile = ({navigation}) => {

    const {userData}= useSelector(state=>state?.auth)

  return (
    <>
        
        <View style={{backgroundColor:"white",minHeight:"100%",flex:1}}>
           <View >
            
             <PageHeader text="My Profile"></PageHeader>
            
            
          
            <View>
             <ProfileCard userData={userData} navigation={navigation}></ProfileCard>
          
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:"8%",marginVertical:10}}>
                 <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",gap:10,}}>
                    <LocationIcon></LocationIcon>
                    <Text style={{color:"#000"}}>Adress</Text>
                 </View>
                <Mybutton myButton={styles.myButton} btnTxt="Change" txtColor="#C4C4C4"></Mybutton>
            </View>
            </View>
        </View> 
         
            <View style={{flexDirection:"column",gap:3,flex:0.75}}>
       
            <ScrollView  style={{}}>
               { data.map((item,index)=>{
                    return(
                        <ProfileActionCard key={index} item={item} optionName={item.option} LeftSvg={item.SVG} navigation={navigation}></ProfileActionCard>
                    )
                })}
             
                   
                </ScrollView>
                </View>
               
               
                <BottomNavBar navigation={navigation}></BottomNavBar>
           
         
          
      
      
        </View>
       {/* <View style={{height:responsiveHeight(10)}}></View>*/}
     
    </>
 
  )
}

export default MyProfile

const styles = StyleSheet.create({
    myButton:{
    
        backgroundColor:"#ffffff",
        borderColor:"#C4C4C4",
        fontWeight:"bold",
        fontSize:12,
        borderRadius:20,
        padding:10,
        minWidth:100,
        borderWidth:2,
    }
})