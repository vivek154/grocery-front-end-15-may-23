
import {View,Text,FlatList,TouchableOpacity,Dimensions,Image,ScrollView,Pressable} from 'react-native';
import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import SlidingComponent from './SlidingComponent';




const OnboardingPage=({onBoardingDone})=>
{   const dispatch= useDispatch()
    
    const width=Dimensions.get('window').width;
    const height=Dimensions.get('window').height;
    const arr=[1,1,1,1,1]
    const arr2=[
        {
            url:require("../../images/tomato.jpg"),
            title:"Fruits",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            url:require("../../images/apple.jpg"), 
            title:"Vegetables",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            url:require('../../images/tomato.jpg'),
            title:"Vegetables",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            url:require("../../images/apple.jpg"),
            title:"Fruits",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
    ]
    const [data,setdata]=useState(arr2);
    const  [currenIndex,setcurrentIndex]=useState(0);
    console.log("current Index",currenIndex)
    return (
        <>
        <ScrollView>
        <View style={{flex:1,justifyContent:'center',alignItems:'center',width:width,height:height,backgroundColor:'white'}}>
           <View style={{height:height/2}}>
            <FlatList data={data} 
            showHorizontalScrollIndicator={false}
            pagingEnabled
            onScroll={e=>
            {
                const x=e.nativeEvent.contentOffset.x;
                setcurrentIndex((x/width).toFixed(0));
            }}
            horizontal
          
           
                 renderItem={({item,index})=>
                    {
                        return(
                            <View key={index} style={{width:360,height:200}}>
                            <SlidingComponent key={index} item={item}></SlidingComponent>
                            </View>
                        )
                    }
                 } ></FlatList>
                  
           </View>
          
           <View style={{
            flexDirection:'row',
            width:width,
            justifyContent:'center',
            alignItems:'center',
            marginVertical:20
           }}>
             {
                data.map((item,index)=>
                {
                    return (
                        <View key={index} style={{width:8,height:8,borderRadius:4,backgroundColor:currenIndex==index ? 'green': 'grey',marginLeft:5,}}></View>
                    )
                })
              
             }
           
           </View>


          { (currenIndex==3)&& 
          <Pressable style={{justifyContent:'center',alignItems:'center'}} onPress={()=>{onBoardingDone()}}>
            
            <Text style={{width:90,height:40,borderWidth:1,borderRadius:20,backgroundColor:'black',
            color:'white',padding:10,paddingLeft:28}}>Next</Text>
            
            </Pressable>}
           
           <Text style={{color:'black',fontWeight:'bold',alignItems:'center',marginTop:5}}
           onPress={()=>{onBoardingDone()}}>Skip</Text>
          
          
       </View>
       </ScrollView>
        </>
    )
}
export default OnboardingPage;