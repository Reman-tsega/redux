import React from 'react'
import { createSlice } from '@reduxjs/toolkit'



    const intialCartItems ={ items:[], totalAmount:0}

    const CartSlice = createSlice({
        name:"CartSlice",
        initialState:intialCartItems,
        reducers:{
            addItem(state,action){
                const newItem = action.payload;
                console.log(state.items,"list")
                const existingItem = state.items.find(item=> item.id === newItem.id)
                console.log(existingItem)
                state.totalAmount++
                if(!existingItem){
                    state.items.push({
                        id:newItem.id,
                        title:newItem.title,
                        price: newItem.price,
                        quantity: 1,
                        totalPrice:newItem.price,
                        description : newItem.desc
                    });
                }else{
                    existingItem.quantity= existingItem.quantity + 1;
                    existingItem.totalPrice = existingItem.totalPrice +  newItem.price
                }

            },

            removeItem(state , action){
                const id = action.payload;
                const existingItemv = state.items.find(item => item.id === id)
                state.totalAmount = state.totalAmount - 1;
                console.log(existingItemv)

                if(existingItemv.quantity === 1){
                    state.items = state.items.filter(item => item.id !== id)
                }else{
                    existingItemv.quantity--;
                    // existingItemv.totalPrice = existingItemv.totalPrice - existingItemv.price;
                }

            }
        }
    })

export const CartActions = CartSlice.actions
export default CartSlice