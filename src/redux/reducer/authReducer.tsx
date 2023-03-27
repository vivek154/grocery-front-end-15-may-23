import { AUTH_TYPE } from '../action/authAction'


const initialState = {
    showOnBoardingScreen: false,
}

const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case AUTH_TYPE.ONBOARDING_DONE: {
            return {
                ...state,
                showOnBoardingScreen: true
            }
        }
        default:
            return state;
    }
};

export default authReducer;