import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useMemo, useRef,useState }  from 'react'
import BottomSheet,{BottomSheetView} from '@gorhom/bottom-sheet'
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Mybutton from '../Mybutton';
const array=[1,2,3,4,5,6,7,8,9,10,11,12]
const BottomSheetComponent = () => {

  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '60%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <>
      <GestureHandlerRootView>
      <View style={styles.container}>
        
        <BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
        enablePanDownToClose={true}>
          
          <View style={styles.contentContainer}>
            <Text>Search Filter</Text>
            <View style={styles.btnContainer}>
            {
              array.map((item)=>{
                return <Mybutton  btnTxt="Vegetables" txtColor="#ffffff" myButton={styles.myButton}></Mybutton>
              })
            }
            </View>
            <View style={styles.bigBtnContainer}>
              <Mybutton btnTxt="Apply Filter" txtColor="#ffffff" myButton={styles.bigButtons}></Mybutton>
              <Mybutton btnTxt="Clear All" txtColor="#ffffff" myButton={styles.bigButtons}></Mybutton>
            </View>
          </View>
        </BottomSheet>
      </View>
      </GestureHandlerRootView>
    </>
    
  )
}

export default BottomSheetComponent

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
});

