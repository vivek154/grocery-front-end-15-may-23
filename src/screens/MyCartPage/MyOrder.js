import { View, Text, Pressable, StyleSheet, Image, ScrollView, Modal, Button } from 'react-native';
import PageHeader from '../PageHeader/PageHeader';
import { heightPercentageToDP as hp,widthPercentageToDP,widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DeliveryCard from '../DeliveryPage/DeliveryCard';
import { useEffect, useState } from 'react';
import BottomNavBar from '../BottomNavBar/BottomNavBar';
import { getmycart } from '../../api/api';
import { useSelector } from 'react-redux';
import Mybutton from '../Mybutton';

const MyOrder = ({navigation}) => {
  const myOrdersFromStore=useSelector((state)=>state.auth.myOrders)
  console.log("******myOrders*****",myOrdersFromStore)
  const [myOrders,setMyOrders]=useState(myOrdersFromStore)
  console.log("/////my orders///",myOrders)
  const totalPrice = useSelector((state)=>state.auth.totalPrice) 
  const [showDetails,setShowDetails]= useState(false)

  return (
    <View>
      <View style={stylesMyOrder.headerContainer}>
        <PageHeader
          text="My Orders"
          navigation={navigation}
          navigateTo={'MyProfile'}></PageHeader>
      </View>
      <View>
      </View>
      <View style={stylesMyOrder.bodyContainer}>
        
        { !showDetails &&
          <View style={{alignSelf:"center",width:wp("80%"),flexDirection:"column",justifyContent:"center",
          gap:5,marginTop:10,padding:10,elevation:4,borderRadius:10,backgroundColor:"#fff"}}>
              <Text style={{color:"black"}}>Order Details:</Text>
              <Text style={{color:"black"}}>Order ID : O-16052023236784 </Text>
              <Text style={{color:"black"}}>Total Price: RS {totalPrice}</Text>
              <Button onPress={()=>setShowDetails(!showDetails)} title='Show Details'
              color={"#000"} ></Button>
          </View>
        }
        <ScrollView style={{marginVertical:10}}>
          {showDetails &&
          <View style={{width:wp("90%"),alignSelf:'center'}}>
            <Button title='HIDE DETAILS' onPress={()=>setShowDetails(!showDetails)}
            
           color={"#000"} style={{color:"#000"}}></Button>
          </View>  
          }
          { showDetails &&
            
             myOrders.map((order, index) => {
              return <MyOrderCard key={index} item={order}></MyOrderCard>
            })
          }
        
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
    /*stifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "wrap",
      marginHorizontal: 10,
      gap: 5*/

    /* flexDirection: 'column',
     justifyContent: 'space-around',
     // alignItems: "flex-start"
     flexWrap: 'wrap',
     marginHorizontal: 23,
     width: 120,
      flexWrap:'wrap'*/
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

          {/*<Text style={{ color: "black" }}>$10</Text>*/}
        </View>
      </View>
    </>
  );
};