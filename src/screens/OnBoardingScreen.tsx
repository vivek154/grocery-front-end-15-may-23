import React, { useState } from 'react';
import {
    View,
    StatusBar,
    TouchableOpacity,
    ListRenderItem,
    Text,
} from 'react-native';
import { WalkStyle } from '../shared/styles/WalkStyle'
import {
    heightPercentageToDP,
    widthPercentageToDP,
} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import { AUTH_TYPE } from '../redux/action/authAction'
import { DGREEN, LIGHTGREY, WHITE } from '../shared/constants/color'
import AppIntroSlider from 'react-native-app-intro-slider';
import IntroSliderFirstImage from '../shared/svg/IntroSliderFirstImage'
import IntroSliderThirdImage from '../shared/svg/IntroSliderThirdImage '

const DATA = [
    {
        id: '1',
        hightlightText: ' “Get Well Now, Pay Later” ',
        title:
            'service and be more flexible and efficient with your medical expenses!.',
        text: 'Manage appointments withease',
        text1:
            'Manage your Appointments from the comfort of your home – with just a few clicks. It’s that easy!',
        path: (
            <IntroSliderFirstImage
                width={widthPercentageToDP(90)}
                height={heightPercentageToDP(30)}></IntroSliderFirstImage>
        ),
    },
    {
        id: '2',
        hightlightText1: ' It’s that easy!',
        title:
            'Get Paid Medical Bills using Credit Cards/ Debit Cards/ UPI or Bank Account – We’ve Got You Covered!',
        text: 'Receive payment via any payment channel',
        path: (
            <IntroSliderThirdImage
                width={widthPercentageToDP(90)}
                height={heightPercentageToDP(30)}></IntroSliderThirdImage>
        ),
    },
];

interface IntroSlide {
    id: string;
    hightlightText?: string;
    hightlightText1?: string;
    title: string;
    text: string;
    text1?: string;
    path: JSX.Element;
}

const OnBoardingScreen = () => {
    const dispatch = useDispatch();
    const [cuurentIndex, setIndex] = useState(0);
    const [showRealApp, setShowRealApp] = useState(false);

    const _renderItem = ({ item }: { item: IntroSlide }) => {
        return (
            <View key={item.id}>
                <View style={{ marginTop: '15%' }}>
                    <View style={WalkStyle.imageView}>{item.path}</View>
                    <View>
                        <Text style={WalkStyle.text}>{item.text}</Text>
                        <Text numberOfLines={3} style={WalkStyle.subtext}>
                            <Text style={WalkStyle.subtext}>{item.text1}</Text>
                            <Text style={WalkStyle.hightlightText}>
                                {item.hightlightText}
                            </Text>
                            {item.title}
                            <Text style={WalkStyle.hightlightText1}>
                                {item.hightlightText1}
                            </Text>
                        </Text>
                    </View>
                </View>
            </View>
        );
    };
    const _onDone = () => {
        dispatch({ type: AUTH_TYPE.ONBOARDING_DONE });
    };

    const renderDoneButton = () => {
        return (
            <Pressable
                testID="skip_intro_button"
                onPress={() => _onDone()}
                style={({ pressed }) => [
                    {
                        opacity: pressed ? 0.5 : 1.0,
                        backgroundColor: DGREEN,
                        borderRadius: 5,
                        justifyContent: 'center',
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                    },
                ]}>
                <Text style={WalkStyle.skipBtn1}>NEXT</Text>
            </Pressable>
        );
    };
    const onSlideChange = (e: any) => {
        setIndex(e);
    };

    return (
        <SafeAreaView
            style={{
                paddingBottom: heightPercentageToDP(10),
                backgroundColor: WHITE,
                flex: 1,
            }}>
            <StatusBar backgroundColor={WHITE} barStyle={'dark-content'} />
            <View
                style={{
                    alignSelf: 'flex-end',
                    width: widthPercentageToDP(20),
                    left: 15,
                }}>
                <Pressable
                    testID="skip_intro_button"
                    onPress={() => _onDone()}
                    style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }]}>
                    <Text style={WalkStyle.skipBtn}>
                        {' '}
                        {cuurentIndex <= 1 ? 'Skip' : ''}
                    </Text>
                </Pressable>
            </View>
            <AppIntroSlider
                data={DATA}
                renderItem={_renderItem}
                // onSlideChange={(index: number) => setActiveIndex(index)}
                showNextButton={false}
                onDone={_onDone}
                onSlideChange={onSlideChange}
                activeDotStyle={{
                    width: 23,
                    backgroundColor: DGREEN,
                    top: heightPercentageToDP(8),
                    marginLeft: heightPercentageToDP(1),
                    marginRight: heightPercentageToDP(1),
                }}
                dotStyle={{
                    backgroundColor: LIGHTGREY,
                    top: heightPercentageToDP(8),
                    marginLeft: heightPercentageToDP(1),
                    marginRight: heightPercentageToDP(1),
                }}
                renderDoneButton={renderDoneButton}
            />
        </SafeAreaView>
    );
};
export default OnBoardingScreen;