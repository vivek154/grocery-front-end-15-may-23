import { State } from 'react-native-gesture-handler';
import { AUTH_TYPE } from '../action/authAction'


const initialState = {
    showOnBoardingScreen: false,
    myCart:[],
    myOrders:[],
    totalPrice:0,
    reloadMyCartScreen:false,
    isLoggedIn:false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_TYPE.ONBOARDING_DONE: {
            return {
                ...state,
                showOnBoardingScreen: true
                
            }
        }
        case AUTH_TYPE.RECEIVED_USER_DATA: {
            return {
                ...state,userData:action.payload
            }
        }
        case AUTH_TYPE.UPDATE_USER_DATA:{
            return{
                ...state,userData:action.payload
            }
        }
        case AUTH_TYPE.GET_MY_CART_DATA:{
            return {
                ...state,myCart:action.payload 
            }
        }
        case AUTH_TYPE.DELETE_FROM_MY_CART:{
            return action.payload
        }
        case AUTH_TYPE.SET_TOTAL_PRICE:{
            return {
                ...state,totalPrice:action.payload
            }
        }
        case AUTH_TYPE.SET_MY_ORDERS:{
            return {
                ...state,myOrders:action.payload
            }
        }
        case AUTH_TYPE.RELOAD_MY_CART_SCREEN:{
            return {
                ...state,reloadMyCartScreen:action.payload
            }
        }
        case AUTH_TYPE.SET_IS_LOGGED_IN:{
            return{
                ...state,isLoggedIn:action.payload
            }
        }
        default:
            return state;
    }
};

export default authReducer;