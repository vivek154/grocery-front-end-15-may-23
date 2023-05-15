import {StyleSheet, Text, View,ScrollView, SafeAreaView} from 'react-native'
import React,{useEffect,useState}from 'react';
import ProductCard from '../ProductCard/ProductCard';
import PageHeadBar from '../PageHeadBar/PageHeadBar';
import BottomNavBar from '../BottomNavBar/BottomNavBar';
import { getVegetables } from '../../api/api';

const Vegetables = (props) => {

  
  const {navigation}=props;
  let [arr1,setArray]= useState([]);
  

  const makeApiRequest=async()=>{
    try{
      const response=await getVegetables()
      console.log(response.data,"data")
      if (response){
        setArray(response.data);
        console.log(arr1);
      }
    }

    catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    
    makeApiRequest()
  
  },[])
  
  
  return (
  <>
    
    <PageHeadBar title="Vegetables" navigation={navigation}></PageHeadBar> 
    <ScrollView style={{backgroundColor:"white"}}>
      <View style={{flex:1,flexDirection:"row",paddingBottom:60,flexWrap:"wrap",justifyContent:"center",columnGap:10,rowGap:10}}>
      
        {
            arr1.map((item)=>(
              <View key={item.id} >
                  <ProductCard item={item} navigation={navigation}></ProductCard>
              </View>
            )) 
        }
      </View> 
    </ScrollView>
    <BottomNavBar navigation={navigation}></BottomNavBar>
  </>

  )
}

export default Vegetables

const styles = StyleSheet.create({
    
})