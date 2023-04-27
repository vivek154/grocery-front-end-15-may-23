import { View, Text,Pressable,StyleSheet} from 'react-native'
import React from 'react'

const Mybutton = ({onPress,btnTxt,txtColor,myButton,width}) => {
  


  if (!myButton){
   myButton={
      backgroundColor:"#FF5403",
      borderColor:"#000000",
      fontWeight:"bold",
      fontSize:12,
      borderRadius:20,
      padding:10,
      minWidth:30,
    } 
  }
  if(!onPress){
    handlePress=()=>{
      return null;
    }
  }

    function clickhandle(){
        handlePress();
    }
   
  return (
    

        <Pressable style={[myButton,{width:width}]}
         onPress={onPress}>
            <Text style={{color:(txtColor?txtColor:"black"),
              fontSize:(myButton.fontSize?myButton.fontSize:10),
              alignSelf:"center",
              fontWeight:(myButton.fontWeight?myButton.fontWeight:"100"),
              textTransform:"capitalize"}}>
              {btnTxt?btnTxt:"Button"}

            </Text>
        </Pressable>
  
  )
}



export default Mybutton

