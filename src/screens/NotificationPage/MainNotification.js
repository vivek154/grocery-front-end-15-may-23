import { View ,Text,ScrollView} from "react-native"

import Notifications from "./Notifications"

const MainNotification=()=>
{
    const notificationarr=[
        {id:1,name:'fresh apple',text:'this is apple',time:'2hour'},
        {id:2,name:'fresh Pinapple',text:'this is Pinapple',time:'2hour'},
        {id:3,name:'fresh Vegetable',text:'this is Vegetable',time:'2hour'},
        {id:4,name:'fresh Lemon',text:'this is Lemon',time:'2hour'},
        {id:3,name:'fresh Vegetable',text:'this is Vegetable',time:'2hour'},
        {id:4,name:'fresh Lemon',text:'this is Lemon',time:'2hour'},
        {id:3,name:'fresh Vegetable',text:'this is Vegetable',time:'2hour'},
        {id:4,name:'fresh Lemon',text:'this is Lemon',time:'2hour'},
    
    

    ]
    return (
        <>
        <ScrollView>
        <View>
        <View style={{rowGap:10}}>
             {
                notificationarr.map((ele,index)=>
                {
                    return (
                        <Notifications ele={ele} key={index}></Notifications>
                    )
                })
             }
        </View>

        </View>
        </ScrollView>

        
        </>
    )
}
export default MainNotification;