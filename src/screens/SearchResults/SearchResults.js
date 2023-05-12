import { StyleSheet, Text, View,ScrollView} from 'react-native'
import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

const SearchResults = (props) => {
    const {navigation}=props
  return (

        
      <View style={{flex:1,paddingTop:5,paddingBottom:60,flexDirection:"row",flexWrap:"wrap",justifyContent:"center",columnGap:10,rowGap:10}}>
      
        {
            props.matchedProducts.map((item)=>(
              <View key={item.id} >
                  <ProductCard item={item} navigation={navigation}></ProductCard>
              </View>
            )) 
        }
      </View> 
    
    
  )
}

export default SearchResults

const styles = StyleSheet.create({})