import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React,{useState,useEffect}from 'react'

import PageHeadBar from '../PageHeadBar/PageHeadBar'
import BottomNavBar from '../BottomNavBar/BottomNavBar'
import ProductCard from '../ProductCard/ProductCard'
import { getCategoryId,getCategoryProducts } from '../../api/api'



const NewCategory = props => {
  const {navigation, route} = props;
  const {name}=route.params.item
  const categoryName=name;
  console.log("new category params",route.params)

  const [products,setProducts] = useState([]);

    const makeApiRequest = async()=>{
      try{
        let categoryId= (await getCategoryId(categoryName)).data.id
        console.log("categoryId",categoryId)
        
        let response = await getCategoryProducts(categoryId);
        setProducts(response.data);
      }
      catch(err){
        console.log(err);
      }
    }
    useEffect(()=>{
      makeApiRequest()
    },[])

  return (
< >
    <PageHeadBar title={categoryName} navigation={navigation}></PageHeadBar> 
    <ScrollView contentContainerStyle={{justifyContent:"center",backgroundColor:"white",marginVertical:10,flexDirection:"row",flexWrap:"wrap",columnGap:10,rowGap:10}}>
      
      
        {
            products.map((item)=>(
              <View key={item.id} >
                  <ProductCard item={item}></ProductCard>
              </View>
            )) 
        }
       <View style={{height:60,width:"100%"}}></View>
    </ScrollView>
    <BottomNavBar navigation={navigation}></BottomNavBar>
  </>
  )

};

export default NewCategory;

const styles = StyleSheet.create({

});
