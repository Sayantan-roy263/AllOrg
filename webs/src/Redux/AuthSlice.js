import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../Helper/Helper';

const initialState={
    status:"",
    isRegistration:false,
    redirectLog:null,
    isLoggedIn: false,
    redirectHome: null,
};

export const register = createAsyncThunk(
    'signup',

    async(formData) => {
        let res = await axiosInstance.post("/user/signup", formData);
        let resData=await res?.data;

        // for Testing
        console.log(resData)
        return resData;
    }

);
export const logIn = createAsyncThunk(
    'signin',
    async(formData)=>{
        let res = await axiosInstance.post("/user/signin", formData);
        let resData=await res?.data;
        return resData;
    }
);
export const authenticationSlice = createSlice({
    name:"authentication",
    initialState,
    reducers:{
        reset_redirectHome:(state, {payload})=>{
            state.redirectHome=payload;
        },
        check_token:(state, {payload})=>{
            let token=localStorage.getItem("token");
            if(token!==null && token!==undefined){
                state.isLoggedIn=true;
            }
        },
        handleLoggedout:(state, {payload})=>{
            localStorage.removeItem("token");
            state.isLoggedIn=false;
        },
        reset_redirectLog:(state,{payload})=>{
            state.redirectLog=payload;
        },
        check_myname:(state, {payload})=>{
            let first_name=localStorage.getItem("first_name");
            if(first_name!==null && first_name!==undefined){
                state.isRegistration=true;
            }
        },
        handleredirect:(state, {payload})=>{
            localStorage.removeItem("first_name");
            state.isRegistration=false;
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(register.pending, (state,{payload})=>{
            state.status="loading";
        })
        .addCase(register.fulfilled, (state,{payload})=>{
            state.status="success";
            localStorage.setItem("first_name", payload?.data.first_name)
            state.isRegistration=true;
            state.redirectLog='/login'
        })
        .addCase(register.rejected, (state, {payload})=>{
            state.status="failure"
        })
        .addCase(logIn.pending, (state, {payload})=>{
            state.status="loading";
        })
        .addCase(logIn.fulfilled, (state, {payload})=>{
            console.log(payload)
            if(payload.status===200){
            state.status="success";
            localStorage?.setItem("token",payload?.token)
            localStorage?.setItem("first_name", payload?.data.first_name)
           // localStorage?.setItem("email",payload?.data.email)
            state.redirectHome='/'
            state.isLoggedIn=true;
            }else{
                state.redirectHome="/login"
                state.isLoggedIn=false
            }
        })
        .addCase(logIn.rejected, (state,{payload})=>{
            state.status="failure";
        })
    }

})
export const {
    reset_redirectHome,
    check_token,
    handleLoggedout,
    reset_redirectLog,
    check_myname,
    handleredirect,
}=authenticationSlice.actions;