import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cart: [],
    quantity: 0, 
    total: 0,
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
                let total = 0;
                total = state.cart[itemIndex].quantity * state.cart.price;
            },
            Decrease: (state, action) =>{
                const itemIndex = state.cart.findIndex(
                    (cartItem)=> (cartItem.id === action.payload.id)
                );
                state.cart[itemIndex].quantity > 0 && state.cart[itemIndex].quantity-- && state.quantity++;
            },
            Remove: (state, action)=>{ 
              state.cart.map(cartItem => {
                if(cartItem.id === action.payload.id){
                    state.cart = state.cart.filter(item => item.id !== cartItem.id);
                    state.quantity = state.quantity - cartItem.quantity;
                }
                
              })
            },
        },
 
    }
)

export const { AddCart, Increase, Decrease, Remove} = cartSlice.actions;
export default cartSlice.reducer;