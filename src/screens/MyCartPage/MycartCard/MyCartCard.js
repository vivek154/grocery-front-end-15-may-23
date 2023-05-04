import { StyleSheet, Text, View,Image, Pressable} from 'react-native'
import React from 'react'
//import DeleteIcon from "./images/delete.svg"
import QuantityButtons from '../../QuantityButtons/QuantityButtons'
import { deletemycart, getmycart, postmycart } from '../../../api/api'
import { useSelector } from 'react-redux'
const MyCartCard = (props) => {
   // const  selector=useSelector();
    const {userData}= useSelector(state=>state?.auth)
    console.log("userData" , userData)
  
    //console.log("userDataId",userData.id);
    let userid={
      id:userData.id
    }
    console.log("userid",userid)

    const SVGIcon=props.SVGIcon
   const {item,data}=props;
    const {id,userId,name,price,imageUrl}=item
    console.log(userId);
    console.log(id)
    console.log("data",data);
   
  const handledelete=(productId)=>
  {                                                                                                 
    deletemycart(productId)


  }
   
     
  return (
    <View style={styles.container}>

    <View style={{flexDirection:"row",gap:20}}>
        <View>
            <Image source={{uri:imageUrl}} style={styles.image}></Image>
        </View>
      
        <View style={styles.middleBox}>
          <Text style={{fontWeight:"bold",color:"black",fontSize:15}}>{name}</Text>
          
          <Text style={styles.text}>Price:{price}<Text style={{color:"#656565",width:70}}>

          </Text>{}</Text>

       
         <QuantityButtons></QuantityButtons>
        </View>
    </View>
        <View style={styles.endRightBox}>
          <View style={styles.quantityContainer}>

          <Pressable   onPress={()=>handledelete(id)} ><SVGIcon></SVGIcon></Pressable> 
          </View>
        </View>
    </View>
  )
}

export default MyCartCard

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignSelf:"center",
        backgroundColor:"#ffffff",
        maxHeight:"80%",
        minWidth:"80%",
        padding:10,
        elevation:5,
        borderRadius:10,
        marginVertical:10
    },
    image:{
        width:101,
        height:101,
        resizeMode:"contain",
        
    },
    middleBox:{
        flexDirection:"column",
        justifyContent:"space-around",
        alignItems:"flex-start",
        flexWrap:"wrap",
        marginHorizontal:10,
        
    },
    endRightBox:{
        justifyContent:"center",
        alignItems:"center",
        
    },
    quantityContainer:{
        minHeight:40,
        minWidth:40,
        backgroundColor:"grey",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#E5E5E5",
    },
    text:{
        color:"black",
        fontWeight:"bold"
    }
})