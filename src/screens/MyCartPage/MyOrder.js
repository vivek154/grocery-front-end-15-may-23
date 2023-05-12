import {View,Text,Pressable} from 'react-native';
import PageHeader from '../PageHeader/PageHeader';
const MyOrder=({navigation})=>
{
    return (
        <>
             <View>
               
                <PageHeader text="My Orders" navigation={navigation} navigateTo={"MyProfile"}></PageHeader>
              
             </View>
             <View style={{flex:1,justifyContent:'center'}} >
                <Text style={{alignSelf:'center',fontWeight:'bold',color:'black'}}> Currently data is not avaliable</Text>
             </View>
        </>
    )
}
export default MyOrder