import {createSlice,createAsyncThunk}  from "@reduxjs/toolkit"
import toast from "react-hot-toast"
import { messageAPI, userloggedinAPI, userloginAPI, userlogoutAPI } from "../../../API/adminAPI/usersApi"
import { deleteordersAPI, getallordersAPI, userordersAPI } from "../../../API/orderAPI/orderAPI";
import { getallusersAPI } from "../../../API/adminAPI/adminApi";




export const userLogin = createAsyncThunk("userlogin",async(data)=>{
    try {
  
        const response = await userloginAPI(data);

        if(response.status == 200){
            toast.success("user is loggin");
            localStorage.setItem("userToken",response.data.token);
            return response.data
        }else{
           toast.error(response.response.data.error)
        }
        
    } catch (error) {
        throw error
    }
})

export const userVerify = createAsyncThunk("userverify",async()=>{
    try {
         
        const response = await userloggedinAPI();
        if(response.status == 200){
            return response.data;
        }else{
            console.log("error");
        }

    } catch (error) {
        throw error
    }
})

 export const getallUsers = createAsyncThunk("getallusers",async()=>{
    try {
        const response  = await getallusersAPI();
        if(response.status == 200){
            return response.data
        }else{
            console.log("error");
        }
    } catch (error) {
        console.log(error);
    }
 })

export const userLogout = createAsyncThunk("userlogout",async()=>{
    try {

        const response = await userlogoutAPI();

        if(response.status == 200){
            toast.success("user is logout");
            localStorage.removeItem("userToken");
            return response.data
        }else{
            localStorage.removeItem("userToken")
        }
        
    } catch (error) {
        throw error
    }
})


export const userOrder = createAsyncThunk("userorders",async(data)=>{
    try {
        const response = await userordersAPI(data);
        if(response.status == 200){
            toast.success("Your order has been placed");
            return response.data
        }else{
            toast.error(response.response.data.error)
        }
    } catch (error) {
        console.log(error);
    }
})

export const userMessage = createAsyncThunk("message",async(data)=>{
    try {

        const response  = await messageAPI(data);
        if(response.status == 200){
            toast.success("your message is sent")
        }else{
            toast.error("there might be some problem ")
        }
        
    } catch (error) {
        throw error
    }
})

export const getallOrders = createAsyncThunk("getorders",async(data)=>{
    try {
 
         const response = await getallordersAPI(data);
         if(response.status == 200){
            return response.data
         }

    } catch (error) {
        throw error
    }
})

export const deleteOrder = createAsyncThunk("deleteorder",async(data)=>{
    try {
        const response = await deleteordersAPI(data);
        if(response.status == 200){
            toast.success("order is deleted");
            return response.data
        }
    } catch (error) {
        console.log(error);
    }
})
















export const userSlice = createSlice({
    name:"userslice",
    initialState:{
        userlogin:[],
        userloggedin:[],
        userlogout:[],
        getallusers:[],
        userorders:[],
        messages:[],
        getallorders:[],
        deleteorder:[],
        error:null,
        loader:false
    },
    extraReducers:(builders)=>{
        builders.addCase(userLogin.pending,(state)=>{
            state.loader = true
        })
        .addCase(userLogin.fulfilled,(state,action)=>{
            state.loader = false;
            state.userlogin = [action.payload]
        })
        .addCase(userLogin.rejected,(state,action)=>{
            state.loader = false;
            state.error [action.payload]
        })

       
         builders.addCase(userVerify.pending,(state)=>{
            state.loader = true
        })
        .addCase(userVerify.fulfilled,(state,action)=>{
            state.loader = false;
            state.userloggedin = [action.payload]
        })
        .addCase(userVerify.rejected,(state,action)=>{
            state.loader = false;
            state.error [action.payload]
        })


         
        builders.addCase(userLogout.pending,(state)=>{
            state.loader = true
        })
        .addCase(userLogout.fulfilled,(state,action)=>{
            state.loader = false;
            state.userloggedin = [];
            state.userlogout = [action.payload];
            state.userlogin=[];
        })
        .addCase(userLogout.rejected,(state,action)=>{
            state.loader = false;
            state.error [action.payload]
        })

        
             
        builders.addCase(userOrder.pending,(state)=>{
            state.loader = true
        })
        .addCase(userOrder.fulfilled,(state,action)=>{
            state.loader = false;
            state.userorders = [action.payload];
        })
        .addCase(userOrder.rejected,(state,action)=>{
            state.loader = false;
            state.error [action.payload]
        })

        builders.addCase(userMessage.pending,(state)=>{
            state.loader = true
        })
        .addCase(userMessage.fulfilled,(state,action)=>{
            state.loader = false;
            state.messages = [action.payload];
        })
        .addCase(userMessage.rejected,(state,action)=>{
            state.loader = false;
            state.userMessage [action.payload]
        })


        builders.addCase(getallOrders.pending,(state)=>{
            state.loader = true
        })
        .addCase(getallOrders.fulfilled,(state,action)=>{
            state.loader = false;
            state.getallorders = [action.payload];
        })
        .addCase(getallOrders.rejected,(state,action)=>{
            state.loader = false;
            state.userMessage [action.payload]
        })

        
        builders.addCase(deleteOrder.pending,(state)=>{
            state.loader = true
        })
        .addCase(deleteOrder.fulfilled,(state,action)=>{
            state.loader = false;
            state.deleteorder = [action.payload];
        })
        .addCase(deleteOrder.rejected,(state,action)=>{
            state.loader = false;
            state.userMessage [action.payload]
        })
        

         
        builders.addCase(getallUsers.pending,(state)=>{
            state.loader = true
        })
        .addCase(getallUsers.fulfilled,(state,action)=>{
            state.loader = false;
            state.getallusers = [action.payload];
        })
        .addCase(getallUsers.rejected,(state,action)=>{
            state.loader = false;
            state.userMessage [action.payload]
        })
    }
})


export default userSlice.reducer