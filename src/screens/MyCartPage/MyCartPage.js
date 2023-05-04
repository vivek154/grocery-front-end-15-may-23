import { ScrollView, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import PageHeader from '../PageHeader/PageHeader'
import MyCartCard from './MycartCard/MyCartCard'
import Mybutton from '../Mybutton'

import { useState ,useEffect} from 'react';
import DeleteIcon from "../../svg/delete.svg"
import { getmycart } from '../../api/api'
import { useSelector } from 'react-redux'

const MyCartPage = ({navigation}) => {
    function showDeliveryOptions(){
        navigation.navigate("Delivery")
    }
    const [data,setdata] = useState([]);

   console.log("data",data);

   const {userData}=useSelector(state=>state?.auth)
   console.log("userData" , userData)
 
   console.log("userDataId",userData.id);

    const makeApiRequest = async()=>{
      try{
        let response = await getmycart(userData.id);
        console.log("get my cart response ",response.data);
        setdata(response.data);
        
      }
      catch(err){
        console.log(err);
      }
    }
    useEffect(()=>{
      makeApiRequest()
    },[])

  return (
    <>
        <View style={{backgroundColor:"white",height:"100%"}}>
            <View>
                <PageHeader text="My Cart"></PageHeader>
            </View>
            
            <ScrollView style={{maxHeight:"70%"}}>
               <View >
                    {data.map((item,index)=>{
                      return <MyCartCard key={index} item={item} SVGIcon={DeleteIcon}></MyCartCard>
                    })}
                </View> 

            </ScrollView>

            <View style={styles.billContainer}>
                    <View>
                        <Text style={{color:"black",fontWeight:"bold",fontSize:20}}>$10</Text>
                        <Text style={{fontWeight:"bold",color:"#C4C4C4"}}>Total Price</Text>
                    </View>
                    <View>
                        <Mybutton btnTxt="Buy Now "txtColor="white" myButton={styles.myButton} onPress={showDeliveryOptions} data={data}></Mybutton>
                    </View>
            </View>
            

        </View>
    </>        
  )
}

export default MyCartPage

const styles = StyleSheet.create({
    myButton:{
        backgroundColor:"#FF5403",
        borderColor:"#000000",
        fontWeight:"bold",
        fontSize:14,
        borderRadius:20,
        padding:10,
        width:150
      },
    billContainer:{
       
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:20,
        marginVertical:10,
        backgroundColor:"white",

    }
})