import { View ,Text,ScrollView} from "react-native"

import Notifications from "./Notifications"
import PageHeader from "../PageHeader/PageHeader"
import PageHeadBar from "../PageHeadBar/PageHeadBar"

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
        <PageHeader text="Notifications"></PageHeader>
       
        <ScrollView>
        <View style={{flexDirection:'row',justifyContent:'space-between',margin:10}}>
            <Text style={{marginLeft:18,fontWeight:'bold',color:"black"}}>Today</Text>
            <Text style={{color:"#FF5403"}}>View All</Text>
        </View>
        <View>
        <View style={{rowGap:7}}>
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