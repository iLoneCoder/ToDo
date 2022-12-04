import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: null,
    isloading: false,
    success: false,
    error: false,
    message: ""
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

    }
})

export default authSlice.reducer