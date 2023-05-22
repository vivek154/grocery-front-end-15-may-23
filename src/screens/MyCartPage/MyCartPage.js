import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
  BackHandler
} from 'react-native';
import React from 'react';
import PageHeader from '../PageHeader/PageHeader';
import MyCartCard from './MycartCard/MyCartCard';
import Mybutton from '../Mybutton';
import {AUTH_TYPE} from '../../redux/action/authAction';
import {useState, useEffect} from 'react';
import DeleteIcon from '../../svg/delete.svg';
import {getmycart} from '../../api/api';
import {useDispatch, useSelector} from 'react-redux';
import {Store} from '../../redux/Store';

const MyCartPage = ({navigation}) => {
  const myOrdersFromStore=useSelector((state)=>state.auth.myOrders)
  function showDeliveryOptions() {
    dispatch({type: AUTH_TYPE.SET_MY_ORDERS, payload:{totalPrice:totalPrice,orders:data}});
    console.log("@@@@@@ myOrders @@@@@@@",Store.getState().auth.myOrders)
    navigation.navigate('Delivery');
  }
  const [data, setdata] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [fetchingDataIndicator, setFetchingDataIndicator] = useState(true);
  const dispatch = useDispatch();
  const {userData} = useSelector(state => state?.auth);
  const reloadMyCartScreen = useSelector(
    state => state.auth.reloadMyCartScreen,
  );

  console.log("*****reload my cart screen*******",reloadMyCartScreen)

  function getTotalPrice() {
    let state1 = Store.getState();
  }
  const makeApiRequest = async () => {
    try {
      let response = await getmycart(userData.id);
      console.log('get my cart response ', response.data);
      let payload = response.data; //.map(cart => cart.productId);
      dispatch({type: AUTH_TYPE.GET_MY_CART_DATA, payload: payload});
      setdata(response.data);
      setFetchingDataIndicator(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    makeApiRequest();
  }, [reloadMyCartScreen]);

  useEffect(() => {
    dispatch({type: AUTH_TYPE.SET_TOTAL_PRICE, payload: totalPrice});
    getTotalPrice();
  }, [totalPrice]);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{height: '13%'}}>
        <PageHeader
          text="My Cart"
          navigation={navigation}
          navigateTo={'ProductList'}></PageHeader>
      </View>
      {fetchingDataIndicator && <ActivityIndicator></ActivityIndicator>}
      {!fetchingDataIndicator && data.length > 0 && (
        <>
          <View style={{height: '77%'}}>
            <ScrollView>
              <View>
                {data.map((item, index) => {
                  return (
                    <MyCartCard
                      key={index}
                      item={item}
                      SVGIcon={DeleteIcon}
                      makeApiRequest={makeApiRequest}
                      setTotalPrice={setTotalPrice}></MyCartCard>
                  );
                })}
              </View>
            </ScrollView>
          </View>
          <View style={styles.billContainer}>
            <View>
              <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
                ₹ {totalPrice}
              </Text>
              <Text style={{fontWeight: 'bold', color: '#C4C4C4'}}>
                Total Price
              </Text>
            </View>
            <View>
              {data.length > 0 && (
                <Mybutton
                  btnTxt="Buy Now "
                  txtColor="white"
                  myButton={styles.myButton}
                  onPress={showDeliveryOptions}
                  data={data}></Mybutton>
              )}
            </View>
          </View>
        </>
      )}
      {!fetchingDataIndicator && data.length == 0 && (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: 'black', fontSize: 17, fontWeight: 'bold'}}>
            Your Cart is Empty
          </Text>
        </View>
      )}
    </View>
  );
};

export default MyCartPage;

const styles = StyleSheet.create({
  myButton: {
    backgroundColor: '#FF5403',
    borderColor: '#000000',
    fontWeight: 'bold',
    fontSize: 14,
    borderRadius: 20,
    padding: 10,
    width: 150,
  },
  billContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 10,
    backgroundColor: 'white',
  },
});
