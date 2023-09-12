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

        },

        resetCart: (state) => {
            
        }
    }
})

export const {addToCart, deleteItem} = bazarSlice.actions;
export default bazarSlice.reducer;