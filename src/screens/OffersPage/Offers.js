import {View,Text,StyleSheet,Image, Pressable, ScrollView, Dimensions} from 'react-native'

const width=Dimensions.get('window').width;
const Offers=({item})=>
{

 return (
   <ScrollView>
   <>
    <View  style={styles.view}>
      <View style={{flexDirection:"column"}}>
         <Text style={styles.text1}>Get30%off</Text>
        <Image  style={styles.img} source={item.url}></Image>
      </View> 

        <View style={{flex:1,justifyContent:"space-around",flexDirection:'column',alignItems:"flex-start"}}>
         <Text style={{fontWeight:'bold',color:'black'}} >Fresh Apple</Text>
         <Text style={{color:"#000"}}>This is apple this apple</Text>
         <Text style={{fontWeight:'bold',color:'black'}} >$10 <Text style={{fontWeight:'bold',color:"#000"}}>$20</Text></Text>
         <Pressable style={{borderWidth:2,width:110,borderRadius:20,height:30,padding:5,paddingLeft:10,alignSelf:"flex-end",marginRight:10}}>
            <Text style={{color:"#000"}}>Add to Cart</Text>
         </Pressable>
        </View>

       
    </View>
    </> 
    </ScrollView>
 )
}
const styles=StyleSheet.create({

    view:{
      flex:1,
      height:"30%",
      minWidth: "100%",
      borderRadius:15,
      elevation:2,
      backgroundColor:'white',
      flexDirection:"row"
    },
    img :{
     marginTop:10,
     marginLeft:8,
   
     width:124,
     height:130,
     justifyContent:'flex-start',
     resizeMode:'contain',
    // borderWidth:2,
     //borderColor:'black'
},
text1:{
        
    
    //borderWidth:1,
    borderTopLeftRadius:15,
    width:94,
    height:30,
    backgroundColor:'#ff9900',
   padding:7,
   
 
},
    
})
export default Offers;