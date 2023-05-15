import {View,Text,Pressable,StyleSheet,Image} from 'react-native';
import PageHeader from '../PageHeader/PageHeader';
import { useEffect, useState } from 'react';
import MyOrder from './MyOrder';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { useSelector } from 'react-redux';
const OrderDetails=({navigation})=>
{
   
   const amount=useSelector((state)=>state.auth.totalPrice);
   console.log("..amount...",amount);
   const [random,setrandom]=useState(0);
   const a="cancel";
   const [show,setshow]=useState(a);
  const  handlePress=()=>
  {
    setshow("Cancelled");
  }
   useEffect(()=>
   {
     setrandom(Math.floor(Math.random() * 11159099898));
   },[])
  
    return (
        <>
        <View   >
          <View>
                  <PageHeader text="Order Details"></PageHeader>
                  
          </View>
          <View style={styles.container}> 
          <Pressable  onPress={()=>navigation.navigate("MyOrder")}> 
          <View>
         
          <Text
            style={{
              alignSelf: 'flex-start',
              marginHorizontal: 20,
              color: 'grey',
              fontWeight: 'bold',
              fontSize: 18,
            }}>
           Order Id: {random}
          </Text>
          <Text  style={{
              alignSelf: 'flex-start',
              marginVertical:4,
              marginHorizontal: 20,
              color: 'grey',
              fontWeight: 'bold',
              fontSize: 18,
            }}>Total Amount : {amount}</Text>
      
        </View>
        </Pressable>
        <Pressable style={{width:90,height:34,borderWidth:1,alignSelf:'center',marginVertical:30,borderRadius:10,backgroundColor:"#FF5403"}} onPress={handlePress}>
            <Text style={{alignSelf:'center',color:'white',marginVertical:4,fontSize:16}}>{show}</Text>
        </Pressable>
        </View>
        </View>
    
    <View >



</View>
        
        </>
    )
}
export default OrderDetails;

const styles = StyleSheet.create({
    container: {
       marginVertical:20,
       alignSelf:'center',
       width:widthPercentageToDP("80%"),
       height:heightPercentageToDP("20%"),
       borderRadius:7,
       backgroundColor:'white',
       elevation:2,

       

    },
   
    
  })

