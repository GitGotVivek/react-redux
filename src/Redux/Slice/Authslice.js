import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helper";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

    const initialState = {
        status: "",
        redirect: null,
        redirectToSignup: null,
        Data: [{}],
        toggle: false
    }

export const userSignup = createAsyncThunk(
    "SignUp",
    async (signUpData) => {
        let res = await axiosInstance.post(`/user/signup`, signUpData)
        let resPonse = res?.data;
        return resPonse;
    }
);

export const userSignin = createAsyncThunk(
    "SignIn",
    async (signInData) => {
        let res = await axiosInstance.post(`/user/signin`, signInData)
        let resPonse = res?.data;
        return resPonse;
    }
);

export const userProfile = createAsyncThunk(
    "User Profile",
    async () => {
        let res = await axiosInstance.get(`/user/profile-details`)
        let resPonse = res?.data;
        return resPonse;
    }
);


export const AuthSlice = createSlice({
    name: "User Sign Up",
    initialState,
    reducers: {

        Logout: (state, { payload }) => {
            toast("Logout Successfully")
            localStorage.removeItem("token")
            localStorage.removeItem("Name")
            state.toggle = false
        },

        Signout: (state, { payload }) => {

            localStorage.removeItem("Name")

        },

        Redirect_To: (state, { payload }) => {

            state.redirect = payload

        },

        RedirectToSignup: (state, { payload }) => {

            state.redirectToSignup = payload

        },

        Check_Token: (state, { payload }) => {

            let token = localStorage.getItem("token")
            if (token !== null && token !== undefined) {
                state.toggle = true
            }

        },

    },

    extraReducers: (builder) => {
        builder

            //  User SignUp
            .addCase(userSignup.pending, (state, action) => {
                state.status = "Loading Data...";
            })
            .addCase(userSignup.fulfilled, (state, { payload }) => {
                state.status = "Data Fetch Successfully";
                localStorage.setItem("Name", payload.data.first_name)
                state.redirectToSignup = '/login'
            })
            .addCase(userSignup.rejected, (state, action) => {
                state.status = " Can't Fetch Data...";
            })


            //  User SignIn
            .addCase(userSignin.pending, (state, action) => {
                state.status = "Loading Data...";
            })
            .addCase(userSignin.fulfilled, (state, { payload }) => {
 
                if (payload.status === 200) {
                    state.status = "Data Fetch Successfully";
                    localStorage.setItem("token", payload.token)
                    localStorage.setItem("Name", payload.data.first_name)
                    state.redirect = "/"
                    state.toggle = true
                    toast(payload?.message)
                }
            })
            .addCase(userSignin.rejected, (state, action) => {
                state.status = " Can't Fetch Data...";
            })


            //  User Profile Data
            .addCase(userProfile.pending, (state, action) => {
                state.status = "Loading Data...";
            })
            .addCase(userProfile.fulfilled, (state, { payload }) => {
                state.status = "Data Fetch Successfully";
                state.Data = payload?.data
                    
            })
            .addCase(userProfile.rejected, (state, action) => {
                state.status = " Can't Fetch Data...";
            })

    }

});

export const { Logout, Signout, Redirect_To, RedirectToSignup, Check_Token } = AuthSlice.actions