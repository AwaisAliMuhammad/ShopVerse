import { createSlice } from "@reduxjs/toolkit";

const savedWishlistItems = JSON.parse(localStorage.getItem('wishlist')) || []

const WishlistSlice = createSlice({
    name:'wishlist',
    initialState:{
        items:savedWishlistItems
    },
    reducers:{
        addToWishlist:(state,action)=>{
            if(state.items.find((item)=>item.id===action.payload.id)){
                return
            }
            else{
                state.items.push(action.payload)
            }
        },
        removeFromWishlist:(state,action)=>{
           state.items = state.items.filter((item)=>item.id !== action.payload)
        }
    }
})

export const {addToWishlist, removeFromWishlist} = WishlistSlice.actions
export default WishlistSlice.reducer