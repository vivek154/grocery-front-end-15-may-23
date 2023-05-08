import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import ReCarousel from 'react-native-reanimated-carousel';
import Carousel from 'react-native-reanimated-carousel';
import {GestureHandlerRootView} from 'react-native-gesture-handler';



const width = Dimensions.get('window').width;
console.log("width="+ width+ "  height= "+width/2)

const SingleSlider = ({images}) => {
    const _renderItem = ({ item, index }) => {
        return (
            <View key={index}
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    backgroundColor:"white",
                    
                }}>
                    

                <Image style={{width:width-20,height:(width/3)-20,resizeMode:"contain",borderWidth:1,overflow:"hidden"}} source={item.url}></Image>
            </View>
            
        );
    }
  return (
    <GestureHandlerRootView style={{flex:1}}>
        <View style={{ flex: 1}}>
            <ReCarousel
                
                loop
                width={width}
                height={width / 2}
                autoPlay={false}
                data={images}
                scrollAnimationDuration={1000}
                renderItem={_renderItem}
                pagingEnabled={false}
                modeConfig={{
                    snapDirection: 'left',
                    parallaxScrollingScale: 1.0,
                    parallaxScrollingOffset: 0,
                  }}
                panGestureHandlerProps={{
                    activeOffsetX: [-10, 10],
                }}
                customConfig={()=>{return{type:'positive',viewCount:1}}}
                
            />
        </View>
    </GestureHandlerRootView>
    
  )
}

export default SingleSlider

const styles = StyleSheet.create({})