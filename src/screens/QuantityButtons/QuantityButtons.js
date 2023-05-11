import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { postmycart } from '../../api/api';



const QuantityButtons = ({ count, increment, decrement }) => {

    /* const   [count,setcount]=useState(0);
 
     console.log("price",props.price);
 
     let a=props.price;
     console.log("a",a);
 
     const [price,totalprice]=useState(a);
    console.log(price);
 const dec=()=>{
     if(count > 0){
     setcount(count-1)
     totalprice((a)*count);
    
     }
 }
 
 const inc=()=>
 {
     setcount(count+1) 
     totalprice((a)*count);
 }
 
 */

    return (
        <View style={styles.container}>
            <Pressable style={[styles.buttons, { borderColor: "#C4C4C4" }]} onPress={decrement}>
                <Text style={{ color: "#C4C4C4", }} >-</Text>
            </Pressable >
            <Text style={{ color: "black" }}>{count}</Text>
            <Pressable style={[styles.buttons]} onPress={increment}>
                <Text style={{ color: "black" }} >+</Text>
            </Pressable>
        </View>
    )
}

export default QuantityButtons

const styles = StyleSheet.create({
    container: {
        
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        width:60,
        height:40, 
       
    },
    buttons: {
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        justifyContent: "center",
        width: 30,
        height: 30,

    }
})