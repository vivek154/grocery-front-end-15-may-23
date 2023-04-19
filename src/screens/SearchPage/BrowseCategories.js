
import {View,Text} from 'react-native';
import Arrow from '../../svg/ArrowRight.svg'
const BrowseCategories=({item})=>
{

    
    return  (
        <View>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginHorizontal:20}}>
               <Text style={{ color:'black',fontWeight:'bold',margin:10,justifyContent:'flex-start'}}>{item.name}</Text>
               
               <Arrow ></Arrow>
              
            </View>
         
            <View>

            </View>
        </View>
    )
}
export default BrowseCategories;