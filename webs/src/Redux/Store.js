import { configureStore } from "@reduxjs/toolkit";
import { authenticationSlice } from "./AuthSlice";
import { productSlice } from "./CrudSlice";
import { profileSlice } from "./ProfilePic";

export const store=configureStore({
    reducer:{
        content:authenticationSlice.reducer,
        contkey:productSlice.reducer,
        contpic:profileSlice.reducer,
    }
})