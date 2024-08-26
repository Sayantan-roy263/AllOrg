import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Helper/Helper";

const initialState = {
    status:"",
    AllProduct:[],
    list:[{}],
    totalpage:"",
    // currentPage:1,
    // perPages:10,
    isSubmit:null,
    redirectPro: null,
    editProduct:[{}],
    
};
export const create = createAsyncThunk(
    'create',

    async(formData) => {
        let res = await axiosInstance.post('/product/create', formData);
        let resData = res?.data;
        return resData;

    }
);
export const showDetails = createAsyncThunk(
    'list',

    async(formData)=>{
        let response = await axiosInstance.post('/product/list', formData);
        let res = response?.data;
        return res;
    }
);
export const editDetails = createAsyncThunk(
    'edit',

    async(id)=>{
        let respond = await axiosInstance.get(`/product/detail/${id}`, id);
        let resto = respond?.data;
        return resto;
    }
);
export const updateDetails = createAsyncThunk(
    'update',

    async(formData) =>{
        let rest = await axiosInstance.post('/product/update', formData);
        let restup = rest?.data;
        return restup;
    }
)

export const deleteDetails = createAsyncThunk(
    'delete',

    async(id) =>{
        let del = await axiosInstance.post('/product/remove/', id);
        let deluser = await del?.data;
        return deluser;
    }
)


export const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
        
    },
    extraReducers:(builder)=>{
        builder
        .addCase(create.pending, (state, {payload})=>{
            state.status="loading"
        })
        .addCase(create.fulfilled, (state, {payload})=>{
            state.status="success"

        })
        .addCase(create.rejected, (state, {payload})=>{
            state.status="failure";
        })
        .addCase(showDetails.pending, (state, {payload})=>{
            state.status="loading";
        })
        .addCase(showDetails.fulfilled, (state, {payload})=>{
            state.status="success";
            state.list=payload?.data;
            
            state.totalpage=payload?.totalPages;
        })
        .addCase(showDetails.rejected, (state,{payload})=>{
            state.status="failure";
        })
        .addCase(editDetails.pending, (state, {payload})=>{
            state.status="loading";
        })
        .addCase(editDetails.fulfilled, (state, {payload})=>{
            state.status="success";
            state.editProduct=payload?.data;
        })
        .addCase(editDetails.rejected, (state, {payload})=>{
            state.status="failure";
        })
        .addCase(updateDetails.pending, (state, {payload})=>{
            state.status="loading"
        })
        .addCase(updateDetails.fulfilled, (state,{payload})=>{
            state.status="success"
        })
        .addCase(updateDetails.rejected, (state, {payload})=>{
            state.status="failure"
        })
        .addCase(deleteDetails.pending, (state, {payload})=>{
            state.status="loading"
        })
        .addCase(deleteDetails.fulfilled, (state, {payload})=>{
            state.status="success"
        })
        .addCase(deleteDetails.rejected, (state, {payload})=>{
            state.status="failure"
        })
    }

});

