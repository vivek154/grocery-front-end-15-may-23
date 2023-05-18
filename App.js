import {Provider, useDispatch, useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {AUTH_TYPE} from './src/redux/action/authAction';
import AppRouter from './src/routes/AppRouter'
import { Store } from './src/redux/Store';
import OnboardingPage from './src/screens/OnboardingPage/OnboardingPage';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import { useEffect } from 'react';

const App = () => {
  const {showOnBoardingScreen,isLoggedIn} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const handleOnBoardingDone = () => {
    dispatch({type: AUTH_TYPE.ONBOARDING_DONE});
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <NavigationContainer>

          {!showOnBoardingScreen && (
            <OnboardingPage onBoardingDone={handleOnBoardingDone}  />
          )}
          
          {<AppRouter />}
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};
export default () => (
  <Provider store={Store}>
    <App />
  </Provider>
);