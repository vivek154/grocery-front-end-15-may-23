
import { Image, StyleSheet, Text, View, Dimensions, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react';

import Mybutton from '../Mybutton'
import { useDispatch, useSelector } from 'react-redux';
import { getmycart, postmycart } from '../../api/api';
import { AUTH_TYPE } from '../../redux/action/authAction';
const width = Dimensions.get('window').width;


let Source = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUdKHdrEpIGniBkcg0yrlilj6A093qJqLDppKi9sJH&s"

const ProductCard = (props) => {
  //console.log("userData", userData)
  //console.log("userDataId", userData.id);
 
  const { item,navigation} = props;
  const { userId, id, name, price, discount, description, imageUrl } = item
  const myCartProducts= useSelector((state)=>state.auth.myCart)
  //console.log("myCartProducst**",myCartProducts)
  const dispatch=useDispatch()
  const[addedToCartFlag,setAddedToCartFlag]=useState(()=>{
      if(myCartProducts.indexOf(id)==-1){
        return false
      }
      else return true
    })

    useEffect(()=>{
      if(myCartProducts.indexOf(id)==-1){
        setAddedToCartFlag(false)
      }
      else setAddedToCartFlag(true)
    },[myCartProducts])


  const { userData } = useSelector(state => state?.auth)

  const handlePress = async(productId) => {
    setAddedToCartFlag(true)
    const userId=userData.id
    console.log(productId,"Added to cart",userId);
    let response= await postmycart(productId,userId)
    if(response.data){
      let response= await getmycart(userId);
      if(response.data){
        let payload=response.data.map((cart)=>cart.productId)
        dispatch({type:AUTH_TYPE.GET_MY_CART_DATA,payload:payload})
      }
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.top_view_container}>
        <View style={styles.discount_container}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 12 }}>{discount}% off</Text>
        </View>
        <View><Text style={{ fontWeight: "bold", fontSize: 12,color:"#000" }}>1KG</Text></View>
      </View>
      <View style={styles.image_container}>
      
        <Image source={{ uri: imageUrl ? imageUrl : Source }} style={styles.image}></Image>

        
      </View>
      <View style={styles.title_container}>
        <Text style={{ fontWeight: "bold", fontSize: 11, color: "#000000" }}>{name}</Text>
        <Text style={{ fontSize: 10,color:"#000"}}>{description}</Text>
      </View>
      <View style={styles.footer}>
        <View>
          <Text style={{ fontWeight: "800", fontSize: 10, color: "#000000" }}>Rs. {price} /-</Text>

        </View>

        { !addedToCartFlag &&
          <Mybutton onPress={() => handlePress(id)} myButton={styles.myButton} btnTxt="Add To Cart" txtColor="#ff9900" txtSize={7}></Mybutton>
        }
        {
          addedToCartFlag &&
          <Text style={{color: "black"}}>Added to<Text 
          onPress={()=> navigation.navigate("MyCartPage")} style={{color:"#ff5403"}}> cart</Text> 
          </Text>
        }

      </View>
    </View>
  )
}

export default ProductCard

const percentage = (percent, entity) => {
  return parseInt((percent / 100) * entity)
}

const containerWH = { width: percentage(45, width), height: percentage(55, width) };
const discount_containerWH = { width: percentage(30, containerWH.width), height: percentage(12, containerWH.height) }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: containerWH.width,
    height: containerWH.height,
    elevation: 10,
    borderRadius: percentage(10, containerWH.width),
    backgroundColor: "#ffffff",
    justifyContent: "space-between",
    padding: percentage(4, containerWH.width),
    paddingTop: 0,
  },
  top_view_container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  discount_container: {

    minWidth: discount_containerWH.width,
    minHeight: discount_containerWH.height,
    backgroundColor: "#ff9900",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: percentage(5, discount_containerWH.width),
    borderBottomRightRadius: percentage(5, discount_containerWH.width),
    marginLeft: percentage(10, containerWH.width),
  },
  image_container: {
    maxWidth: percentage(50, containerWH.width),
    maxHeight: percentage(50, containerWH.width),
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  image: {
    width: percentage(50, containerWH.width),
    height: percentage(50, containerWH.width),
    resizeMode: "contain",
    alignSelf: "center"
  },
  title_container: {
    justifyContent: "flex-end",
    minHeight: percentage(15, containerWH.height),
  },
  myButton: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#ff9900",
    borderRadius: 12,
    padding: 2,
    minWidth: percentage(52, containerWH.width),
    maxHeight: percentage(13, containerWH.height),
    marginTop: 2,
    alignItems: "center",
    fontSize: 10,
    fontWeight: "bold"

  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: percentage(14, containerWH.height),

  }
})