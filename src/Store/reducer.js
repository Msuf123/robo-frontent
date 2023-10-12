import { createSlice } from "@reduxjs/toolkit";
import getData from "./async";
const sliceOne=createSlice({
    name:'data',
    initialState:{
        loading:true,
        data:null,
        error:false
    },reducers:{
        loading:(state,action)=>{
          state.loading=true
        },
        changeState:(state,action)=>{
            state.loading=false
         state.data=action.payload
        }
    }
    ,extraReducers:{
        [getData.pending]:(state,action)=>{
            state.loading=true;
            state.data=null;
            state.error=false;
        },
        [getData.fulfilled]:(state,action)=>{
            state.loading=false;
            
            state.data=action.payload;
            state.error=false;  
        },
        [getData.rejected]:(state,action)=>{
            state.loading=false;
            state.data=null;
            state.error=true;
        }
    }

})
export const {loading,changeState}=sliceOne.actions
export const  data=sliceOne.reducer