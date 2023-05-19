import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image, Pressable } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import ReCarousel from 'react-native-reanimated-carousel';
import Carousel from 'react-native-reanimated-carousel';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';



const width = Dimensions.get('window').width;
console.log("width="+ width+ "  height= "+width/2)

const SingleSlider = ({images, showAllGrocery}) => {
    const _renderItem = ({ item, index }) => {
        return (
            <View key={index}
                style={{    
                 backgroundColor: 'white',
                 paddingHorizontal: 7,
                 paddingVertical: 7,
                 borderRadius: 12,
                 elevation: 2,
                 marginHorizontal: 6,
                 marginVertical:0.2,
                 width:widthPercentageToDP("85.6%"),
                 height:heightPercentageToDP("19%"),
                
                 justifyContent:'center',
                   
                }}>
                    
              <Pressable onPress={ showAllGrocery} >
                <Image style={{width:width-75,height:((width-20)/3),resizeMode:"contain",borderRadius:90,overflow:"hidden"}} source={item.url}></Image>
                </Pressable>
            </View>
           
        );
    }
  return (
    <GestureHandlerRootView style={{flex:1}}>
        <View style={{ flex: 1}}>
        
            <ReCarousel
                
                loop
                width={width}
                height={width / 2.5}
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