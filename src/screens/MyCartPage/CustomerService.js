import { View, Text,Pressable } from 'react-native';
import PageHeader from '../PageHeader/PageHeader';
const CustomerService = ({navigation,}) => {
    return (
        <>
            <View>
               
                    <PageHeader text="Customer Service"></PageHeader>
                
            </View>
            <View style={{ flex: 1, justifyContent: 'center' }} >
                <Text style={{ alignSelf: 'center', fontWeight: 'bold', color: 'black' }}> Currently data is not avaliable</Text>
            </View>
        </>
    )
}
export default CustomerService;