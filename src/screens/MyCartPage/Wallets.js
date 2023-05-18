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
         <View>
            <PageHeader text="Wallet"></PageHeader>
            
         </View>
         
         <View style={{ flex: 1, justifyContent: 'center' }} >
                <Text style={{ alignSelf: 'center', fontWeight: 'bold', color: 'black' }}> Currently data is not avaliable</Text>
            </View>
          
        </>


    
    )
}
export default Wallets;