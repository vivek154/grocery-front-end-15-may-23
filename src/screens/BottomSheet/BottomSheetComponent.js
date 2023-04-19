import { StyleSheet, Text, View,Button,TouchableOpacity} from 'react-native'
import React,{ useRef } from 'react'
const array=[1,2,3,4,5,6,7,8,9,10,11,12]
import RBSheet from "react-native-raw-bottom-sheet";
import Mybutton from '../Mybutton';
import ProductList from '../ProductList/ProductList';

const BottomSheetComoponent = ({navigation}) => {
    const refRBSheet = useRef();
   
  return (

    <View
      style={{
        flex: 1,
        backgroundColor: "#fff"
      }}
    >
      <ProductList refRBSheet={refRBSheet} navigation={navigation}></ProductList>
     
     
      <RBSheet
        height={400}
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent"
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >
          <View style={styles.contentContainer}>
            <Text style={{color:"black",fontWeight:"bold"}}>Search Filter</Text>
            
            <View style={styles.btnContainer}>
            {
              array.map((item,index)=>{
                return <Mybutton key={index} btnTxt="Vegetables" txtColor="#ffffff" myButton={styles.myButton}></Mybutton>
              })
            }
            </View>
            <View style={styles.bigBtnContainer}>
              <Mybutton btnTxt="Apply Filter" txtColor="#ffffff" myButton={styles.bigButtons}></Mybutton>
              <Mybutton btnTxt="Clear All" txtColor="#ffffff" myButton={styles.bigButtons}></Mybutton>
            </View>
            
          </View>
      </RBSheet>
    </View>

  )
}

export default BottomSheetComoponent

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
    height:"100%"
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  myButton:{
    backgroundColor:"#FF5403",
    borderColor:"#000000",
    fontWeight:"bold",
    borderRadius:20,
    padding:10,
    width:"30%",
},
btnContainer:{
  flexDirection:"row",
  flexWrap:"wrap",
  columnGap:10,
  rowGap:10,
  justifyContent:"center",
  alignItems:"center",
  marginTop:10
},
bigBtnContainer:{
  width:"100%",
  marginTop:10,
  flexDirection:"column",
  gap:5,
  paddingVertical:5,
  justifyContent:"center",
  alignItems:"center"
},
bigButtons:{
  backgroundColor:"#FF5403",
  borderColor:"#000000",
  fontWeight:"bold",
  fontSize:15,
  borderRadius:20,
  padding:10,
  width:"70%",
}
})