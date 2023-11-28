import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axiosInstance from "../../Helper";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const baseUrl = "https://dummyjson.com/comments"

const initialState = {
    status: "",
}

// Write Comment
export const writeComment = createAsyncThunk(
    "Add Comment",
    async (commentData) => {
        let res = await baseUrl.post('/add', commentData)
        let resPonse = res?.data
        return resPonse;
    }
);


export const Comment = createSlice({
    name:"Write Comment",
    initialState,
    reducers:{

    },

    extraReducers:(builder)=>{
        builder

        //  Write Comment
        .addCase(writeComment.pending, (state, action) => {
            state.status = "Loading Data...";
        })
        .addCase(writeComment.fulfilled, (state, { payload }) => {
            state.status = "Comment Created Successfully"; 
        })
        .addCase(writeComment.rejected, (state, action) => {
            state.status = " Can't Fetch Data...";
        })
    }
});

export const {} = Comment.actions
