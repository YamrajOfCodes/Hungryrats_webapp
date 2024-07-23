import {createAsyncThunk,createSlice} from "@reduxjs/toolkit"
import { adminaddproduct, adminLoggedinAPI, adminLoginAPI, adminLogoutAPI, adminuserAPI, deleteproductAPI, getallproductsAPI, getsingleproductAPI, registerAPI } from "../../../API/adminAPI/adminApi";
import toast from "react-hot-toast"



export const Register= createAsyncThunk("register",async(data)=>{
    
        const response = await registerAPI(data)
        
        if(response.status == 200){
            toast.success("admin is registered")
            return response.data;
        }else{
            toast.error(response.response.data.error)
        }
       
    }
    
)

export const adminLogin = createAsyncThunk("adminlogin",async(data)=>{
    try {
        const response = await adminLoginAPI(data);

        if(response.status == 200){
            localStorage.setItem('adminToken',response.data.token);
            toast.success("admin is login")
            return response.data;
        }else{
            toast.error(response.response.data.error)
        }
    } catch (error) {
        toast.error(response.response.data.error)
    }
})

export const adminVerify = createAsyncThunk("adminverify",async(thunkapi)=>{
    try {
        const response = await adminLoggedinAPI();
        if(response.status == 200){
            return response.data
        }else{
            return thunkapi.rejectWithValue("error")
        }
    } catch (error) {
        throw error
    }
})

export const adminLogout = createAsyncThunk("adminlogout",async(thunkapi)=>{
    try {
        const response  = await adminLogoutAPI();
        if(response.status == 200){
            localStorage.removeItem("adminToken");
            toast.success("admin is logout")
            return response.data
        }else{
            localStorage.removeItem("adminToken");
            toast.success("admin is logout")
        }
    } catch (error) {
        toast.success("admin is logout")
    }
})

export const getallProducts = createAsyncThunk("getallproducts",async()=>{
    try {
        const response = await getallproductsAPI();
        if(response.status == 200){
            return response.data
        }else{
            console.log("error");
        }
    } catch (error) {
        console.log(error);
    }
})

export const addProduct = createAsyncThunk("addproduct",async(data)=>{
    try {
        const response  = await adminaddproduct(data.data,data.config)
        if(response.status == 200){
            toast.success("product is added");
            return response.data;
        }
    } catch (error) {
        console.log(error);
    }
})

export const singleProduct  = createAsyncThunk("singleproduct",async(data)=>{
    try {
 
        const response = await getsingleproductAPI(data);
        if(response.status == 200){
            return response.data;
        }else{
            console.log("error");
        }
        
    } catch (error) {
        throw error
    }
})

export const deleteSingleProduct = createAsyncThunk("deleteproducts",async(data)=>{
    try {
        
        const response = await deleteproductAPI(data);
        if(response.status == 200){
            toast.success("fooditem is removed")
            return response.data
        }else{
            toast.error("not removed")
        }

    } catch (error) {
        throw error;
    }
})

export const createUser = createAsyncThunk("newuser",async(data)=>{
    try {
         const response = await adminuserAPI(data.data,data.config);
         if(response.status == 200){
            toast.success("user is registered successfully");
            return response.data
         }        
    } catch (error) {
        throw error
    }
})



export const adminSlice  = createSlice({
    name:"adminslice",
    initialState:{
        register:[],
        login:[],
        adminloggedin:[],
        adminlogout:[],
        createusers:[],
        addproduct:[],
        getallproducts:[],
         getsingleproduct:[],
        deletesingleproduct:[],
        error:null,
        loader:false
    },
    extraReducers:(builders)=>{
        builders.addCase(Register.pending,(state)=>{
            state.loader = true
        })
        .addCase(Register.fulfilled,(state,action)=>{
            state.register = [action.payload];
            state.loader = false
        })
        .addCase(Register.rejected,(state,action)=>{
            state.loader = false;
            state.error = [action.payload]
        })

        //login

        builders.addCase(adminLogin.pending,(state)=>{
            state.loader = true
        })
        .addCase(adminLogin.fulfilled,(state,action)=>{
            state.login = [action.payload];
            state.loader = false
        })
        .addCase(adminLogin.rejected,(state,action)=>{
            state.loader = false;
            state.error = [action.payload]
        })

        // adminverify

        .addCase(adminVerify.pending,(state)=>{
            state.loader = true
        })
        .addCase(adminVerify.fulfilled,(state,action)=>{
            state.loader = false;
            state.adminloggedin = [action.payload]
        })
         .addCase(adminVerify.rejected,(state,action)=>{
            state.loader = false;
            state.error = [action.payload]
         })
         
         // adminLogout

         .addCase(adminLogout.pending,(state,action)=>{
            state.loader = true
         })
         .addCase(adminLogout.fulfilled,(state,action)=>{
            state.loader = false
            state.adminlogout = [action.payload]
            state.adminloggedin = [];
         })
         .addCase(adminLogout.rejected,(state,action)=>{
            state.loader= false;
            state.error = [action.payload]
         })

         // addproduct

         
         .addCase(addProduct.pending,(state,action)=>{
            state.loader = true
         })
         .addCase(addProduct.fulfilled,(state,action)=>{
            state.loader = false
            state.addproduct = [action.payload]
            
         })
         .addCase(addProduct.rejected,(state,action)=>{
            state.loader= false;
            state.error = [action.payload]
         })
         

         // getallproducts

         .addCase(getallProducts.pending,(state,action)=>{
            state.loader = true
         })
         .addCase(getallProducts.fulfilled,(state,action)=>{
            state.loader = false
            state.getallproducts = [action.payload]
            
         })
         .addCase(getallProducts.rejected,(state,action)=>{
            state.loader= false;
            state.error = [action.payload]
         })

          // getsingleproduct

        .addCase(singleProduct.pending,(state,action)=>{
            state.loader = true
         })
         .addCase(singleProduct.fulfilled,(state,action)=>{
            state.loader = false
            state.getsingleproduct = [action.payload]
            
         })
         .addCase(singleProduct.rejected,(state,action)=>{
            state.loader= false;
            state.error = [action.payload]
         })

         

         // deletesingleproduct

         .addCase(deleteSingleProduct.pending,(state,action)=>{
            state.loader = true
         })
         .addCase(deleteSingleProduct.fulfilled,(state,action)=>{
            state.loader = false
            state.deletesingleproduct = [action.payload]
            
         })
         .addCase(deleteSingleProduct.rejected,(state,action)=>{
            state.loader= false;
            state.error = [action.payload]
         })
 
          
           // createusers


           .addCase(createUser.pending,(state,action)=>{
            state.loader = true
         })
         .addCase(createUser.fulfilled,(state,action)=>{
            state.loader = false
            state.createusers = [action.payload]
            
         })
         .addCase(createUser.rejected,(state,action)=>{
            state.loader= false;
            state.error = [action.payload]
         })




    }
})

export default adminSlice.reducer