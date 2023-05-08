import { View, Text,Image, Dimensions,StyleSheet } from 'react-native'
import React from 'react'

import Carousel from 'react-native-reanimated-carousel'
const width=Dimensions.get('window').width;
const width3=(width/3);
const MultiSlider = ({images}) => {
    const _renderItem=({item,index})=>{
        
        return(
            <View key={index}style={styles.imageContainer}>
      
                <Image style={{width:width3,height:width3,marginRight:5,borderRadius:8}} source={{uri:"https://www.eatrightbasket.com/wp-content/uploads/2019/02/SS_Veg_26.jpg"}} ></Image>
            
            
                <Image style={{width:width3,height:width3,marginRight:5,borderRadius:8}} source={{uri:"https://t4.ftcdn.net/jpg/03/27/96/23/360_F_327962332_6mb5jQLnTOjhYeXML7v45Hc5eED2GYOD.jpg"}} ></Image>
              
              
                <Image style={{width:width3,height:width3,borderRadius:8,marginRight:5}} source={{uri:"https://www.komalasvegemart.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/4/247-2475312_ladies-finger-india-kg-hd-png-download.png"}} ></Image>
              
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
    justifyContent:"space-between",
    flexDirection:"row",
    marginVertical:10,
    alignItems:"center",
    alignSelf:"center",

  }
})