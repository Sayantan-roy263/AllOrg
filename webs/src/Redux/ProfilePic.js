import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Helper/Helper";

const initialState = {
    status:" ",
    pictureItem: {},
    
}

export const profilepic = createAsyncThunk(
    "profile",

    async(formData) => {
        let res = await axiosInstance.get(`/user/profile-details`, formData);
        let resData = await res?.data;
        return resData;
    }
);

export const profileSlice = createSlice({
    name:"profileimg",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
    builder
    .addCase(profilepic.pending,(state, {payload})=>{
        state.status="loading";
    })
    .addCase(profilepic.fulfilled,(state, {payload})=>{
        state.status="success";
        state.pictureItem = payload;
    })
    .addCase(profilepic.rejected, (state,{payload})=>{
        state.status="failure"
    })
    }
}
    

)