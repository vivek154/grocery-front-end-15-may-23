import { View, Text,Pressable} from 'react-native'
import React from 'react'

const Mybutton = ({onPress,btnTxt,txtColor,myButton}) => {

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
   // console.log(myButton)
  return (
    <View style={myButton}>
        <Pressable style={{alignItems:"center"}} onPress={onPress}>
            <Text style={{color:(txtColor?txtColor:"black"),fontSize:(myButton.fontSize?myButton.fontSize:10),
            alignItems:"center",fontWeight:(myButton.fontWeight?myButton.fontWeight:"100")}}>
              {btnTxt?btnTxt:"Button"}
            </Text>
        </Pressable>
    </View>
  )
}



export default Mybutton