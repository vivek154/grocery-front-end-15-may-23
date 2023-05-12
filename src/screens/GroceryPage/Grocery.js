import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React,{useState,useEffect}from 'react'
import { arr } from "./grocery_data"
import PageHeadBar from '../PageHeadBar/PageHeadBar'
import BottomNavBar from '../BottomNavBar/BottomNavBar'
import ProductCard from '../ProductCard/ProductCard'
import { getGrocery } from '../../api/api'
const Grocery = ({navigation}) => {

    const [grocery,setGrocery] = useState([]);
    const makeApiRequest =async()=>{
      try{
        let response = await getGrocery();
        setGrocery(response.data);
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
<View >
    <PageHeadBar title="Grocery" navigation={navigation}></PageHeadBar> 
    <ScrollView style={{backgroundColor:"white",marginVertical:4}}>
      <View style={{flex:1,paddingBottom:60,flexDirection:"row",flexWrap:"wrap",justifyContent:"center",columnGap:10,rowGap:10}}>
      
        {
            grocery.map((item)=>(
              <View key={item.id} >
                  <ProductCard item={item} navigation={navigation}></ProductCard>
              </View>
            )) 
        }
      </View> 
    </ScrollView>
    <BottomNavBar navigation={navigation}></BottomNavBar>
    </View>
  </>
  )
}

export default Grocery

const styles = StyleSheet.create({})