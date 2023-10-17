import { createSlice } from "@reduxjs/toolkit";
import { getLanguages,getAnswer } from "./actions";


const initialState = {
    languages: [],
    answer:"",
    isLoading: true,
    isError: false,
}

const translateSlice = createSlice({
    name: "translate",
    initialState,
    extraReducers: {
        [getLanguages.pending]:(state)=>{
            state.isLoading = true;
        },
        [getLanguages.fulfilled]:(state,action)=>{
            state.isLoading = false;
            state.languages = action.payload;
        },
        [getLanguages.rejected]:(state)=>{
            state.isError="error occurred";
        },

        [getAnswer.pending]:(state)=>{
            state.isLoading = true;
        },
        [getAnswer.fulfilled]:(state,action)=>{
            state.isLoading = false;
            state.isError =false;
            state.answer=action.payload;
        },
        [getAnswer.rejected]:(state)=>{
            state.isLoading = false;
            state.isError ="error occured";
          
        },
          
    },
    reducers:{
        clearAnswer:(state)=>{
            state.answer =''
        }
    }
});

export const {clearAnswer}=translateSlice.actions;

export default translateSlice.reducer;



