import {commonrequest} from "../commonrequest"
import {BASE_URL} from "../helper"


 export const registerAPI = async(data,header)=>{
    return await commonrequest("POST",`${BASE_URL}/admin/api/register`,data,header,"admin")
}
export const adminLoginAPI = async(data,header)=>{
    return await commonrequest("POST",`${BASE_URL}/admin/api/login`,data,header,"admin");
}

export const adminLoggedinAPI = async(header)=>{
    return await commonrequest("POST",`${BASE_URL}/admin/api/adminverify`,{},header,"admin")
}

export const adminLogoutAPI = async(header)=>{
    return await commonrequest("POST",`${BASE_URL}/admin/api/logout`,{},header,"admin");
}

export const getallusersAPI = async(header)=>{
    return await commonrequest("GET",`${BASE_URL}/admin/api/getallusers`,{},header,"admin");
}

export const adminuserAPI = async(data,header)=>{
    return await commonrequest("POST",`${BASE_URL}/user/api/register`,data,header,"admin")
}




                       // products API


export const adminaddproduct = async(data,header)=>{
    return await commonrequest("POST",`${BASE_URL}/product/api/addproduct`,data,header,"admin");
}
export const getallproductsAPI = async(header)=>{
    return await commonrequest("GET",`${BASE_URL}/product/api/getallproducts`,{},header,"admin");
}

export const getsingleproductAPI = async(data,header)=>{
    return await commonrequest("GET",`${BASE_URL}/product/api/singleproduct/${data}`,data,header,"user");
}
export const deleteproductAPI = async(data,header)=>{
    return await commonrequest("DELETE",`${BASE_URL}/product/api/deleteproduct/${data}`,{},header,"admin");
}
