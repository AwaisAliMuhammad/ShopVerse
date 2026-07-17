import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../Features/CartSlice";
import ShippingReducer from "../Features/ShippingSlice";
import OrderReducer from "../Features/OrderSlice";
import WishlistReducer from "../Features/WishlistSlice";
import AuthorizationReducer from "../Features/AuthorizationSlice";
import RegiseredUserReducer from "../Features/RegiseredUserSlice";

const store = configureStore({
    reducer:{
        cart:CartReducer,
        shipping:ShippingReducer,
        order:OrderReducer,
        wishlist:WishlistReducer,
        authorization:AuthorizationReducer,
        registered:RegiseredUserReducer
    }
})

store.subscribe(()=>{
    const state = store.getState()
    localStorage.setItem('cart', JSON.stringify(state.cart.items))
    localStorage.setItem('wishlist', JSON.stringify(state.wishlist.items))
})

export default store