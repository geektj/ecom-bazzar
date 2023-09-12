import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    productData: [], // save all of the products we want
    userInfo: null, 
};

export const bazarSlice = createSlice({
    name:'bazar',
    initialState,
    reducers: {
        addToCart:(state,action) => {
            // keep the data when click various product add to cart
            const item = state.productData.find((item) => item._id === action.payload._id);
            if(item){
                item.quanity += action.payload.quanity;
            }else{
                state.productData.push(action.payload);
            }
            // state.productData = action.payload
        },

        deleteItem: (state,action) => {
            state.productData = state.productData.filter(
                (item) => item._id !== action.payload
            )
        },

        resetCart: (state) => {
            state.productData = [];
        },

        incrementQuantity: (state,action) => {
            const item = state.productData.find(
                (item) => item._id === action.payload._id
            );
            if(item){
                item.quanity++;
            }
        },

        decrementQuantity: (state,action) => {
            const item = state.productData.find(
                (item) => item._id === action.payload._id
            )
            if(item.quanity === 1){
                item.quanity = 1;
            }else{
                item.quanity--;
            }
        }
    }
})

export const {addToCart, deleteItem, resetCart, incrementQuantity, decrementQuantity} = bazarSlice.actions;
export default bazarSlice.reducer;