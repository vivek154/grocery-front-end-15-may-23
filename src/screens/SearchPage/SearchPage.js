 
 
 import {View,Text,StyleSheet,TextInput,ScrollView} from 'react-native';
 //import Notifications from './Notifications';
 //import Notifications from './Notifications';
 import SearchIcon  from "../../svg/SearchIcon.svg"
 import ArrowIcon from "../../svg/Arrow.svg"
 
import BrowseCategories from './BrowseCategories';
 
  const  SearchPage=(props)=>
 {
 
     const browse=[
         {id:1,name:'Vegetable'},
         {id:2,name:'Fruit'},
         {id:3,name:'Milk'},
         {id:4,name:'Drink'},
         {id:5,name:'Oil'},
         {id:6,name:'Cake'},
         {id:7,name:'Juice'},
         {id:8,name:'Vegetable'},
         {id:9,name:'Fruit'},
         {id:10,name:'Milk'},
         {id:11,name:'Drink'},
         
     ]
     return (
      <>
      
      <ScrollView>
      <View style={styles.container}>
         <View style={styles.titleContainer}>
             <ArrowIcon></ArrowIcon>
             <Text style={styles.text}>Search</Text>
         </View>
         <View style={{flexDirection:"row",marginVertical:15,
         height:37,alignItems:"center",paddingHorizontal:5,borderWidth:1,borderColor:"white",borderRadius:25,width:"86%",alignSelf:"center",color:'white'}}>
             <SearchIcon></SearchIcon>
             <TextInput placeholderTextColor='white'  placeholder='Search Your Keyword' selectionColor={'white'}></TextInput>
         </View>
     
         
     </View>
     
     <Text style={{marginTop:30, fontWeight:'bold',color:'black'}}>Top Searches</Text>
 
     <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around',marginTop:10}}>
 
         <Text style={styles.btntxt}>Vegetable</Text>
         <Text style={styles.btntxt} >Fruit</Text>
         <Text style={styles.btntxt} >Milk</Text>
     </View>
     <View>
         <Text style={{fontWeight:'bold',color:'black',margin:10}}>Browse Catagories</Text>
     </View>
 
    <View>
     {
        browse.map((item,index)=>
        {
         return (
             <BrowseCategories item={item} key={index}></BrowseCategories>
         )
        })
     }
    </View>
    
    
 </ScrollView>
   
       
      </>
     )
 }
 
 const styles=StyleSheet.create({
 
        
         
       
         container:{
             width:"100%",
             minHeight:"12%",
             backgroundColor:"#FF5403",
             borderBottomRightRadius:40,
             borderBottomLeftRadius:40,
             
         },
         titleContainer:{
             flexDirection:"row",
             maxWidth:"50%",
             justifyContent:"flex-start",
             alignItems:"center",
             width:"60%",
             marginTop:"15%",
             marginHorizontal:20,
             gap:10
         },
         text:{
             color:"white",
             fontSize:22,
             fontWeight:"bold"
         },
         
        
         btntxt:{
             alignSelf:'center'
             ,width:90,
             height:30,
             borderWidth:1,
             justifyContent:'center'
             ,textAlign:'center',
        borderRadius:13,
        margin:4,
        padding:5,
        backgroundColor:'grey',
       
        color:'black',
        fontWeight:'bold'
 
         }
        
         
         
         
   
       
 })
 export default SearchPage;