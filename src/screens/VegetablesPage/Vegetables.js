import {StyleSheet, Text, View,ScrollView, SafeAreaView} from 'react-native'
import React,{useEffect,useState}from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { arr } from './vegetables_data';
import PageHeadBar from '../PageHeadBar/PageHeadBar';
import BottomNavBar from '../BottomNavBar/BottomNavBar';
import { getVegetables } from '../../api/api';


const Vegetables = (props) => {

  const {navigation}=props;
  let [arr1,setArray]= useState([]);
  console.log(arr1,"arr1")

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
    /*let res=axios.get("http://localhost:9000/v1/vegetable/getAll").then((response)=>{
      console.log(response.data);
      setArray(response.data);
      console.log(arr1);
    }).catch(err=>console.log(err));*/
  },[])

  /*useEffect(()=>{
    console.log(arr1)
  },[arr1]);*/

  
  
  return (
  <>
    
    <PageHeadBar title="Vegetables" navigation={navigation}></PageHeadBar> 
    <ScrollView style={{backgroundColor:"white"}}>
      <View style={{flex:1,flexDirection:"row",paddingBottom:60,flexWrap:"wrap",justifyContent:"center",columnGap:10,rowGap:10}}>
      
        {
            arr1.map((item)=>(
              <View key={item.id} >
                  <ProductCard item={item}></ProductCard>
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