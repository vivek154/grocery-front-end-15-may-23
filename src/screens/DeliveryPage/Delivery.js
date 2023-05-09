import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image ,Pressable} from 'react-native';



import DeliveryCard from './DeliveryCard';
import BottomNavBar from '../BottomNavBar/BottomNavBar';

const Delivery = (props) => {

    function showPaymentOptions(){
        props.navigation.navigate("PaymentOptions")
    }
    return (
        <>
            <ScrollView>
                <View>

                    <DeliveryCard ></DeliveryCard>

                    <Text style={{ color: "black", fontWeight: "bold", marginLeft: 18, marginVertical: 10 }}>When</Text>
                  <View style={{justifyContent:'center'}}>
                    <View style={{ flexDirection: 'row', flexWrap:'wrap', overflow: "hidden", width: "90%", justifyContent: "space-around",alignItems:'center',marginLeft:14 ,padding:1 }}>
                       
                        <Text style={{alignContent:'center',width:62,height:28,borderRadius:15,backgroundColor:'grey',color:'white',fontSize:12,padding:7,paddingLeft:13}}>Now</Text>

                        <Text style={styles.Touchable}>Morning</Text>

                        <Text style={styles.Touchable}>Afternoon</Text>

                        <Text style={styles.Touchable}>Evening</Text>

                        <Text style={{alignContent:'center',width:62,height:28,borderRadius:15,backgroundColor:'grey',color:'white',fontSize:12,padding:5,paddingLeft:13}}>Night</Text>

                    </View>
                    </View>
                    <View>
                        <Text style={{ alignSelf: 'flex-start', marginLeft: 17, marginTop: 10, color: 'black', fontWeight: 'bold', fontSize: 23 }}>Payment Options</Text>
                        <TouchableOpacity style={{marginRight:50}}>
                            <View style={{ flex: 1, flexDirection: 'row', marginTop: 10, alignItems: "center",marginLeft:24, gap: 10 }}>
                                     
                                <View style={{ width: 27, height: 27, borderWidth: 1, borderRadius: 20,  }}></View>
                                <View style={{}}>
                                    <Image style={{ resizeMode: 'contain',marginLeft:6 }} source={require('../../images/visa.png')}></Image>
                                </View>
                                <Text style={{ marginLeft: 13,color:"#000",marginLeft:6 }}>Visa Card</Text>



                            </View>


                        </TouchableOpacity>
                        <View style={{ flex: 1, width: 300, borderWidth: 1, marginTop: 5, marginBottom: 5, justifyContent: 'center', borderColor: 'grey', backgroundColor: 'grey', marginLeft: 20, marginRight: 10 }}></View>
                        <TouchableOpacity style={{marginRight:50}}>
                            <View style={{ flex: 1, flexDirection: 'row', marginTop: 10, alignItems: 'center',marginLeft:24, gap: 10 }}>

                                <View style={{ width: 27, height: 27, borderWidth: 1, borderRadius: 20,  }}></View>
                                <View style={{}}>
                                    <Image style={{ resizeMode: 'contain',marginLeft:6 }} source={require('../../images/mastercard.png')}></Image>
                                </View>
                                <Text style={{ marginLeft: 13,color:"#000", }}>Credit Card</Text>


                            </View>

                        </TouchableOpacity >
                        <View style={{ flex: 1, width: 300, borderWidth: 1, marginTop: 5, marginBottom: 5, borderColor: 'grey', backgroundColor: 'grey', marginLeft: 20, marginRight: 10 }}></View>
                        <TouchableOpacity style={{marginRight:50}}>
                            <View style={{ flex: 1, flexDirection: 'row', marginTop: 10,  alignItems: "center",marginLeft:24, gap: 10 }}>

                                <View style={{ width: 27, height: 27, borderWidth: 1, borderRadius: 20,  }}></View>
                                <View style={{}}>
                                    <Image style={{ resizeMode: 'contain' ,marginLeft:6 }} source={require('../../images/paypal.png')}></Image>
                                </View>
                                <Text style={{ marginLeft: 13,color:"#000" ,marginLeft:18}}>Paypal     </Text>


                            </View>


                        </TouchableOpacity >
                        <View style={{ flex: 1, width: 300, borderWidth: 1, marginTop: 5, marginBottom: 5, borderColor: 'grey', backgroundColor: 'grey', marginLeft: 20, marginRight: 10 }}></View>

                        <TouchableOpacity style={{marginRight:50}}>
                            <View style={{ flex: 1, flexDirection: 'row', marginTop: 10, alignItems: 'center',marginLeft:24, gap: 10 }}>

                                <View style={{ width: 27, height: 27, borderWidth: 1, borderRadius: 20,  }}></View>
                                <View style={{justifyContent:'flex-start'}}>
                                    <Image style={{ resizeMode: 'contain',alignSelf:'flex-start',marginLeft:6 }} source={require('../../images/gpay.png')}></Image>
                                </View>
                                <Text style={{ marginLeft: 13,color:"#000"}}>Google Pay</Text>


                            </View>


                        </TouchableOpacity>
                        <View style={{ flex: 1, width: 300, borderWidth: 1, marginTop: 5, marginBottom: 12,  borderColor: 'grey', backgroundColor: 'grey', marginLeft: 20, marginRight: 10 }}></View>
                    </View>
                    <Pressable style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} onPress={showPaymentOptions}>
                        <Text style={{color:"#000", width: 200, height: 34, borderRadius: 50, backgroundColor: "#FF5403", padding: 6, paddingLeft: 80, color: 'white' }}>Confirm</Text>
                    </Pressable>
                </View>
                <View style={{height:70}}>

                </View>
            </ScrollView>
            <BottomNavBar navigation={props.navigation}></BottomNavBar>
        </>
    )
}
const styles = StyleSheet.create({
    Touchable: {
        width: 62,
        height: 28,
        borderRadius: 15,
        backgroundColor: 'grey',
        color: 'white',
        padding: 7,
        fontSize: 10,
        alignContent:'center'
      

    }
})
export default Delivery;