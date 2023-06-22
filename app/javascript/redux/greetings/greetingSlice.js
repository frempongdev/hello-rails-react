import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const url = "http://127.0.0.1:3000/greetings.json";

const initialState = {
    greetings: '',
}

export const getGreetings = createAsyncThunk('greetings/getGreetings', async () =>{
    const response = await fetch(url);
    console.log(response)
    const data = await response.json();
    const phrase = await data.phrase
    console.log(phrase)
    return phrase;
})

const greetingSlice = createSlice({
    name: 'greetings',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(getGreetings.fulfilled, (state, action) => {
        console.log(action.payload); // Log the action.payload
        return {
          ...state,
          greetings: action.payload,
        };
      });
    },
  });
  

export default greetingSlice.reducer;