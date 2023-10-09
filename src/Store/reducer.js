import { createSlice } from "@reduxjs/toolkit";

const sliceOne=createSlice({
    name:'data',
    initialState:{
        loading:true,
        data:null,
        error:false
    }

})
export const  data=sliceOne.reducer