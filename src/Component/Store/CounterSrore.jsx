import { createSlice } from "@reduxjs/toolkit"
const intialCounterSlice = {counter:0, show : true}

const  counterSlice = createSlice({
    name:"counter",
    initialState: intialCounterSlice,
    reducers:{
        incriment(state){
            state.counter = state.counter + 1
        },
        decriment(state){
            state.counter = state.counter - 1
        },
        toggle(state){
            state.show = !state.show
        },
        incrimentBy6(state,actions){
            state.counter = state.counter+ actions.payload
        }
    }
})

export const counterAction = counterSlice.actions;
export const counterReducer = counterSlice.reducer
export default counterSlice;
