import { StyleSheet, Text, View,Pressable } from 'react-native'
import React,{useEffect, useState} from 'react'

const  FilterButton = (props) => {
    const INITIAL_COLOR="#C4C4C4"
    const ON_PRESS_COLOR="#FF5403"
    const {item,onPress,filters}=props
    const {name,id}=item

  /*  const [backgroundColor,setBackgroundColor]=useState(()=>{
        if (filters.indexOf(id)== -1){
            return INITIAL_COLOR
        }
        else return ON_PRESS_COLOR
    })*/
    const [backgroundColor,setBackgroundColor]=useState("")

    useEffect(()=>{
        if (filters.indexOf(id)== -1){
            setBackgroundColor(INITIAL_COLOR)
        }
        else setBackgroundColor(ON_PRESS_COLOR)
    },[filters])

  return (
    <Pressable style={{ 
        width:100,
        height:35,
        borderRadius:20,
        padding:5,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:backgroundColor
    }}

    onPress={ ()=> {
        if(backgroundColor===INITIAL_COLOR){
            setBackgroundColor(ON_PRESS_COLOR)
        }
        else setBackgroundColor(INITIAL_COLOR)

        onPress()
    }}
    >
        <Text style={{color:"white",textTransform:"capitalize"}}>{name}</Text>

    </Pressable>
  )
}

export default FilterButton

const styles = StyleSheet.create({})