import { ScrollView, View ,Text} from 'react-native';
import Offers from './Offers';

const OffersArray=()=>
{

    const offers=[
        {id:1,name:'Fresh Apple',url:require('../../images/apple.jpg'),topic:'lorem ipsum dolor',rs1:'$10',rs2:'$20'},
        {id:2,name:'Fresh Peas',url:require('../../images/peas.jpg'),topic:'lorem ipsum dolor',rs1:'$10',rs2:'$20'},
        {id:3,name:'Fresh Peas',url:require('../../images/fortune.jpg'), topic:'lorem ipsum dolor',rs1:'$10',rs2:'$20'},
        {id:4,name:'Fresh Peas',url:require('../../images/peas.jpg'), topic:'lorem ipsum dolor',rs1:'$10',rs2:'$20'}
        
        
    ]
    return (
        <>
        <ScrollView>
<View>
<Text style={{fontWeight:'bold',color:'black',marginBottom:7,marginTop:7 ,fontSize:20,maxHeight:'100%',maxWidth:'100%'}}>Fruits And Vegetables</Text>
        <View style={{flex:1,flexDirection:'row',rowGap:10,columnGap:10,marginBottom:20,alignItems:"center",flexWrap:"wrap",paddingHorizontal:20}}>
         {
            offers.map((item,index)=>
            {
                return (
                    
                    <Offers  item={item} key={index}></Offers>
                )
            })
         }
         </View>
         </View>
         </ScrollView>
        </>
    )
}
export default OffersArray;