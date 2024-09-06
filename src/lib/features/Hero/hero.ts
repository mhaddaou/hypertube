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
    mv: Movies[]
    moviesCover : Movies[],
    index : number,
}


const initialState : TypeMovies = {
    data : {limit:0,movies: []},
    mv : [],
    moviesCover : [],
    loading : false,
    error: '',
    index : 0,
}


export const fetchHeroData = createAsyncThunk('heroData/fetchHeroData1', async () => {
    const res = await axios.get('http://127.0.0.1:8000/movies/top');
    return res.data;
})


const heroDataSlice1 = createSlice({
    name : 'heroData',
    initialState,
    reducers:{
        incrementIndex : (state) =>{
            state.index = state.index + 1;
            console.log('im here and the index is ', state.index);
        },
        decrementIndex : (state) =>{
            state.index = state.index - 1;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchHeroData.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchHeroData.fulfilled, (state, action) => {
            const {limit, movies} = action.payload.data;
            state.data.movies = action.payload.data.movies.slice(0,10),
            state.mv = action.payload.data.movies.slice(10,15);
            state.moviesCover  = action.payload.data.movies.slice(15,28);
            const vr = state.mv[0];
            state.mv[0] = state.mv[2];
            state.mv[2] = vr;
            state.loading = false;
        })
        .addCase(fetchHeroData.rejected, (state, action) => {
            state.error = action.error.message || 'error';
            state.loading = false;
        })
    }
})

export default heroDataSlice1.reducer
export const { incrementIndex, decrementIndex } = heroDataSlice1.actions