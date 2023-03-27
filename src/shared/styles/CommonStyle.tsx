import { StyleSheet } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { BGRED, BLACK, BLUE, DARKBLUE, DARKGREY, DGREEN, GRAY_BLACK, LAVARED, LIGHTBLACK, WHITE } from '../constants/color';


export const commonStyle = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: WHITE,
    },
    dashboardContainer: {
        backgroundColor: WHITE,
        flex: 1,
    },
    buttonTextMd: {
        fontSize: 12,
        lineHeight: 15,
    },
    baseText: {
        fontSize: 20,
        lineHeight: 25,
        color: DARKBLUE,
    },
    btnView: {
        borderRadius: 8,
        marginBottom: 5,
        marginHorizontal: 5,
        marginVertical: 5,
        width: widthPercentageToDP(20)
    },
    buttonStyle: {
        backgroundColor: DGREEN
    },
    buttonTextStyle: {
        fontSize: 14,
        lineHeight: 16,
        color: WHITE,
    },
    tabContainerStyle: {
        marginHorizontal: 5,
        marginLeft: "8%",
        marginVertical: 10,
        textAlign: "center",
        alignItems: "center",
        alignSelf: "center"
    },
    tabIndicatorStyle: {
        backgroundColor: BGRED,
        height: 0,
    },
    specializationTabIndicatorStyle: {
        backgroundColor: LAVARED,
        height: 2,
    },
    activityIndicatorContainer: {
        width: widthPercentageToDP(100),
        height: heightPercentageToDP(100)
    },
    activityIndicator: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: WHITE
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)"
    },
    modalView: {
        backgroundColor: WHITE,
        shadowColor: BLACK,
        shadowOpacity: 0.25,
        shadowRadius: 4,
        paddingBottom: 10,
        paddingTop: 40,
        paddingHorizontal: 30,
        borderRadius: 12,
    },
    crossIconView: {
        position: "absolute",
        right: -25,
        top: -20,
        height: 30,
        alignItems: "center",
        width: 50
    },
    modalText: {
        textAlign: "center",
        fontSize: 20,
        lineHeight: 30,
        marginTop: -25,
    },
    modalTextView: {
        textAlign: "center",
        fontSize: 18,
        lineHeight: 22,
        flexDirection: "row",
        flexWrap: "wrap",
        width: widthPercentageToDP(70),
        color: BLUE
    },
    parentBtnView: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    buttonView: {
        width: widthPercentageToDP(20),
    },
    button: {
        borderRadius: 12,
        padding: 10,
        elevation: 2
    },
    buttonClose: {
        backgroundColor: BLUE,
        marginTop: 20,
        marginBottom: 10,
        marginHorizontal: 80
    },
    buttonYesNo: {
        backgroundColor: BGRED,
        marginTop: 20,
        marginBottom: 10
    },
    textStyle: {
        color: WHITE,
        fontSize: 16,
        lineHeight: 22,
        textAlign: "center"
    },
    emptyComponent: {
        height: heightPercentageToDP(80),
        justifyContent: "center",
        alignSelf: "center",
    },
    emptyComponentText: {
        fontSize: 16,
        lineHeight: 20,
        textAlign: "center",
        marginHorizontal: 30
    },
    customFontText: {
        fontSize: 14,
        lineHeight: 16,
        color: DARKGREY
    },
    // textPoppinsBold: {
    //     fontSize: 14,
    //     lineHeight: 16,
    //     color: LIGHTBLUE,
    // },
    // textPoppinsSemiBold: {
    //     fontSize: 11,
    //     lineHeight: 16,
    //     color: LIGHTBLUE,
    // },
    // textPoppinsMediumBold: {
    //     fontSize: 11,
    //     lineHeight: 16,
    //     color: BLACK,
    //     // fontFamily: Ubuntu,
    //     // fontFamily: UbuntuBold,
    //     // fontFamily: UbuntuRegular,
    //     // fontFamily: UbuntuMedium,
    // },
    // textPoppinsExtraBold: {
    //     fontSize: 11,
    //     lineHeight: 16,
    //     color: LIGHTBLUE,
    //     fontFamily: PoppinsExtraBold,
    // },
    formTxt: {
        color: WHITE,
        fontSize: 16,
        lineHeight: 22,
        textAlign: "center",
        width: widthPercentageToDP(25)
    },
    formbutton: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    patientProfileOPicture: {
        height: 120,
        width: 120,
        borderRadius: 75
    },
    //font sizes
    fontSizeXxs: {
        fontSize: 8,
        lineHeight: 10
    },
    fontSizeXs: {
        fontSize: 10,
        lineHeight: 12
    },
    fontSizeSm: {
        fontSize: 12,
        lineHeight: 14
    },
    fontSizeMd: {
        fontSize: 14,
        lineHeight: 18
    },
    fontSizeLg: {
        fontSize: 16,
        lineHeight: 20
    },
    fontSizeXl: {
        fontSize: 18,
        lineHeight: 22
    },
    fontSizeXxl: {
        fontSize: 20,
        lineHeight: 24
    },
    fontSizeXxxl: {
        fontSize: 22,
        lineHeight: 24
    },
    mainHeaderContainer: {
        flexDirection: "row",
        marginVertical: 15,
        marginHorizontal: 15
    },
    backIcon: {
        width: widthPercentageToDP(8),
    },
    commonHeaderText: {
        fontSize: 18,
        lineHeight: 20,
        color: LIGHTBLACK,
        // textTransform: "capitalize"
    },
    emptyComponentImage: {
        alignSelf: "center"
    }
});

export const boxStyle = {
    shadowColor: GRAY_BLACK,
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 0.6,
    borderRadius: 6,
    elevation: 5
};