import { createSlice } from "@reduxjs/toolkit"

// ************************ auth slice _************************
const authIntialState = {isLogedIn:false}

const AuthSlice = createSlice({
    name:"Auth",
    initialState : authIntialState,
    reducers :{
        login(state){
            state.isLogedIn = true
        },
        logOut(state){
            state.isLogedIn = false
        }
    }
})

export const authAction = AuthSlice.actions
export  const authReducer = AuthSlice.reducer
export default AuthSlice