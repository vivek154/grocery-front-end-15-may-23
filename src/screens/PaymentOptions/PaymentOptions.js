import { View ,Text, StyleSheet, TouchableOpacity, ScrollView, Pressable,Image} from "react-native";

import Arrow from '../../svg/Arrow.svg'
import PageHeader from "../PageHeader/PageHeader";


const PaymentOptions=({navigation})=>
{
    return (
        
    <>
    <ScrollView>
    {/* <View>
        <View style={{width:357,height:160,borderWidth:1,borderBottomLeftRadius:20,borderBottomRightRadius:20,alignItems:'center',backgroundColor:'red',flexDirection:'row'}}>

        <Arrow></Arrow>
           { <Text style={{alignSelf:'flex-start',marginTop:60,color:'white',fontWeight:'bold',fontSize:23}}>Payment Options</Text>}
            </View>
        </View>
        
   */}

   <PageHeader text='Payment Options'navigation={navigation} navigateTo={"MyProfile"}></PageHeader>

     <View style={{flex:1,flexDirection:'row',justifyContent:'space-around',marginTop:10}}>
     <Text style={{fontWeight:'bold',color:'black'}}>Shipping To</Text>
     <Pressable>
     <Text style={{width:70,height:30,borderWidth:2,borderColor:'#FF5403',paddingLeft:17,paddingTop:7,borderRadius:20,color:'#FF5403'}}>ADD</Text>
     </Pressable>
     </View>
     <View  style={{flex:1,flexDirection:'row',justifyContent:'flex-start',marginLeft:40,marginTop:10}}>
        <TouchableOpacity >
        <View style={{flex:1,flexDirection:'row',}}>
            <View style={{ width:27,height:27,borderWidth:1,borderRadius:20,marginRight:'40%'}}></View>
            </View>
            <View style>
            <Text style={{alignSelf:'center' ,marginLeft:10,color:"black",}}>Home </Text>
            <Text style={{color:"black"}}>H/7 shiv flat jivrajpark Ahemadabad</Text>
            </View>
            </TouchableOpacity>
           
        </View>
       
        <View style={{ flex:1,width:270,borderWidth:1,marginTop:5,marginBottom:5,justifyContent:'center',borderColor:'grey',backgroundColor:'grey',marginLeft:44,marginRight:10}}></View>
        <Text style={{color:'black',marginLeft:43,fontWeight:'bold'}}>Payment Method</Text>
       {/* <TouchableOpacity style={{width:350}}>
                <View style={{flex:1,flexDirection:'row',marginTop:10,justifyContent:'space-around',alignItems:"center",gap:10}}>
        
                    <View style={{width:27,height:27,borderWidth:1,borderRadius:20,marginLeft:8}}></View>
                    <View style={{}}>
                        <Image style={{resizeMode:'contain'}} source={require('../../images/visa.png')}></Image>
                    </View>
                    <Text style={{marginLeft:13,color:'black'}}>Visa Card</Text>
                    
            
                    
                </View>
                
          
            </TouchableOpacity>
      */ }
      <TouchableOpacity style={{marginLeft:20}}>
                            <View style={{ flex: 1, flexDirection: 'row', marginTop: 10, alignItems: "center",marginLeft:24, gap: 10 }}>
                                     
                                <View style={{ width: 27, height: 27, borderWidth: 1, borderRadius: 20,  }}></View>
                                <View style={{}}>
                                    <Image style={{ resizeMode: 'contain',marginLeft:8 }} source={require('../../images/visa.png')}></Image>
                                </View>
                                <Text style={{ marginLeft: 13,color:"#000",marginLeft:14 }}>Visa Card</Text>



                            </View>


                        </TouchableOpacity>
            <View style={{ flex:1,width:270,borderWidth:1,marginTop:5,marginBottom:5,justifyContent:'center',borderColor:'grey',backgroundColor:'grey',marginLeft:44,marginRight:10}}></View>
            <TouchableOpacity style={{marginLeft:20}}>
                            <View style={{ flex: 1, flexDirection: 'row', marginTop: 10, alignItems: "center",marginLeft:24, gap: 10 }}>
                                     
                                <View style={{ width: 27, height: 27, borderWidth: 1, borderRadius: 20,  }}></View>
                                <View style={{}}>
                                    <Image style={{ resizeMode: 'contain',marginLeft:8 }} source={require('../../images/mastercard.png')}></Image>
                                </View>
                                <Text style={{ marginLeft: 13,color:"#000",marginLeft:20 }}>Credit Card</Text>



                            </View>


                        </TouchableOpacity>
                        <View style={{ flex:1,width:270,borderWidth:1,marginTop:5,marginBottom:5,justifyContent:'center',borderColor:'grey',backgroundColor:'grey',marginLeft:44,marginRight:10}}></View>
      
       
        <TouchableOpacity style={{marginLeft:20}}>
                            <View style={{ flex: 1, flexDirection: 'row', marginTop: 10, alignItems: "center",marginLeft:24, gap: 10 }}>
                                     
                                <View style={{ width: 27, height: 27, borderWidth: 1, borderRadius: 20,  }}></View>
                                <View style={{}}>
                                    <Image style={{ resizeMode: 'contain',marginLeft:8 }} source={require('../../images/paypal.png')}></Image>
                                </View>
                                <Text style={{ marginLeft: 13,color:"#000",marginLeft:28 }}>Paypal</Text>



                            </View>


                        </TouchableOpacity>






                        <View style={{ flex:1,width:270,borderWidth:1,marginTop:5,marginBottom:5,justifyContent:'center',borderColor:'grey',backgroundColor:'grey',marginLeft:44,marginRight:10}}></View>
      
        <TouchableOpacity style={{marginLeft:20}}>
                            <View style={{ flex: 1, flexDirection: 'row', marginTop: 10, alignItems: "center",marginLeft:24, gap: 10 }}>
                                     
                                <View style={{ width: 27, height: 27, borderWidth: 1, borderRadius: 20,}}></View>
                                <View style={{}}>
                                    <Image style={{ resizeMode: 'contain',marginLeft:8 }} source={require('../../images/gpay.png')}></Image>
                                </View>
                                <Text style={{ marginLeft: 13,color:"#000",marginLeft:27 }}>Google pay</Text>



                            </View>


                        </TouchableOpacity>
                        <View style={{ flex:1,width:270,borderWidth:1,marginTop:5,marginBottom:5,justifyContent:'center',borderColor:'grey',backgroundColor:'grey',marginLeft:44,marginRight:10}}></View>
        <TouchableOpacity style={{marginLeft:20}}>
                            <View style={{ flex: 1, flexDirection: 'row', marginTop: 10, alignItems: "center",marginLeft:24, gap: 10 }}>
                                     
                                <View style={{ width: 27, height: 27, borderWidth: 1, borderRadius: 20,  }}></View>
                                <View style={{}}>
                                    <Image style={{ resizeMode: 'contain',marginLeft:8 }} source={require('../../images/paytm.png')}></Image>
                                </View>
                                <Text style={{ marginLeft: 13,color:"#000",marginLeft:13 }}>Paytm</Text>



                            </View>


                        </TouchableOpacity>

        

        
                        <View style={{ flex:1,width:270,borderWidth:1,marginTop:5,marginBottom:5,justifyContent:'center',borderColor:'grey',backgroundColor:'grey',marginLeft:44,marginRight:10}}></View>
      

      

        <TouchableOpacity>
        <TouchableOpacity style={{marginLeft:20}}>
                            <View style={{ flex: 1, flexDirection: 'row', marginTop: 10, alignItems: "center",marginLeft:24, gap: 10 }}>
                                     
                                <View style={{ width: 27, height: 27, borderWidth: 1, borderRadius: 20,  }}></View>
                                <View style={{}}>
                                    <Image style={{ resizeMode: 'contain',marginLeft:8 }} source={require('../../images/airtel.png')}></Image>
                                </View>
                                <Text style={{ marginLeft: 13,color:"#000",marginLeft:6 }}>Airtel Money</Text>



                            </View>


                        </TouchableOpacity>
                        <View style={{ flex:1,width:270,borderWidth:1,marginTop:5,marginBottom:5,justifyContent:'center',borderColor:'grey',backgroundColor:'grey',marginLeft:44,marginRight:10}}></View>
                        
        <View>
        
            <Text style={{fontWeight:'bold',color:'black',marginLeft:39}}>Other Option</Text>
            {/*<View style={{flex:1,flexDirection:'row',marginTop:10,justifyContent:'space-around',alignItems:'center',gap:10,marginRight:70}}>
       
       <View style={{width:27,height:27,borderWidth:1,borderRadius:20,marginLeft:15}}></View>
       <View style={{}}>
     <Image style={{resizeMode:'contain'}}  source={require('../../images/airtel.png')}></Image>
     </View>
       <Text style={{marginLeft:13,color:'black'}}>Cash On Delivery</Text>
   
       
       </View>*/}
       <TouchableOpacity style={{marginLeft:20}}>
                            <View style={{ flex: 1, flexDirection: 'row', marginTop: 10, alignItems: "center",marginLeft:24, gap: 10 }}>
                                     
                                <View style={{ width: 27, height: 27, borderWidth: 1, borderRadius: 20,  }}></View>
                                <View style={{}}>
                                    <Image style={{ resizeMode: 'contain',marginLeft:8 }} source={require('../../images/bi_cash.png')}></Image>
                                </View>
                                <Text style={{ marginLeft: 13,color:"#000",marginLeft:6 }}>Cash on Delivery</Text>



                            </View>


                        </TouchableOpacity>
     
        </View>
        </TouchableOpacity>
        <View style={{ flex:1,width:270,borderWidth:1,marginTop:5,marginBottom:5,justifyContent:'center',borderColor:'grey',backgroundColor:'grey',marginLeft:44,marginRight:10}}></View>
        <TouchableOpacity>
            <Text style={{backgroundColor:"#FF5403" ,color:'white',width:200,padding:7,height:40 ,alignSelf:'center',paddingLeft:50,borderRadius:30,marginBottom:40,marginTop:10}}>Pay ₹10.00</Text>
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