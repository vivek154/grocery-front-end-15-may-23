import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import SignInScreen from '../screens/auth/SignIn';

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
 

  // add other screens here
};

const AppRouter = () => {
  return (
    <Stack.Navigator>
     
    </Stack.Navigator>
  );
};

export default AppRouter;