import { View ,Text, StyleSheet, TouchableOpacity, ScrollView, Pressable,Image} from "react-native";

import Arrow from '../../svg/Arrow.svg'


const PaymentOptions=()=>
{
    return (
        
    <>
    <ScrollView>
     <View>
        <View style={{width:357,height:160,borderWidth:1,borderBottomLeftRadius:20,borderBottomRightRadius:20,alignItems:'center',backgroundColor:'red',flexDirection:'row'}}>

        <Arrow></Arrow>
            <Text style={{alignSelf:'flex-start',marginTop:60,color:'white',fontWeight:'bold',fontSize:23}}>Payment Options</Text>
            </View>
        </View>
   
     <View style={{flex:1,flexDirection:'row',justifyContent:'space-around',marginTop:10}}>
     <Text style={{fontWeight:'bold',color:'black'}}>Shipping To</Text>
     <Pressable>
     <Text style={{width:70,height:30,borderWidth:2,borderColor:'red',paddingLeft:17,paddingTop:7,borderRadius:20,color:'black'}}>ADD</Text>
     </Pressable>
     </View>

     <View  style={{flex:1,flexDirection:'row',justifyContent:'flex-start',marginLeft:40,marginTop:10}}>
        <TouchableOpacity >
        <View style={{flex:1,flexDirection:'row',}}>
            <View style={{ width:27,height:27,borderWidth:1,borderRadius:20,}}></View>
            </View>
            <Text style={{alignSelf:'center' ,marginLeft:10,}}>Home </Text>
            <Text>H/7 shiv flat jivrajpark Ahemadabad</Text>
          
            </TouchableOpacity>
           
        </View>

        <View style={{ flex:1,width:300,borderWidth:1,marginTop:5,marginBottom:5,justifyContent:'center',borderColor:'grey',backgroundColor:'grey',marginLeft:15,marginRight:10}}></View>

        <TouchableOpacity>
                <View style={{flex:1,flexDirection:'row',marginTop:10,justifyContent:'space-around',alignItems:"center",gap:10}}>
        
                    <View style={{width:27,height:27,borderWidth:1,borderRadius:20,marginLeft:8}}></View>
                    <View style={{}}>
                        <Image style={{resizeMode:'contain'}} source={require('../../images/visa.png')}></Image>
                    </View>
                    <Text style={{marginLeft:13}}>Visa Card</Text>
                    
            
                    
                </View>
                
          
            </TouchableOpacity>
            <View style={{ flex:1,width:300,borderWidth:1,marginTop:5,marginBottom:5,justifyContent:'center',borderColor:'grey',backgroundColor:'grey',marginLeft:15,marginRight:10}}></View>
        <TouchableOpacity>
            <View style={{flex:1,flexDirection:'row',marginTop:10,justifyContent:'space-around',alignItems:'center',gap:10}}>
       
            <View style={{width:27,height:27,borderWidth:1,borderRadius:20,marginLeft:8}}></View>
            <View style={{}}>
          <Image style={{resizeMode:'contain'}} source={require('../../images/mastercard.png')}></Image>
          </View>
            <Text style={{marginLeft:13}}>Credit Card</Text>
        
            
            </View>
          
           
        </TouchableOpacity>
        <View style={{ flex:1,width:300,borderWidth:1,marginTop:5,marginBottom:5,justifyContent:'center',borderColor:'grey',backgroundColor:'grey',marginLeft:15,marginRight:10}}></View>
      
       

        <TouchableOpacity>
                <View style={{flex:1,flexDirection:'row',marginTop:10,justifyContent:'space-around',alignItems:"center",gap:10}}>
        
                    <View style={{width:27,height:27,borderWidth:1,borderRadius:20,marginLeft:8}}></View>
                    <View style={{}}>
                        <Image style={{resizeMode:'contain'}} source={require('../../images/paypal.png')}></Image>
                    </View>
                    <Text style={{marginLeft:13}}>Paypal     </Text>
            
                    
                </View>
                
          
            </TouchableOpacity>






        <View style={{ flex:1,width:300,borderWidth:1,marginTop:5,marginBottom:5,justifyContent:'center',borderColor:'grey',backgroundColor:'grey',marginLeft:15,marginRight:10}}></View>
      
        <TouchableOpacity>
            <View style={{flex:1,flexDirection:'row',marginTop:10,justifyContent:'space-around',alignItems:'center',gap:10}}>
       
            <View style={{width:27,height:27,borderWidth:1,borderRadius:20,marginLeft:8}}></View>
            <View style={{}}>
          <Image style={{resizeMode:'contain'}} source={require('../../images/gpay.png')}></Image>
          </View>
            <Text style={{marginLeft:13}}>Google Pay</Text>
        
            
            </View>
          
           
        </TouchableOpacity>
        <View style={{ flex:1,width:300,borderWidth:1,marginTop:5,marginBottom:5,justifyContent:'center',borderColor:'grey',backgroundColor:'grey',marginLeft:15,marginRight:10}}></View>
      
        <TouchableOpacity>
            <View style={{flex:1,flexDirection:'row',marginTop:10,justifyContent:'space-around',alignItems:'center',gap:10}}>
       
            <View style={{width:27,height:27,borderWidth:1,borderRadius:20,marginLeft:8}}></View>
            <View style={{}}>
          <Image style={{resizeMode:'contain'}} source={require('../../images/paytm.png')}></Image>
          </View>
            <Text style={{marginLeft:13}}>     Paytm</Text>
        
            
            </View>
          
           
        </TouchableOpacity>
        

        

        
        <View style={{ flex:1,width:300,borderWidth:1,marginTop:5,marginBottom:5,justifyContent:'center',borderColor:'grey',backgroundColor:'grey',marginLeft:15,marginRight:10}}></View>
      

      

        <TouchableOpacity>
        <View>
            <Text style={{fontWeight:'bold',color:'black'}}>Other Option</Text>
            <View style={{flex:1,flexDirection:'row',marginTop:10,justifyContent:'space-around',alignItems:'center',gap:10}}>
       
       <View style={{width:27,height:27,borderWidth:1,borderRadius:20,marginLeft:15}}></View>
       <View style={{}}>
     <Image style={{resizeMode:'contain'}}  source={require('../../images/airtel.png')}></Image>
     </View>
       <Text style={{marginLeft:13}}>Airtel Money</Text>
   
       
       </View>
     
        </View>
        </TouchableOpacity>
        <View style={{ flex:1,width:300,borderWidth:1,marginTop:5,marginBottom:5,justifyContent:'center',borderColor:'grey',backgroundColor:'grey',marginLeft:15,marginRight:10}}></View>
        <TouchableOpacity>
            <Text style={{backgroundColor:'red' ,color:'white',width:200,padding:7,height:40 ,alignSelf:'center',paddingLeft:50,borderRadius:30,marginBottom:40}}>Pay$10.00</Text>
        </TouchableOpacity>
     </ScrollView>
    </>   
        
    )
}
const styles=StyleSheet.create({
    main:{
       
        flex:1,
    },
   
    
   
})
export default PaymentOptions; 