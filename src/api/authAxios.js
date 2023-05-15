import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Store } from '../redux/Store';
//import { AUTH_TYPE } from '../redux/actions/authAction';
import { AUTH_TYPE } from '../redux/action/authAction';
import { Platform } from 'react-native';
import deviceInfoModule from 'react-native-device-info'
const version = deviceInfoModule.getVersion();
export let refreshTokenData = {
    isExecuting: false,
    promise: null,
};



const authAxiosInstance = axios.create();


export const setSession = async (accessToken, refreshToken) => {

    console.log("access token at setSession:",accessToken)
    console.log("refresh token at setSession:",refreshToken)
    try{
        if (accessToken) {
            await AsyncStorage.setItem('accessToken',accessToken);
            if (refreshToken) {
                 await AsyncStorage.setItem('refreshToken', refreshToken);
            }
            authAxiosInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`
        } 
        else {
            await AsyncStorage.removeItem('accessToken')
            await AsyncStorage.removeItem('refreshToken')
            delete authAxiosInstance.defaults.headers.common.Authorization
        }
    }
    catch(err){
        console.log(err)
    }
}

export const setLocation = async (longitude, latitude) => {
    try {
        await AsyncStorage.setItem('longitude', `${longitude}`);
        await AsyncStorage.setItem('latitude', `${latitude}`);
    } catch {
    }
}
authAxiosInstance.interceptors.request.use(
    async (conf) => {
        const accessToken = await AsyncStorage.getItem('accessToken')
        if (accessToken) {
            conf.headers["Authorization"] = `Bearer ${accessToken}`;
            // conf.headers["os"] = Platform.OS.toLowerCase();
            // conf.headers["version"] = version;
            // const _longitude = await AsyncStorage.getItem('longitude')
            // const _latitude = await AsyncStorage.getItem('latitude')
            // conf.headers["longitude"] = _longitude || "";
            // conf.headers["latitude"] = _latitude || "";;
        }
        return conf;
    },
    (error) => {
        return Promise.reject(error);
    }
);
authAxiosInstance.interceptors.response.use(undefined, function axix(err) {
    if (err && err.response && err.response?.status === 401) {
        Store.dispatch({ type: AUTH_TYPE.LOGOUT })
    }
})

export default authAxiosInstance