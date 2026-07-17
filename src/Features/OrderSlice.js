import { createSlice } from "@reduxjs/toolkit";

const savedOrders = JSON.parse(localStorage.getItem('orders')) || []

const OrderSlice = createSlice({
    name:'order',
    initialState:{
        orderPlaced: false,
        orders: savedOrders
    },
    reducers:{
        placeOrder:(state,action)=>{
            state.orderPlaced = true
            state.orders.push(action.payload)
            localStorage.setItem('orders',JSON.stringify(state.orders))
        },
        resetOrder:(state)=>{
            state.orderPlaced = false
        }
    }
})

export const {placeOrder, resetOrder} = OrderSlice.actions
export default OrderSlice.reducer