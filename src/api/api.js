import { API_URL } from "../constant/environment";
import authAxiosInstance from './authAxios';

export const mobileLogin = (payload) => {
    const url = `${API_URL}auth/otp/init`;
    return authAxiosInstance.post(url, payload);
}

export const otpVerify = (payload) => {
    const url = `${API_URL}auth/otp/verify`;
    return authAxiosInstance.post(url, payload);
}

export const getVegetables=()=>{
    
    const url=`${API_URL}products/all/1`;
    return authAxiosInstance.get(url);
}
export const getFruits=()=>{
    
    const url=`${API_URL}products/all/2`;
    return authAxiosInstance.get(url);
}
export const getGrocery=()=>{
    
    const url=`${API_URL}products/all/3`;
    return authAxiosInstance.get(url);
}
export const getSearchResults=(keyword)=>{
    
    const url=`${API_URL}products/search/${keyword}`;
    return authAxiosInstance.get(url);
}


