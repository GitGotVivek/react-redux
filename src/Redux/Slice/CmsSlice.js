import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helper";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const initialState = {
    status: "",
    Data: [{}],
    Edit: [{}],
    redirectToList: null,
    totalpage:""
};

// Create Product
export const createProduct = createAsyncThunk(
    "Add New Product",
    async (productData) => {
        let res = await axiosInstance.post('/product/create', productData)
        let resPonse = res?.data
        return resPonse;
    }
);

// Get Product
export const getAllProduct = createAsyncThunk(
    "Get All Product",
    async (formdata) => {
        let res = await axiosInstance.post('/product/list',formdata)
        let resPonse = res?.data
        return resPonse;
    }
);

// Delete Product 
export const deleteProduct = createAsyncThunk(
    "Delete Product",
    async (formdata) => {
        let res = await axiosInstance.post(`/product/remove`, formdata)
        let resPonse = res?.data
        return resPonse;
    }
);

// Edit Product
export const editProduct = createAsyncThunk(
    "Edit Product",
    async (id) => {
        let res = await axiosInstance.get(`/product/detail/${id}`);
        let editData = res?.data;
        return editData;
    }
);

// update student data
export const updateProduct = createAsyncThunk(
    "Update-Student",
    async (updateData) => {
        let res = await axiosInstance.post(`/product/update`, updateData);
        let resData = res?.data;
        return resData;
    }
);



export const cmsSlice = createSlice({
    name: "Product",
    initialState,
    reducers: {

        RedirectToList: (state, { payload }) => {

            state.redirectToList = payload

        },

        removeTitle: (state, { payload }) => {

            localStorage.removeItem("title")

        },

    },

    extraReducers: (builder) => {
        builder

            //Create Product
            .addCase(createProduct.pending, (state, action) => {
                state.status = "Loading..."
            })
            .addCase(createProduct.fulfilled, (state, { payload }) => {
                if(payload.status === 200){
                    state.status = "product created successfully..."
                    localStorage.setItem("title", payload.data.title)
                    state.redirectToList = '/getallproduct'
                    toast(payload?.message)
                }
            })
            .addCase(createProduct.rejected, (state, action) => {
                state.status = "Loading..."
            })

            // Get All Product
            .addCase(getAllProduct.pending, (state, action) => {
                state.status = "Loading.. ";
            })
            .addCase(getAllProduct.fulfilled, (state, { payload }) => {
                state.status = "fetching data successfully... ";
                state.Data = payload?.data
                state.totalpage =payload.totalPages
            })
            .addCase(getAllProduct.rejected, (state, action) => {
                state.status = "Loading...";
            })

            // Edit Product
            .addCase(editProduct.pending, (state, action) => {
                state.status = "fetching student data... ";
            })
            .addCase(editProduct.fulfilled, (state, { payload }) => {
                state.status = "student edited successfully... ";
                state.Edit = payload.data
            })
            .addCase(editProduct.rejected, (state, action) => {
                state.status = "idle...";
            })

             // Update Product
             .addCase(updateProduct.pending, (state, action) => {
                state.status = "updating student data..!";
            })
            .addCase(updateProduct.fulfilled, (state, { payload }) => {
                if(payload.status === 200){
                    state.status = "student update successfully..!";
                    toast(payload?.message)
                }
            })
            .addCase(updateProduct.rejected, (state, action) => {
                state.status = "idle..."
            })

            // Delete Product
            .addCase(deleteProduct.pending, (state, action) => {
                state.status = "Loading.. ";
            })
            .addCase(deleteProduct.fulfilled, (state, { payload }) => {
                state.status = "data deleted successfully... ";
            })
            .addCase(deleteProduct.rejected, (state, action) => {
                state.status = "Loading...";
            })
    }
})

export const { RedirectToList, removeTitle } = cmsSlice.actions