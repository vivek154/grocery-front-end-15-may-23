import {View,Text} from 'react-native';
import { useSelector } from 'react-redux';
const Cartlength=()=>
{
    const cart=useSelector((state)=>state.auth.myCart);
    console.log("CART",cart);
    return (
        <>
            <View>
                <Text>{cart}</Text>
            </View>
        </>
    )
}
export default Cartlength;