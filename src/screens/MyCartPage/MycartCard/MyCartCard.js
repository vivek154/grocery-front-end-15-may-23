
import { StyleSheet, Text, View, Image, Pressable,ActivityIndicator} from 'react-native'
import React, { useEffect, useState } from 'react'
//import DeleteIcon from "./images/delete.svg"
import QuantityButtons from '../../QuantityButtons/QuantityButtons'
import { deletemycart, getmycart, postmycart } from '../../../api/api'
import { useDispatch, useSelector } from 'react-redux'
import { AUTH_TYPE } from '../../../redux/action/authAction'

const MyCartCard = (props) => {
  const { userData } = useSelector(state => state?.auth)
  const { myCart } = useSelector(state => state?.auth)
  const state = useSelector(state => state)
  const dispatch = useDispatch();

  //console.log("userData", userData)
  let userid = {
    id: userData.id
  }
  const SVGIcon = props.SVGIcon
  const { item, data,setTotalPrice} = props;
  const { id, userId, name, price, imageUrl, productId } = item;

  const [count, setcount] = useState(1);
  const [deleteIndicator,setDeleteIndicator]=useState(false)
 
  useEffect(()=>{
    setTotalPrice((prevValue)=> (prevValue+ (count*price)))
  },[])

  const decrement = () => {
    if (count > 1) {
      setcount(count - 1)
      setTotalPrice((prevValue)=> (prevValue-(count*price)))
    }
  }

  const increment = () => {
    setcount(count + 1)
    setTotalPrice((prevValue)=> (prevValue+(price)))
  }

  console.log(id)
  console.log("data", data);

  


  const handledelete = async(productId) => {
    setDeleteIndicator(true)
    const response = await deletemycart(productId, userId)
    console.log("delete response",response.data)
    if(response.data==1){
      console.log("deleted")
    }
    props.makeApiRequest();

    setTotalPrice((prevValue)=>prevValue-(count*price))
    //console.log("user_id", userid);
    //console.log("productId", productId);
  }



  return (
    <View style={styles.container}>

      <View style={{ flexDirection: "row", gap: 20 }}>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image}></Image>
        </View>

        <View style={styles.middleBox}>
          <Text style={{ fontWeight: "bold", color: "black", fontSize: 15 }}>{name}</Text>
          <Text style={styles.text}>Price :{price*count}<Text style={{ color: "#656565", width: 70 }}>
          </Text>{ }</Text>
          <QuantityButtons count={count} increment={increment} decrement={decrement} ></QuantityButtons>
        </View>
      </View>
      <View style={styles.endRightBox}>
        {
          ! deleteIndicator &&
        <Pressable onPress={() => handledelete(productId)} style={styles.quantityContainer}>
          <SVGIcon></SVGIcon>
        </Pressable>
        }
        {
          deleteIndicator &&
          <ActivityIndicator></ActivityIndicator>
        }
      </View>
    </View>
  )
}

export default MyCartCard

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    backgroundColor: "#ffffff",
    width: "90%",
    padding: 10,
    elevation: 5,
    borderRadius: 10,
    marginVertical: 10
  },
  image: {
    width: 101,
    height: 88,
    resizeMode: "contain",
    
    

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
    justifyContent: "center",
    alignItems: "center",

  },
  quantityContainer: {
    minHeight: 40,
    minWidth: 40,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E5E5E5",
  },
  text: {
    color: "black",
    fontWeight: "bold"
  }
})