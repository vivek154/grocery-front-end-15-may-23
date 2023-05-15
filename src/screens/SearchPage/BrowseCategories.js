
import {View,Text,Pressable} from 'react-native';
import Arrow from '../../svg/ArrowRight.svg'
const BrowseCategories=(props)=>{

    const {item,navigation}=props

    return  (
        
            <Pressable style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',
            marginHorizontal:0,height:30,marginVertical:5}} 
            onPress={()=>{ navigation.navigate("NewCategory",{item})}}>
               
               <Text style={{ color:'black',justifyContent:'flex-start',textTransform:"capitalize"}}
               >{item.name}</Text>
               
               <Arrow ></Arrow>
              
            </Pressable>
         
           
        
    )
}
export default BrowseCategories;