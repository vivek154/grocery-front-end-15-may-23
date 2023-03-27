import React from 'react'
import { useSelector } from 'react-redux';
import OnBoardingScreen from '../../screens/OnBoardingScreen';


const AuthGuard = (children: any) => {
    const {
        introSliderDone,
    } = useSelector(state => state.auth)

    let introSlider = introSliderDone;

    if (introSlider) return <>{children}</>
    else {
        return <OnBoardingScreen />;
    }
}

export default AuthGuard