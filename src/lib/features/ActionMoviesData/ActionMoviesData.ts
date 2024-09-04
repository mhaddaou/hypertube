import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Movies } from "../Hero/hero";
import axios from "axios";


export const fetchActionMovies = createAsyncThunk('actionData/fetchActionMovies', async () => {
    const res = await axios.get("http://localhost:8000/movies/top/Action?page_size=5&page=1");
    return res.data;
})


interface ActionMovies{
    data : Movies[],
    loading : boolean,
    error : string
    
}


const initialState : ActionMovies = {
    data: [],
    loading : false,
    error: '',
};



export const ActionMoviesSlice = createSlice({
    name : "actionData",
    initialState,
    reducers:{},
    extraReducers : (build) =>{
        build.addCase(fetchActionMovies.pending, (state) =>{
            state.loading = true;
        })
        .addCase(fetchActionMovies.fulfilled, (state, action) =>{
            state.data = action.payload.data.movies;
            console.log(state.data);
            state.loading = false;
        })
        .addCase(fetchActionMovies.rejected, (state, action) =>{
            state.error = action.error.message || 'error';
            state.loading = false;
        })
    }
})


export default ActionMoviesSlice.reducer;