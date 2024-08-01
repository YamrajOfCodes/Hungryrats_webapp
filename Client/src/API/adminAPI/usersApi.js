import {commonrequest} from "../commonrequest"
import {BASE_URL} from "../helper"


 export const userloginAPI = async(data,header)=>{
    return await commonrequest("POST",`${BASE_URL}/user/api/login`,data,header,"user")
}

export const userloggedinAPI = async(header)=>{
    return await commonrequest("GET",`${BASE_URL}/user/api/userverify`,"",header,"user")
}

export const userlogoutAPI = async(header)=>{
    return await commonrequest("POST",`${BASE_URL}/user/api/logout`,{},header,"user")
}

 export const messageAPI = async(data,header)=>{
    return await commonrequest("POST",`${BASE_URL}/user/api/message`,data,header,"");
 }