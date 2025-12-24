import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name:"auth",
    initialState:{
        isAuth:false,
        user:null,
        token:null
    },
    reducers:{
        loginSuccess:(state,action)=>{
            state.isAuth =true;
            state.user =action.payload.user;
            state.token =action.payload.token

        },
        logout:(state)=>{
            state.isAuth =false;
            state.user = null;
            state.token = null;
        }
    }
});
export const {loginSuccess,logout} = authSlice.actions;
export default authSlice.reducer