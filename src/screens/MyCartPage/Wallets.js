import {View,Text,ScrollView,TouchableOpacity,Image,Pressable} from 'react-native';
import PageHeader from '../PageHeader/PageHeader';
import ProfileActionCard from '../MyProfile/ProfileActionCard';
import { data } from '../SavePage/data';
import PaymentOptions from '../PaymentOptions/PaymentOptions';
import RatingReviews from './RatingReviews';
const Wallets=({navigation})=>
{
    return (
        
         <>
         <View >
        
         <PageHeader text='Wallet' navigation={navigation} navigateTo={"MyProfile"}></PageHeader>
     
         </View>
           <ScrollView>
        <TouchableOpacity style={{marginLeft:20,}}>
                            <View style={{ flex: 1, flexDirection: 'row', marginTop: 10, alignItems: "center",marginLeft:24, gap: 10,justifyContent:'flex-start' }}>
                                     
                                <View style={{ width: 27, height: 27, borderWidth: 1, borderRadius: 20,  }}></View>
                                <View style={{}}>
                                    <Image style={{ resizeMode: 'contain',marginLeft:8 }} source={require('../../images/visa.png')}></Image>
                                </View>
                                <Text style={{ marginLeft: 13,color:"#000",marginLeft:14 }}>Visa Card</Text>



                            </View>


                        </TouchableOpacity>
            <View style={{ flex:1,width:270,borderWidth:1,marginTop:5,marginBottom:5,justifyContent:'center',borderColor:'grey',backgroundColor:'grey',marginLeft:44,marginRight:10,justifyContent:'flex-start' }}></View>
            <TouchableOpacity style={{marginLeft:20}}>
                            <View style={{ flex: 1, flexDirection: 'row', marginTop: 10, alignItems: "center",marginLeft:24, gap: 10 }}>
                                     
                                <View style={{ width: 27, height: 27, borderWidth: 1, borderRadius: 20,  }}></View>
                                <View style={{}}>
                                    <Image style={{ resizeMode: 'contain',marginLeft:8 }} source={require('../../images/mastercard.png')}></Image>
                                </View>
                                <Text style={{ marginLeft: 13,color:"#000",marginLeft:20 }}>Credit Card</Text>



                            </View>


                        </TouchableOpacity>
                        <View style={{ flex:1,width:270,borderWidth:1,marginTop:5,marginBottom:5,justifyContent:'center',borderColor:'grey',backgroundColor:'grey',marginLeft:44,marginRight:10,justifyContent:'flex-start' }}></View>
      
       
        <TouchableOpacity style={{marginLeft:20}}>
                            <View style={{ flex: 1, flexDirection: 'row', marginTop: 10, alignItems: "center",marginLeft:24, gap: 10 }}>
                                     
                                <View style={{ width: 27, height: 27, borderWidth: 1, borderRadius: 20,  }}></View>
                                <View style={{}}>
                                    <Image style={{ resizeMode: 'contain',marginLeft:8 }} source={require('../../images/paypal.png')}></Image>
                                </View>
                                <Text style={{ marginLeft: 13,color:"#000",marginLeft:28 }}>Paypal</Text>



                            </View>


                        </TouchableOpacity>






                        <View style={{ flex:1,width:270,borderWidth:1,marginTop:5,marginBottom:5,justifyContent:'center',borderColor:'grey',backgroundColor:'grey',marginLeft:44,marginRight:10,justifyContent:'flex-start' }}></View>
      
        <TouchableOpacity style={{marginLeft:20}}>
                            <View style={{ flex: 1, flexDirection: 'row', marginTop: 10, alignItems: "center",marginLeft:24, gap: 10 }}>
                                     
                                <View style={{ width: 27, height: 27, borderWidth: 1, borderRadius: 20,}}></View>
                                <View style={{}}>
                                    <Image style={{ resizeMode: 'contain',marginLeft:8 }} source={require('../../images/gpay.png')}></Image>
                                </View>
                                <Text style={{ marginLeft: 13,color:"#000",marginLeft:27 }}>Google pay</Text>



                            </View>


                        </TouchableOpacity>
                        <View style={{ flex:1,width:270,borderWidth:1,marginTop:5,marginBottom:5,justifyContent:'center',borderColor:'grey',backgroundColor:'grey',marginLeft:44,marginRight:10,justifyContent:'flex-start' }}></View>
        <TouchableOpacity style={{marginLeft:20}}>
                            <View style={{ flex: 1, flexDirection: 'row', marginTop: 10, alignItems: "center",marginLeft:24, gap: 10 }}>
                                     
                                <View style={{ width: 27, height: 27, borderWidth: 1, borderRadius: 20,  }}></View>
                                <View style={{}}>
                                    <Image style={{ resizeMode: 'contain',marginLeft:8 }} source={require('../../images/paytm.png')}></Image>
                                </View>
                                <Text style={{ marginLeft: 13,color:"#000",marginLeft:13 }}>Paytm</Text>



                            </View>


                        </TouchableOpacity>

        

        
                        <View style={{ flex:1,width:270,borderWidth:1,marginTop:5,marginBottom:5,justifyContent:'center',borderColor:'grey',backgroundColor:'grey',marginLeft:44,marginRight:10,justifyContent:'flex-start' }}></View>
      

      

        <TouchableOpacity>
        <TouchableOpacity style={{marginLeft:20}}>
                            <View style={{ flex: 1, flexDirection: 'row', marginTop: 10, alignItems: "center",marginLeft:24, gap: 10,justifyContent:'flex-start'  }}>
                                     
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
                            <View style={{ flex: 1, flexDirection: 'row', marginTop: 10, alignItems: "center",marginLeft:24, gap: 10,justifyContent:'flex-start'  }}>
                                     
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
            <Text style={{backgroundColor:"#FF5403" ,color:'white',width:200,padding:7,height:40 ,alignSelf:'center',paddingLeft:50,borderRadius:30,marginBottom:40,marginTop:10}}>Pay$10.00</Text>
        </TouchableOpacity>
     </ScrollView>

</>
    
    )
}
export default Wallets;