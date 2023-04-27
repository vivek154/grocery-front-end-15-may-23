import { View, Text,Image, Dimensions,StyleSheet } from 'react-native'
import React from 'react'

import Carousel from 'react-native-reanimated-carousel'
const width=Dimensions.get('window').width;
const width3=(width-40)/3;
const MultiSlider = ({images}) => {
    const _renderItem=({item,index})=>{
        
        return(
            <View key={index}style={styles.imageContainer}>
      
                <Image style={{width:width3,height:width3,marginRight:5,borderRadius:8}} source={{uri:"https://www.bigbasket.com/media/uploads/p/l/60000655_9-coca-cola-soft-drink-original-taste.jpg?tr=w-640,q=80"}} ></Image>
            
            
                <Image style={{width:width3,height:width3,marginRight:5,borderRadius:8}} source={{uri:"https://www.bigbasket.com/media/uploads/p/l/60000655_9-coca-cola-soft-drink-original-taste.jpg?tr=w-640,q=80"}} ></Image>
              
              
                <Image style={{width:width3,height:width3,borderRadius:8,marginRight:5}} source={{uri:"https://www.bigbasket.com/media/uploads/p/l/60000655_9-coca-cola-soft-drink-original-taste.jpg?tr=w-640,q=80"}} ></Image>
              
            </View>
        )
    }
  return (
    <View style={{flex:1,alignSelf:"center"}}>
      <Carousel
                loop
                width={width}
                height={width / 3}
                autoPlay={true}
                data={images}
                scrollAnimationDuration={1000}
                renderItem={_renderItem}
                modeConfig={{
                  snapDirection: 'left',
                  parallaxScrollingScale: 1.0,
                  parallaxScrollingOffset: 0,
                }}
              panGestureHandlerProps={{
                  activeOffsetX: [-10, 10],
              }}
            />
    </View>
  )
}

export default MultiSlider

const styles=StyleSheet.create({
  imageContainer:{
    flex:1,
    gap:3,
    justifyContent:"center",
    flexDirection:"row",
    overflow:"hidden",
    alignItems:"center",
    alignSelf:"center",
  }
})