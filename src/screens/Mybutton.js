import { View, Text,Pressable,StyleSheet} from 'react-native'
import React,{useState} from 'react'

const Mybutton = ({onPress,btnTxt,txtColor,myButton,width,bgColorB4Pressed,bgColorAfterPressed}) => {
  const [bgColor,setBgColor]=useState(bgColorB4Pressed? bgColorB4Pressed :myButton.bgColor)


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
  function changeColor(){
    if(bgColor===bgColorB4Pressed){
      setBgColor(bgColorAfterPressed)
    }
    else if(bgColor===bgColorAfterPressed){
      setBgColor(bgColorB4Pressed)
    } 
  }

    function clickhandle(){
        handlePress();
    }
   // console.log(myButton)
  return (
    
        <Pressable style={[myButton,{width:width},{backgroundColor:bgColor}]}
         onPress={() =>{
          console.log("+++++++++++++btn pressed++++++++++++")
          changeColor()
          onPress}}>
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

