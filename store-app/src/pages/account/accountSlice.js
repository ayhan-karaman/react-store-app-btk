import { createSlice } from "@reduxjs/toolkit"
import { router } from "../../App"

/* eslint-disable no-unused-vars */
const initialState = {
     user:null
}

export const accountSlice = createSlice({
     name:'account',
     initialState,
     reducers:{
         setUser:(state, action) => {
             localStorage.setItem('user', JSON.stringify(action.payload))
             state.user = action.payload
             router.navigate('/')
         },
         logout:(state) => {
              localStorage.removeItem('user')
              state.user = null
              router.navigate('/login')
         }
     }
})

export const { setUser, logout } = accountSlice.actions