/* eslint-disable no-undef */
import { router } from "../../App"
import requests from "../../api/apiClient"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

/* eslint-disable no-unused-vars */
const initialState = {
     user: null,
     status: 'idle'
}

export const registerUser = createAsyncThunk(
     'account/register',
     async (data, thunkApi) => {
          try {
               await requests.account.register(data);
               router.navigate('/login')
          } catch (error) {
               console.log(error);
               return thunkApi.rejectWithValue({ message });
          }
     }
)

export const loginUser = createAsyncThunk(
     'account/login',
     async (data, thunkApi) => {
          try {
               const user = await requests.account.login(data);
               localStorage.setItem("user", JSON.stringify(user));
               router.navigate('/')
               return user
          } catch (error) {

               return thunkApi.rejectWithValue({ message });
          }
     }
)

export const getUser = createAsyncThunk(
     'account/getUser',
     async (_, thunkApi) => {
          thunkApi.dispatch(setUser(JSON.parse(localStorage.getItem("user"))))
          try {
               const user = await requests.account.getUser();
               localStorage.setItem("user", JSON.stringify(user));
               return user
          } catch (error) {

               return thunkApi.rejectWithValue({ message });
          }
     },
     {
          condition: () => {
               if (!localStorage.getItem("user")) return false;
          }
     }
)

export const accountSlice = createSlice({
     name: 'account',
     initialState,
     reducers: {
          setUser: (state, action) => {
               localStorage.setItem('user', JSON.stringify(action.payload))
               state.user = action.payload
               router.navigate('/')
          },
          logout: (state) => {
               localStorage.removeItem('user')
               state.user = null
               router.navigate('/login')
          }
     },
     extraReducers: (builder) => {
          builder.addCase(registerUser.pending, (state) => {
               state.status = "pending"
          })
          builder.addCase(registerUser.fulfilled, (state, action) => {
               state.status = "idle"
          })
          builder.addCase(registerUser.rejected, (state) => {
               state.status = "idle"
          })



          builder.addCase(loginUser.pending, (state) => {
               state.status = "pending"
          })
          builder.addCase(loginUser.fulfilled, (state, action) => {
               state.user = action.payload
               state.status = "idle"
          })
          builder.addCase(loginUser.rejected, (state) => {
               state.status = "idle"
          })


          builder.addCase(getUser.fulfilled, (state, action) => {
               state.user = action.payload
          })
          builder.addCase(getUser.rejected, (state) => {
               state.user = null;
               localStorage.removeItem('user')
               router.navigate('/login')
          })
     }
})

export const { setUser, logout } = accountSlice.actions