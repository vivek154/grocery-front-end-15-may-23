import { View, Text, Pressable, StyleSheet, Image, ScrollView, Modal } from 'react-native';
import PageHeader from '../PageHeader/PageHeader';
import { heightPercentageToDP, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import DeliveryCard from '../DeliveryPage/DeliveryCard';
import { useEffect, useState } from 'react';
import BottomNavBar from '../BottomNavBar/BottomNavBar';
import { getmycart } from '../../api/api';
import { useSelector } from 'react-redux';
import OrderDetails from './OrderDetails';

const MyOrder = ({ navigation }) => {
  const [myOrders, setMyOrders] = useState([])
  const userId = useSelector(state => state?.auth.userData.id);
  const fetchMyCartData = async () => {

    let response = await getmycart(userId);

   

    if (response.data) {

      setMyOrders(response.data)
    }
  };
  useEffect(() => {
    fetchMyCartData();
  
    
  }, []);

  const amount=useSelector((state)=>state.auth.totalPrice);
   console.log("..amount...",amount);
   const [random,setrandom]=useState(0);
   const a="cancel";
   const [show,setshow]=useState(a);

   const [showMyOrder,setshowMyorder]=useState(false);
   const [visibleOrderDetails,setvisibleOrderDetails]=useState(true);

  const  handlePress=()=>
  {
    setshow("Cancelled");
  }
   useEffect(()=>
   {
     setrandom(Math.floor(Math.random() * 11159099898));
   },[])
   const showmyOrderScreen=()=>
   {
       setshowMyorder(true);
       setvisibleOrderDetails(false);
   }
  return (
    <View>
      
      <View>
       {/* <Pressable >
          <Text
            style={{
              alignSelf: 'flex-start',
              marginHorizontal: 20,
              color: 'black',
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            Order Details :{random}
          </Text>
        </Pressable>*/}
        <View   >
         <View>
                  <PageHeader text="My Orders"></PageHeader>
                  
          </View> 
         {  visibleOrderDetails && <View>
          <View style={styles.container1}> 
          <Pressable  /*</View>onPress={()=>navigation.navigate("MyOrder")}*/
          onPress={showmyOrderScreen}> 
          <View>
          <Text
            style={{
              alignSelf: 'flex-start',
              marginHorizontal: 20,
              color: 'grey',
              fontWeight: 'bold',
              fontSize: 18,
            }}>
           Order Id: {random}
          </Text>
          <Text  style={{
              alignSelf: 'flex-start',
              marginVertical:4,
              marginHorizontal: 20,
              color: 'grey',
              fontWeight: 'bold',
              fontSize: 18,
            }}>Total Amount : {amount}</Text>
        </View>
        </Pressable>
        <Pressable style={{width:90,height:34,borderWidth:1,alignSelf:'center',marginVertical:30,borderRadius:10,backgroundColor:"#FF5403"}} onPress={handlePress}>
            <Text style={{alignSelf:'center',color:'white',marginVertical:4,fontSize:16}}>{show}</Text>
        </Pressable>
        </View>
        </View>}
        </View>  
      </View>
     { showMyOrder && <View style={stylesMyOrder.bodyContainer}>
        <ScrollView>
          <View>
        {
             myOrders.map((order, index) => {
              return <MyOrderCard key={index} item={order}></MyOrderCard>
            })
          }
</View>
        </ScrollView>
      </View>}
      <View style={stylesMyOrder.footerContainer}>
        <BottomNavBar navigation={navigation}></BottomNavBar>
      </View>
    </View>
  );
};

const stylesMyOrder = StyleSheet.create({
  headerContainer: {
    height: hp("10%")
  },
  bodyContainer: {
    height: hp("83%")
  },
  footerContainer: {
    height: hp("7%")
  }
})

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    minHeight: '15%',
    padding: 10,
    elevation: 5,
    borderRadius: 10,
    maxwidth: '90%',
    minWidth: '70%',

    marginVertical: 7,
  },
  image: {
    width: 101,
    height: 101,
    resizeMode: 'contain',
  },
  middleBox: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start",
    flexWrap: "wrap",
    marginHorizontal: 10,
    width: 120,
  },
  endRightBox: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  quantityContainer: {
    minHeight: 30,
    minWidth: 30,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
  }, 
  container1: {
    marginVertical:20,
    alignSelf:'center',
    width:widthPercentageToDP("80%"),
    height:heightPercentageToDP("20%"),
    borderRadius:7,
    backgroundColor:'white',
    elevation:2,
 },
});
export default MyOrder;

const MyOrderCard = (props) => {
  const { item } = props
  const totalPrice = useSelector((state) => state.auth.totalPrice)
  const { id, userId, name, price, imageUrl, productId, quantity } = item;
  return (
    <>
      <View style={styles.container}>
        <Image
          source={{ uri: imageUrl }}
          style={styles.image}></Image>

        <View style={{ width: '60%', flexDirection: 'row' }}>
          <View style={styles.middleBox}>
            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15 }}>
              {name}
            </Text>
            <Text style={{ color: 'black' }}>Quantity : {quantity}</Text>
            <Text style={{ color: 'black' }}>Sum Total : {quantity * price}</Text>
          </View>
        </View>
      </View>
    </>
  );
};
