import { commonrequest } from "../commonrequest";
import { BASE_URL } from "../helper";



export const userordersAPI = async(data,header)=>{
    return await commonrequest("POST",`${BASE_URL}/admin/api/orders`,data,header,"user");
 }
 export const getallordersAPI = async(header)=>{
    return await commonrequest("GET",`${BASE_URL}/admin/api/getorders`,{},header,"admin");
 }
 export const deleteordersAPI = async(data,header)=>{
    return await commonrequest("DELETE",`${BASE_URL}/admin/api/deleteorder/${data.orderId}`,{},header,"admin");
 }
