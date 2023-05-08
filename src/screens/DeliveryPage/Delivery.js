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

                    <Text style={{ color: "black", fontWeight: "bold", marginLeft: 10, marginVertical: 10 }}>When</Text>

                    <View style={{ flexDirection: 'row', overflow: "hidden", width: "100%", justifyContent: "space-around" }}>

                        <Text style={styles.Touchable}>Now</Text>

                        <Text style={styles.Touchable}>Morning</Text>

                        <Text style={styles.Touchable}>Afternoon</Text>

                        <Text style={styles.Touchable}>Evening</Text>

                        <Text style={styles.Touchable}>Night</Text>

                    </View>
                    <View>
                        <Text style={{ alignSelf: 'flex-start', marginLeft: 17, marginTop: 10, color: 'black', fontWeight: 'bold', fontSize: 23 }}>Payment Options</Text>
                        <TouchableOpacity>
                            <View style={{ flex: 1, flexDirection: 'row', marginTop: 10, justifyContent: 'space-around', alignItems: "center", gap: 10 }}>

                                <View style={{ width: 27, height: 27, borderWidth: 1, borderRadius: 20, marginLeft: 8 }}></View>
                                <View style={{}}>
                                    <Image style={{ resizeMode: 'contain' }} source={require('../../images/visa.png')}></Image>
                                </View>
                                <Text style={{ marginLeft: 13,color:"#000" }}>Visa Card</Text>



                            </View>


                        </TouchableOpacity>
                        <View style={{ flex: 1, width: 300, borderWidth: 1, marginTop: 5, marginBottom: 5, justifyContent: 'center', borderColor: 'grey', backgroundColor: 'grey', marginLeft: 20, marginRight: 10 }}></View>
                        <TouchableOpacity>
                            <View style={{ flex: 1, flexDirection: 'row', marginTop: 10, justifyContent: 'space-around', alignItems: 'center', gap: 10 }}>

                                <View style={{ width: 27, height: 27, borderWidth: 1, borderRadius: 20, marginLeft: 8 }}></View>
                                <View style={{}}>
                                    <Image style={{ resizeMode: 'contain' }} source={require('../../images/mastercard.png')}></Image>
                                </View>
                                <Text style={{ marginLeft: 13,color:"#000" }}>Credit Card</Text>


                            </View>

                        </TouchableOpacity>
                        <View style={{ flex: 1, width: 300, borderWidth: 1, marginTop: 5, marginBottom: 5, justifyContent: 'center', borderColor: 'grey', backgroundColor: 'grey', marginLeft: 20, marginRight: 10 }}></View>
                        <TouchableOpacity>
                            <View style={{ flex: 1, flexDirection: 'row', marginTop: 10, justifyContent: 'space-around', alignItems: "center", gap: 10 }}>

                                <View style={{ width: 27, height: 27, borderWidth: 1, borderRadius: 20, marginLeft: 8 }}></View>
                                <View style={{}}>
                                    <Image style={{ resizeMode: 'contain' }} source={require('../../images/paypal.png')}></Image>
                                </View>
                                <Text style={{ marginLeft: 13,color:"#000" }}>Paypal     </Text>


                            </View>


                        </TouchableOpacity>
                        <View style={{ flex: 1, width: 300, borderWidth: 1, marginTop: 5, marginBottom: 5, justifyContent: 'center', borderColor: 'grey', backgroundColor: 'grey', marginLeft: 20, marginRight: 10 }}></View>

                        <TouchableOpacity>
                            <View style={{ flex: 1, flexDirection: 'row', marginTop: 10, justifyContent: 'space-around', alignItems: 'center', gap: 10 }}>

                                <View style={{ width: 27, height: 27, borderWidth: 1, borderRadius: 20, marginLeft: 8 }}></View>
                                <View style={{}}>
                                    <Image style={{ resizeMode: 'contain' }} source={require('../../images/gpay.png')}></Image>
                                </View>
                                <Text style={{ marginLeft: 13,color:"#000"}}>Google Pay</Text>


                            </View>


                        </TouchableOpacity>
                        <View style={{ flex: 1, width: 300, borderWidth: 1, marginTop: 5, marginBottom: 12, justifyContent: 'center', borderColor: 'grey', backgroundColor: 'grey', marginLeft: 20, marginRight: 10 }}></View>
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
        width: 60,
        height: 28,
        borderRadius: 15,
        backgroundColor: 'grey',
        color: 'white',
        padding: 6,
        fontSize: 10,

    }
})
export default Delivery;