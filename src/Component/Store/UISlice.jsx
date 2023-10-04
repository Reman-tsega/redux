import { createSlice } from "@reduxjs/toolkit";

const intialUiState = {cartIsVisible:false}
const UiSlice = createSlice({
    name:'UiSlice',
    initialState:intialUiState,
    reducers:{
        toggle(state){
            console.log('toggle')
            state.cartIsVisible = !state.cartIsVisible
        }
    }


})
export const UiAction = UiSlice.actions
export default UiSlice