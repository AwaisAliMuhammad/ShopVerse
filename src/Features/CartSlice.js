import { createSlice } from "@reduxjs/toolkit";

const savedItems = JSON.parse(localStorage.getItem('cart')) || []

const CartSlice = createSlice({
    name:'cart',
    initialState:{
        items:savedItems        
    },
    reducers:{
        addToCart: (state, action) => {
            const existingProduct = state.items.find(
                (item) => item.id === action.payload.id
            )
        
            const quantity = action.payload.quantity || 1
        
            if (existingProduct) {
                existingProduct.quantity += quantity
            } else {
                state.items.push({
                    ...action.payload,
                    quantity,
                })
            }
        },
        removeFromCart:(state,action)=>{
            state.items = state.items.filter((item)=>item.id !== action.payload)
        },
        increaseQuantity:(state,action)=>{
            const item = state.items.find((product)=>product.id === action.payload)

            if(item){
                item.quantity += 1 
            }
        },
        decreaseQuantity:(state,action)=>{
            const item = state.items.find((product)=>product.id === action.payload)

            if(item){
                if(item.quantity>1){
                    item.quantity -= 1
                }
                else{
                    state.items = state.items.filter((product)=>product.id !== action.payload)
                }
            }
        },
        clearCart:(state)=>{
            state.items = []
        }
    }
})
export const {addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart} = CartSlice.actions
export default CartSlice.reducer