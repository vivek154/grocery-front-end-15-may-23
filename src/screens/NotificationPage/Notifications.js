import { View ,Text, StyleSheet, ScrollView} from "react-native";
import { create } from "react-test-renderer";
import Notification from '../../svg/BellWhiteIcon.svg';
import { FlipInEasyY } from "react-native-reanimated";
const Notifications=({ele})=> {
    return (
        <>
        
        <ScrollView style={{}}>
        
          <View style={styles.view}>
            
              <View style={{backgroundColor:'#DEDEDE',width:35,height:35,justifyContent:"center",alignItems:"center",borderRadius:17.5}}>
                  <Notification></Notification>
              </View>
            
              <View style={{alignItems:'flex-start', justifyContent:'center',flexDirection:"column",maxWidth:"40%"}}>
                
                <Text style={{fontWeight:'bold',color:"black" }}>{ele.name}</Text>
                <Text style={{color:"black"}}>lorem inspum dolor sitl lsjflsjflj </Text>
              </View >
              <View style={{alignSelf:"flex-start"}}>
                <Text style={{alignSelf:'flex-end',color:"black"}}>{ele.time}</Text>
              </View>
          </View>
          
          </ScrollView>
        
        </>
    )
}
const styles=StyleSheet.create({
    view:{
    
       backgroundColor:'white',
       flexDirection:"row",
       justifyContent:"space-between",
       alignItems:"center",
       minHeight:80,
        borderRadius:4,
       marginHorizontal:15,
       elevation:4,
       padding:8
    }
})
export default Notifications;