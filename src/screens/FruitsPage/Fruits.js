import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React,{useState,useEffect}from 'react'
import { arr } from './fruits_data'
import PageHeadBar from '../PageHeadBar/PageHeadBar'
import BottomNavBar from '../BottomNavBar/BottomNavBar'
import ProductCard from '../ProductCard/ProductCard'
import { getFruits } from '../../api/api'
const Fruits = ({navigation}) => {

    const [fruits,setFruits] = useState([]);

    const makeApiRequest = async()=>{
      try{
        let response = await getFruits();
        setFruits(response.data);
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
    <PageHeadBar title="Fruits" navigation={navigation}></PageHeadBar> 
    <ScrollView style={{backgroundColor:"white",marginVertical:4}}>
      <View style={{flex:1,paddingBottom:60,flexDirection:"row",flexWrap:"wrap",justifyContent:"center",columnGap:10,rowGap:10}}>
      
        {
            fruits.map((item)=>(
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

export default Fruits

const styles = StyleSheet.create({})