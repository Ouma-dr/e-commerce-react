import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cart: [],
    quantity: 0, 
    total:0,
}
const cartSlice = createSlice(
    {
        name: "cart",
        initialState,
        reducers: {
            AddCart: (state, action) =>{
                state.quantity++;
                const cartItem = state.cart.find((cartItem) => cartItem.id === action.payload.id);
                cartItem ? (cartItem.quantity = cartItem.quantity + 1) : state.cart.push({...action.payload, quantity : 1})
            }, 
            Increase: (state, action) =>{
                state.quantity++;
                const itemIndex = state.cart.findIndex(
                    (cartItem)=> (cartItem.id === action.payload.id)
                );
                state.cart[itemIndex].quantity += 1;
                
            },
            Decrease: (state, action) =>{
                const itemIndex = state.cart.findIndex(
                    (cartItem)=> (cartItem.id === action.payload.id)
                );
                state.cart[itemIndex].quantity > 0 && state.cart[itemIndex].quantity-- && state.quantity++;
            },
            Remove: (state, action)=>{ 
                state.cart = state.cart.filter(item => item.id !== action.payload.id);
            },

            
        },
 
    }
)

export const { AddCart, Increase, Decrease, Remove} = cartSlice.actions;
export default cartSlice.reducer;