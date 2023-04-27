import { StyleSheet, Text, View,Image} from 'react-native'
import React from 'react'
//import DeleteIcon from "./images/delete.svg"
import QuantityButtons from '../../QuantityButtons/QuantityButtons'
const MyCartCard = (props) => {
    const SVGIcon=props.SVGIcon
  return (
    <View style={styles.container}>

    <View style={{flexDirection:"row",gap:20}}>
        <View>
            <Image source={{uri:props.item.image}} style={styles.image}></Image>
        </View>
      
        <View style={styles.middleBox}>
          <Text style={{fontWeight:"bold",color:"black",fontSize:15}}>{props.item.name}</Text>
          
          <Text style={styles.text}>$10 <Text style={{color:"#656565"}}>$20</Text></Text>

          <QuantityButtons></QuantityButtons>
        </View>
    </View>
        <View style={styles.endRightBox}>
          <View style={styles.quantityContainer}>
              <SVGIcon></SVGIcon>
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
        maxHeight:"15%",
        minWidth:"85%",
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