import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './CounterSrore'
import { authReducer } from './AuthStore'
import CartSlice from './CartStore'
import UiSlice from './UISlice'


const store = configureStore(
{reducer : {counter: counterReducer, auth: authReducer, cart: CartSlice.reducer, ui:UiSlice.reducer },}
)

export default store
