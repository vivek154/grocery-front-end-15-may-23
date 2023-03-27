import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    widthPercentageToDP,
    heightPercentageToDP,
} from 'react-native-responsive-screen';
import {
    BGRED,
    DARKGREY,
    DGREEN,
    WHITE,
} from '../constants/color'
import { commonStyle } from '../styles/CommonStyle';

export const WalkStyle = StyleSheet.create({
    dashboardContainer: {
        flex: 1,
        backgroundColor: WHITE,
    },
    skip: {
        color: BGRED,
        fontSize: 14,
        textAlign: 'right',
        marginRight: 30,
        marginVertical: 30,
    },
    skipBtn: {
        ...commonStyle.fontSizeMd,
        color: DGREEN,
        marginTop: 30,
        marginRight: 30,
    },
    skipBtn1: {
        textAlign: 'center',
        width: '100%',
        alignSelf: 'center',
        color: WHITE,
        fontSize: 16,
        lineHeight: 16,
        justifyContent: 'center',
    },
    // skip: {
    //     color: BGRED,
    //     fontSize: 14
    // },
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        marginVertical: 10,
        width: 330,
        height: 200,
    },
    HealthOklogoimage: {
        alignSelf: 'center',
        marginTop: 60,
    },
    // image: {
    //     width: 320,
    //     height: 220,
    //     marginVertical: 50,
    // },
    text: {
        fontSize: 22,
        lineHeight: 30,
        marginHorizontal: 30,
        color: DGREEN,
        padding: 10,
        textAlign: 'left',
    },
    subtext: {
        fontSize: 16,
        lineHeight: 20,
        marginHorizontal: 30,
        color: DARKGREY,
        padding: 10,
        textAlign: 'left',
    },
    hightlightText: {
        fontSize: 16,
        lineHeight: 20,
        marginHorizontal: 10,
        color: DGREEN,
        padding: 10,
        textAlign: 'left',
        marginLeft: '10%',
    },
    hightlightText1: {
        fontSize: 16,
        lineHeight: 28,
        marginHorizontal: 10,
        color: DGREEN,
        padding: 10,
        textAlign: 'left',
        marginLeft: '10%',
    },
    title: {
        fontSize: 26,
        lineHeight: 30,
        color: WHITE,
        textAlign: 'center',
    },
    submitOTP: {
        marginHorizontal: '12%',
        marginTop: '5%',
        borderRadius: 14,
        fontSize: 16,
        height: heightPercentageToDP(7),
        width: widthPercentageToDP(80),
        marginBottom: 5,
        marginLeft: widthPercentageToDP(12),
        justifyContent: 'center',
        backgroundColor: BGRED,
        alignItems: 'center',
    },
    icon: {
        marginTop: 6,
    },
    mainView: {
        marginTop: 20,
    },
    imageView: {
        alignSelf: 'center',
        bottom: 40,
        marginTop: '12%',
    },
    paymentBtn: {
        ...commonStyle.fontSizeMd,
        color: WHITE,
    },
    buttonStyle: {
        backgroundColor: DGREEN,
        paddingVertical: 10,
        paddingHorizontal: 25,
        marginHorizontal: 20,
        alignSelf: 'center',
        borderRadius: 8,
    },
    circleShape: {
        width: 200,
        alignSelf: 'center',
        height: 45,
        bottom: 65,
    },
    buttonCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        bottom: 0,
        marginTop: 65,
        marginRight: '10%',
    },
    continue: {
        width: widthPercentageToDP(100),
        right: 0,
        borderRadius: 14,
        marginTop: heightPercentageToDP(5),
        justifyContent: 'center',
        alignItems: 'center',
    },
    continuebtn: {
        height: heightPercentageToDP(6),
        width: widthPercentageToDP(25),
        marginLeft: widthPercentageToDP(50),
        bottom: widthPercentageToDP(15),
        borderRadius: 5,
        justifyContent: 'center',
        backgroundColor: DGREEN,
        // paddingLeft:10
    },
    introCntBtn: {
        textAlign: 'center',
        width: '100%',
        alignSelf: 'center',
        color: WHITE,
        fontSize: 16,
        lineHeight: 16,
        justifyContent: 'center',
    },
});