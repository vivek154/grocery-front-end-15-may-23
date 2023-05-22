import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  ScrollView,
  Modal,
  Button,
  ActivityIndicator,
} from 'react-native';
import PageHeader from '../PageHeader/PageHeader';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import DeliveryCard from '../DeliveryPage/DeliveryCard';
import {useEffect, useState} from 'react';
import BottomNavBar from '../BottomNavBar/BottomNavBar';
import {getAllOrders, getOrderDatails, getmycart} from '../../api/api';
import {useSelector} from 'react-redux';
import Mybutton from '../Mybutton';
const MyOrder = ({navigation}) => {

  //const myOrdersFromStore = useSelector(state => state.auth.myOrders);
  const userId=useSelector((state)=>state.auth.userData.id)
  const [myOrders, setMyOrders] = useState([])//useState(myOrdersFromStore);
  const fetchAllOrders=async()=>{
    try{
      let response=await getAllOrders(userId)
      if(response.data){
        setMyOrders(response.data)
      }
    }
    catch(error){
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchAllOrders()
  },[])


  return (
    <View>
      <View style={stylesMyOrder.headerContainer}>
        <PageHeader
          text="My Orders"
          navigation={navigation}
          navigateTo={'MyProfile'}></PageHeader>
      </View>
      <View style={stylesMyOrder.bodyContainer}>

        <ScrollView>
          {myOrders.map((order, index) => {
            return <OrderCard order={order} key={index}></OrderCard>;
          })}
        </ScrollView>
      </View>
      <View style={stylesMyOrder.footerContainer}>
        <BottomNavBar navigation={navigation}></BottomNavBar>
      </View>
    </View>
  );
};

const stylesMyOrder = StyleSheet.create({
  headerContainer: {
    height: hp('10%'),
  },
  bodyContainer: {
    height: hp('83%'),
  },
  footerContainer: {
    height: hp('7%'),
  },
});

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
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
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
});
export default MyOrder;
const OrderDetails = props => {
  const {item} = props;
  const {id, userId, productName, price, productImage, productId, quantity} = item;
  return (
    <>
      <View style={styles.container}>
        <Image source={{uri: productImage}} style={styles.image}></Image>

        <View style={{width: '60%', flexDirection: 'row'}}>

          <View style={styles.middleBox}>
            <Text style={{fontWeight: 'bold', color: 'black', fontSize: 15}}>
              {productName}
            </Text>

            <Text style={{color: 'black'}}>Price : {price}</Text>
            <Text style={{color: 'black'}}>Quantity : {quantity}</Text>
            <Text style={{color: 'black'}}>Sum Total : {quantity * price}</Text>

          </View>
        </View>
      </View>
    </>
  );
};

const OrderCard = ({order}) => {
  const {id,orderCode,totalPrice,deliveryAddress,orderDate,orderStatus} = order;
  const OrderId=id;
  const[orders,setOrders]=useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const fetchOrderDetails=async()=>{
    try{
      let response= await getOrderDatails(OrderId)
      if (response.data){
        setOrders(response.data)
        setShowLoader(false)
      }
    }
    catch(error){
      console.log(error)
    }
  }
  return (
    <View>
      {!showDetails && (
        <View
          style={{
            alignSelf: 'center',
            width: wp('80%'),
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 5,
            marginTop: 10,
            padding: 10,
            elevation: 4,
            borderRadius: 10,
            backgroundColor: '#fff',
          }}>
          <Text style={{color: 'black'}}>Order Details:</Text>
          <Text style={{color: 'black'}}>Order ID : {orderCode} </Text>
          <Text style={{color: 'black'}}>Total Price: RS {totalPrice}</Text>
          <Text style={{color: 'black'}}>Order Date: {orderDate}</Text>
          <Text style={{color: 'black'}}>Delivery Address: {deliveryAddress}</Text>
          <Text style={{color: 'black'}}>Order Status: {orderStatus}</Text>
          <Button
            onPress={() => {
              setShowDetails(!showDetails)
              fetchOrderDetails(OrderId)
              }}
            title="Show Details"
            color={'#000'}></Button>
        </View>
      )}
      <ScrollView style={{marginVertical: 10}}>
        {showDetails && (
          <View style={{width: wp('90%'), alignSelf: 'center'}}>
            <Button
              title="HIDE DETAILS"
              onPress={() => {
                setShowDetails(!showDetails)
                setShowLoader(true)}}
              color={'#000'}
              style={{color: '#000'}}></Button>
          </View>
        )}

        {showDetails && showLoader &&
          <ActivityIndicator color={"#FF5403"}></ActivityIndicator>
        }

        {showDetails && !showLoader &&
          orders.map((products, index) => {
            return <OrderDetails key={index} item={products}></OrderDetails>;
          })}
      </ScrollView>
    </View>
  );
};
