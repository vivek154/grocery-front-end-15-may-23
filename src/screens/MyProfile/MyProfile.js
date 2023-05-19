
import {StyleSheet, Text, View, ScrollView, Pressable} from 'react-native';
import React from 'react';
import PageHeader from '../PageHeader/PageHeader';
import ProfileCard from './ProfileCard';
import LocationIcon from '../../svg/location_orange.svg';
import LogoutIcon from "../../svg/logoutIcon.svg"
import Mybutton from '../Mybutton';
import data from './data';
import ProfileActionCard from './ProfileActionCard';
import BottomNavBar from '../BottomNavBar/BottomNavBar';
import {useDispatch, useSelector} from 'react-redux';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { AUTH_TYPE } from '../../redux/action/authAction';

const MyProfile = ({navigation}) => {

  const isLoggedIn=useSelector((state)=>state.auth.isLoggedIn);
  console.log(isLoggedIn)
  const {userData} = useSelector(state => state?.auth);
  const dispatch=useDispatch();

  return (

    <View style={{backgroundColor: 'white', minHeight: '100%'}}>
      <View style={styles.headerContainer}>

        <PageHeader text="My Profile" navigation={navigation} navigateTo={"Home"}></PageHeader>
      </View>
      <View style={styles.bodyContainer}>
            <View style={{flex: 0.2,paddingHorizontal:20,marginVertical:5}}>
                <ProfileCard
                    userData={userData}
                    navigation={navigation}></ProfileCard>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 20,
                    marginVertical: 10,
                    flex:0.1
                }}>
                <View
                    style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 10,
                    }}>
                    <LocationIcon></LocationIcon>
                    <Text style={{color: '#000'}}>Address</Text>
                </View>
                <Mybutton
                myButton={styles.myButton}
                btnTxt="Change"
                txtColor="#C4C4C4"></Mybutton>
            </View>

            <View style={{flexDirection: 'column',paddingHorizontal:10, gap: 5,flex:0.7}}>
                <ScrollView fadingEdgeLength={20}>
                    {data.map((item, index) => {
                    return (
                        <ProfileActionCard
                        key={index}
                        optionName={item.option}
                        LeftSvg={item.SVG}
                        navigation={navigation}
                         item={item}></ProfileActionCard>
                    );
                    })}
                </ScrollView>
                <Pressable style={{height:50,flexDirection:"row",gap:30,paddingHorizontal:10,marginVertical:5,alignSelf:'center'}}>
                    <LogoutIcon></LogoutIcon>
                    <Text style={{color:"red",fontSize:15,}} onPress={()=>{
                    dispatch({type:AUTH_TYPE.SET_IS_LOGGED_IN,payload:true},
                    navigation.navigate("LoginScreen1"))
                    
                    }}>Logout</Text>        
                </Pressable>
            </View>
      </View>

      <View style={styles.footerContainer}>
        <BottomNavBar navigation={navigation}></BottomNavBar>
      </View>
    </View>
  );
};


export default MyProfile;

const styles = StyleSheet.create({
  headerContainer: {
    height: hp('12%'),
    
  },
  bodyContainer: {
    height: hp('81%'),
   
  },
  footerContainer: {
    height: hp('7%'),
  },
  myButton: {
    backgroundColor: '#ffffff',
    borderColor: '#C4C4C4',
    fontWeight: 'bold',
    fontSize: 12,
    borderRadius: 20,
    padding: 10,
    minWidth: 100,
    borderWidth: 2,
  },
});
