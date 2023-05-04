import { AUTH_TYPE } from '../action/authAction'


const initialState = {
    showOnBoardingScreen: false,
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
        default:
            return state;
    }
};

export default authReducer;