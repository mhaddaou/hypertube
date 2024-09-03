import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { error } from "console";


export interface Movies{
    genres : string[],
    id : number,
    language : string,
    large_cover_image : string,
    medium_cover_image : string,
    rating : number,
    small_cover_image : string,
    summary : string,
    synopsis : string,
    title : string,
    title_english : string,
    title_long : string,
    watched : boolean,
    year : number,
}

interface Data {
    limit : number,
    movies :  Movies[],
}

interface TypeMovies{
    data : Data,
    loading : boolean,
    error : string
}


const initialState : TypeMovies = {
    data : {limit:0,movies: []},
    loading : false,
    error: ''
}


export const fetchHeroData = createAsyncThunk('heroData/fetchHeroData1', async () => {
    const res = await axios.get('http://127.0.0.1:8000/movies/top');
    console.log(res.data)
    return res.data;
})


const heroDataSlice1 = createSlice({
    name : 'heroData',
    initialState,
    reducers:{
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchHeroData.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchHeroData.fulfilled, (state, action) => {
            const {limit, movies} = action.payload.data;
            state.data = action.payload.data,
            state.loading = false;
        })
        .addCase(fetchHeroData.rejected, (state, action) => {
            state.error = action.error.message || 'error';
            state.loading = false;
        })
    }
})

export default heroDataSlice1.reducer