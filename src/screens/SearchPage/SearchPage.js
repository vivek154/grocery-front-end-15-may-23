import {View, Text, StyleSheet, TextInput, ScrollView,KeyboardAvoidingView} from 'react-native';
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from 'react-native-responsive-screen';
import SearchIcon from '../../svg/SearchIcon.svg';
import ArrowIcon from '../../svg/Arrow.svg';

import BrowseCategories from './BrowseCategories';
import Mybutton from '../Mybutton';
import BottomNavBar from '../BottomNavBar/BottomNavBar';
import SearchResults from '../SearchResults/SearchResults';
import { useEffect, useState } from 'react';
import { getAllCategories, getSearchResults,getTopSearches } from '../../api/api';

const buttonWidth=100;

const SearchPage = (props) => {
  const [matchedProducts,setMatchedProducts]=useState([]);
  const [searchKeyWord,setSearchKeyWord]=useState("")
  const [showSearchResults,setShowResults]=useState(false);
  const [topSearches,setTopSearches]=useState([]);
  const [allCategories,setAllCategories]=useState([]);
  console.log("topSearches", topSearches)
  const{navigation}=props
  const browse = [
    {id: 1, name: 'Vegetables',goto:"vegetablesPage"},
    {id: 2, name: 'Fruits',goto:"FruitsPage"},
    {id: 3, name: 'Milk',goto:"NewCategory"},
    {id: 4, name: 'Drinks',goto:"NewCategory"},
    {id: 5, name: 'Oil',goto:"NewCategory"},
    {id: 6, name: 'Cake',goto:"NewCategory"},
    {id: 7, name: 'Juice',goto:"NewCategory"},
    {id: 8, name: 'Icecream',goto:"NewCategory"},
  ];

  const makeApiRequest=async(keyword)=>{
        console.log("keyword",keyword)
        let response = await getSearchResults(keyword);
        if(response && response.data){
            setMatchedProducts(response.data);
        }
  }

  const handleChangeInput=(newText)=>{
    
    setSearchKeyWord(newText);
    if(newText!==''){
      setShowResults(true);
      makeApiRequest(newText);
    }
    else{
      setShowResults(false)
    }
  }
  const requestTopSearches=async()=>{
    let response=await getTopSearches();
    if(response && response.data){
      console.log("top searches",response.data)
      setTopSearches(response.data)
    }}

  const requestAllCategories=async()=>{
      let response = await getAllCategories()
      if( response && response.data){
        console.log("ALL CATEGORIES",response.data)
        setAllCategories(response.data)
      }} 

  const handleTopSearchesBtnPress=(category)=>{
    navigation.navigate("NewCategory",{item:{...category}})
  }

  useEffect(()=>{
    requestTopSearches()
    requestAllCategories();
  },[]) 
  

  return (
    <View style={{flex:1}}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <ArrowIcon></ArrowIcon>
            <Text style={styles.text}>Search</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginVertical:0,
              height: 40,
              alignItems: 'center',
              paddingHorizontal: 5,
              borderWidth: 2,
              borderColor: 'white',
              borderRadius: 25,
              width: '100%',
              color: 'white',
            }}>
            <SearchIcon></SearchIcon>
            <TextInput
              placeholderTextColor="white"
              placeholder="Search Your Keyword"
              selectionColor={'white'}
              style={{color:"white"}}
              onChangeText={(newText)=>{handleChangeInput(newText)}}></TextInput>
              
          </View>
        </View>

        { !showSearchResults &&
          <View style={{paddingHorizontal:20,height:hp("75%")}}>

          <Text style={{marginTop: 22, fontSize:18, fontWeight: 'bold', color: 'black'}}>
            Top Searches
          </Text>

          <View style={styles.buttonContainer}>
              
                {
                  (topSearches.length > 0) && topSearches.map((category)=>{
                    return <Mybutton key={category.id} myButton={styles.myButton} width={buttonWidth} btnTxt={category.name}
                              onPress={()=>handleTopSearchesBtnPress(category)} ></Mybutton>
                  })
                }
              
          </View>
          <View>
            <Text style={{fontWeight: 'bold',fontSize:18, color: 'black'}}>
              Browse Catagories
            </Text>
          </View>

          <View style={{flex:0.8,marginVertical:5}}>
            <ScrollView style={{marginBottom:10}}>
            {allCategories.map((item, index) => {
              return (
                
                  <BrowseCategories item={item} key={index} navigation={navigation}></BrowseCategories>
                
              );
            })}
            </ScrollView>
          </View>
        </View>
        }
        {
          showSearchResults &&
            <ScrollView fadingEdgeLength={20} style={{flex:1,padding:10,marginVertical:15}}> 
              <SearchResults matchedProducts={matchedProducts} navigation={navigation}></SearchResults>
            </ScrollView>
        }
      
    <View style={{height:hp('7%')}}>
        <BottomNavBar navigation={navigation}></BottomNavBar>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    //flex:0.18,
    //height:'23%',
    flexDirection:"column",
    justifyContent:"center",
    gap:10,
    paddingHorizontal:20,
    backgroundColor: '#FF5403',
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    height:hp('18%')
  },
  titleContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
    marginBottom:10
  },
  text: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  buttonContainer:{
    //height:"10%",
    flex:0.15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:"space-between",
  },
  myButton:{
    backgroundColor:"#C4C4C4",
    fontWeight:"bold",
    fontSize:12,
    borderRadius:20,
    padding:10,
    width:100,
  },

});
export default SearchPage;
