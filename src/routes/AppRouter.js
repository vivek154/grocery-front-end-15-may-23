import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavigationPage from '../screens/NavigationPage';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import Home from '../screens/Home/Home';
import Vegetables from '../screens/VegetablesPage/Vegetables';
import Fruits from '../screens/FruitsPage/Fruits';

import OrderInfo from '../screens/OrderInfoPage/OrderInfo';
import MyCartPage from '../screens/MyCartPage/MyCartPage';
import SavePage from '../screens/SavePage/SavePage';
import MyProfile from '../screens/MyProfile/MyProfile';
import Guarantees from '../screens/GuaranteesPage/Guarantees';
import SpleshScreen from '../screens/SpleshScreen/SpleshScreen';
import OtpConfirmScreen from '../screens/OtpConfirmScreen/OtpConfirmScreen';
import MainCategory from '../screens/Categories/MainCategory';
import MainNotification from '../screens/NotificationPage/MainNotification';
import PaymentOptions from '../screens/PaymentOptions/PaymentOptions';
import OffersArray from '../screens/OffersPage/OffersArray';
import Grocery from '../screens/GroceryPage/Grocery';
import ProductList from '../screens/ProductList/ProductList';
import SearchPage from '../screens/SearchPage/SearchPage';
import Register from '../screens/RegistrationPage/Register';
import OnboardingPage from '../screens/OnboardingPage/OnboardingPage';
import Delivery from '../screens/DeliveryPage/Delivery';
import BottomNavBar from '../screens/BottomNavBar/BottomNavBar';
import NewCategory from '../screens/Categories/NewCategory';
import EditProfile from '../screens/EditProfile/EditProfile';
import MyOrder from '../screens/MyCartPage/MyOrder';
import Wallets from '../screens/MyCartPage/Wallets';
import RatingReviews from '../screens/MyCartPage/RatingReviews';
import CustomerService from '../screens/MyCartPage/CustomerService';
import DeliveryCard from '../screens/OrderInfoPage/DeliveryCard/DeliveryCard';
import OrderDetails from '../screens/MyCartPage/OrderDetails';
import { useSelector } from 'react-redux';


//const Stack = createNativeStackNavigator<RootStackParamList>();
const Stack = createNativeStackNavigator();

/*export type RootStackParamList = {
 

  // add other screens here
};*/

const AppRouter = () => {
  
  const {isLoggedIn} = useSelector(state => state.auth);

  console.log(isLoggedIn,"login")
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      { !isLoggedIn &&
        <Stack.Screen name="LoginScreen" component={LoginScreen}></Stack.Screen>
      }

      <Stack.Screen name="Home" component={Home}></Stack.Screen>
      <Stack.Screen name='OnboardingScreen' component={OnboardingPage}></Stack.Screen>
      <Stack.Screen name="SpleshScreen" component={SpleshScreen}></Stack.Screen>
      <Stack.Screen name="Guarantees" component={Guarantees}></Stack.Screen>
      <Stack.Screen name="OtpConfirmScreen" component={OtpConfirmScreen}></Stack.Screen>
      <Stack.Screen name="Register" component={Register}></Stack.Screen>
      <Stack.Screen name="vegetablesPage" component={Vegetables}></Stack.Screen>
      <Stack.Screen name="FruitsPage" component={Fruits}></Stack.Screen>
      <Stack.Screen name="GroceryPage" component={Grocery}></Stack.Screen>
      <Stack.Screen name="MainCategory" component={MainCategory}></Stack.Screen>
      <Stack.Screen name="SearchPage" component={SearchPage}></Stack.Screen>
      <Stack.Screen name="MyCartPage" component={MyCartPage}></Stack.Screen>
      <Stack.Screen name="SavePage" component={SavePage}></Stack.Screen>
      <Stack.Screen name="OrderInfo" component={OrderInfo}></Stack.Screen>
      <Stack.Screen name="MainNotification" component={MainNotification}></Stack.Screen>
      <Stack.Screen name="PaymentOptions" component={PaymentOptions}></Stack.Screen>
      <Stack.Screen name="MyProfile" component={MyProfile}></Stack.Screen>
      <Stack.Screen name="OffersPage" component={OffersArray}></Stack.Screen>
      <Stack.Screen name="ProductList" component={ProductList}></Stack.Screen>
      <Stack.Screen name="Delivery" component={Delivery}></Stack.Screen>
      <Stack.Screen name="BottomNavbar" component={BottomNavBar}></Stack.Screen>
      <Stack.Screen name="NewCategory" component={NewCategory}></Stack.Screen>
      <Stack.Screen name="NavigationPage" component={NavigationPage}></Stack.Screen>
      <Stack.Screen name="EditProfilePage" component={EditProfile}></Stack.Screen>
      <Stack.Screen name='MyOrder' component={MyOrder}></Stack.Screen>
      <Stack.Screen name='Wallets' component={Wallets}></Stack.Screen>
      <Stack.Screen name='RatingReviews' component={RatingReviews}></Stack.Screen>
      <Stack.Screen name='CustomerService' component={CustomerService}></Stack.Screen>
      <Stack.Screen name="DeliveryCart" component={DeliveryCard}></Stack.Screen>
      <Stack.Screen name="OrderDetails" component={OrderDetails}></Stack.Screen>
      <Stack.Screen name='LoginScreen1' component={LoginScreen}></Stack.Screen>

    </Stack.Navigator>
  );
};

export default AppRouter;