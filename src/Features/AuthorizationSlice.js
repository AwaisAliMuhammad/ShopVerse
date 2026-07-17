import { createSlice } from "@reduxjs/toolkit";

const savedUser = JSON.parse(localStorage.getItem('authorization')) || null

const AuthorizationSlice = createSlice({
    name:'authorization',
    initialState:{
        isLoggedIn: !(!savedUser),
        user:savedUser
    },
    reducers:{
        loginUser:(state,action)=>{
            state.isLoggedIn = true
            state.user = action.payload
            localStorage.setItem('authorization',JSON.stringify(action.payload))
        },
        logoutUser:(state)=>{
            state.isLoggedIn = false
            state.user = null
            localStorage.removeItem('authorization')
        },
        updateProfilePhoto:(state,action)=>{
            state.user.profilePhoto = action.payload
            localStorage.setItem('authorization',JSON.stringify(state.user))
        }
    }
})

export const {loginUser, logoutUser, updateProfilePhoto} = AuthorizationSlice.actions
export default AuthorizationSlice.reducer