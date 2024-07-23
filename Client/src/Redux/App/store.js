import {configureStore} from "@reduxjs/toolkit";
import adminslice from "../Slice/adminSlice/adminslice";
import userSlice from "../Slice/userSlice/userSlice";

export const store = configureStore({
    reducer:{
     Admin:adminslice,
     User:userSlice
    }
})
