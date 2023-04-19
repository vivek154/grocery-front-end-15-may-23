/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */


import { View,Text, StyleSheet,Image,Dimensions} from "react-native"
const width=Dimensions.get("window").width
const Categories=({item,navigation})=>
{
  return (
    
         <View style={styles.view}>
         <View>
            <Image style={styles.img} source={item.url}></Image>
            <Text onPress={()=>navigation.navigate(item.goto)}>{item.name}</Text>
         </View>
         </View>
    
  )
}
const styles=StyleSheet.create({
    view:{
       flex:1,
       justifyContent:'center',
       backgroundColor:'white',
       alignItems:'center',
       elevation:1,
      
       minWidth:(width/2.5),

       minHeight:(width/2.5),
       borderRadius:12,

       
       
    

    },
    img :{
       // alignItems:'center',
       // alignItems:'center',
        alignSelf:'center',
        backgroundColor:'white',
        resizeMode:'contain',
        height:80,
        width:80,
        borderWidth:2,

        alignSelf:'center',
        resizeMode:'contain',
        marginBottom:11,
       

    }
})
export default Categories;