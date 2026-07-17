import { createSlice } from "@reduxjs/toolkit";

const savedShipping = JSON.parse(localStorage.getItem('shipping'))

const ShippingSlice = createSlice({
    name:'shipping',
    initialState:savedShipping?savedShipping:{
        email:'',
        mobile:'',
        firstName:'',
        lastName:'',
        country:'',
        city:'',
        address:'',
        address2:'',
        postalCode:'',
        deliveryInstructions:''
    },
    reducers:{
        setShippingField:(state,action)=>{
            const {field, value} = action.payload 
            state[field] = value   
        },
        setShippingAllData:(state,action)=>{
            Object.assign(state, action.payload)
            localStorage.setItem('shipping',JSON.stringify(action.payload))
        }
    }
})

export const {setShippingField, setShippingAllData} = ShippingSlice.actions
export default ShippingSlice.reducer