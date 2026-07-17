import { createSlice } from "@reduxjs/toolkit";

const savedUsers = JSON.parse(localStorage.getItem('registerUsers')) || []

const RegiseredUserSlice = createSlice({
    name:'registered',
    initialState:{
       users:savedUsers    
    },
    reducers:{
        registerUser:(state,action)=>{
           if(state.users.find((user)=>user.email === action.payload.email)){
                return toast.error('Email already exists!')
           }
           state.users.push(action.payload)
           localStorage.setItem('registerUsers',JSON.stringify(state.users))           
        },
        changePassword:(state,action)=>{
            const user = state.users.find(user=>user.email === action.payload.email)
            if(user){
                user.password = action.payload.newPassword
                localStorage.setItem('registerUsers',JSON.stringify(state.users))
            }
        }
    }
})

export const {registerUser, changePassword} = RegiseredUserSlice.actions
export default RegiseredUserSlice.reducer