import React, { useState } from "react";
import { StyleSheet, Dimensions, View,Button,ScrollView, Pressable, Text} from 'react-native'
import 'react-native-gesture-handler';
import MultiSlider from './HomeComponents/MultiSlider';
import SingleSlider from './HomeComponents/SingleSlider';
import HomeHeader from "./HomeComponents/HomeHeader/HomeHeader";
import BottomNavBar from "../BottomNavBar/BottomNavBar";
import { getSearchResults } from "../../api/api";
import SearchResults from "../SearchResults/SearchResults";


const single_slider_images = 
    [{ id: 1, url: require("../../images/Images-multi/img1.jpg") },
    { id: 2, url: require("../../images/Images-multi/img2.jpg") }, 
    { id: 3, url: require("../../images/Images-multi/img3.jpg") }, 
    { id: 4, url: require("../../images/Images-multi/img4.jpg") }]   

const multi_slider_images = [
    {
        id: 1,
        url1: require("../../images/Images-multi/img1.jpg"),
        url2: require("../../images/Images-multi/img2.jpg"),
        url3: require("../../images/Images-multi/img3.jpg")
    },

    {
        id: 2,
        url1: require("../../images/Images-multi/img4.jpg"),
        url2: require("../../images/Images-multi/img5.jpg"),
        url3: require("../../images/Images-multi/img6.jpg")
    },
    {
        id: 3,
        url1: require("../../images/Images-multi/img7.jpg"),
        url2: require("../../images/Images-multi/img8.jpg"),
        url3: require("../../images/Images-multi/img9.jpg")
    }]

export default function Home(props) {

    const {navigation} = props;
    const [matchedProducts,setMatchedProducts]=useState([]);
    const [searchKeyWord,setSearchKeyWord]=useState('');
    const [showSearchResults,setShowResults]=useState(false);

    const makeApiRequest= async(keyword)=>{
        console.log("keyword",keyword)
        let response = await getSearchResults(keyword);
        if(response.data){
            setMatchedProducts(response.data);
        }
    }


    function showAllVegetables(){
        navigation.navigate("vegetablesPage");
    }
    function showAllFruits(){
        navigation.navigate("FruitsPage");
    }
    function showAllGrocery(){
        navigation.navigate("GroceryPage");
    }
    return (
        <>
            <View style={{position:"absolute",width:"100%",top:0}}>
                <HomeHeader navigation={navigation} searchKeyWord={searchKeyWord} 
                setSearchKeyWord={setSearchKeyWord} setShowResults={setShowResults}
                makeApiRequest={makeApiRequest}></HomeHeader>
            </View>

        {   !showSearchResults &&
                <ScrollView style={{maxHeight:"63%",padding:10,top:180}}>
                

                <View style={{marginVertical:10,borderRadius:10}}>
                    <SingleSlider images={single_slider_images}></SingleSlider>
                </View>

                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginVertical:5}}>
                    <Text style={{fontSize:18,fontWeight:600,color:"black"}}>Vegetables</Text>
                    <Text style={{color:"#ff5403"}} onPress={showAllVegetables}>View All</Text>
                </View>

                <View style={{marginVertical:10}}>
                    <MultiSlider images={multi_slider_images}></MultiSlider>
                </View>

                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginVertical:5}}>
                    <Text style={{fontSize:18,fontWeight:600,color:"black"}}>Fruits</Text>
                    <Text style={{color:"#ff5403"}} onPress={showAllFruits}>View All</Text>
                </View>

                <View style={{marginVertical:10}}>
                    <MultiSlider images={multi_slider_images}></MultiSlider>
                </View>

                <View style={{marginVertical:10,borderRadius:10}}>
                    <SingleSlider images={single_slider_images}></SingleSlider>
                </View>

                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginVertical:5}}>
                    <Text style={{fontSize:18,fontWeight:600,color:"black"}}>Grocery</Text>
                    <Text style={{color:"#ff5403"}} onPress={showAllGrocery}>View All</Text>
                </View>

                <View style={{marginVertical:10}}>
                    <MultiSlider images={multi_slider_images}></MultiSlider>
                </View> 

               
        
            </ScrollView>
        }
        {
            showSearchResults &&  
            <ScrollView style={{maxHeight:"63%",padding:10,top:180}}> 
                <SearchResults matchedProducts={matchedProducts}></SearchResults>
            </ScrollView>
        }
          
            <BottomNavBar navigation={navigation}></BottomNavBar>
            
        </>
    )
}


const styles = StyleSheet.create({

})

const Body=()=>{

}