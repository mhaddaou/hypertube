import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Movies } from "../Hero/hero";
import axios from "axios";

export const fetchActionMovies = createAsyncThunk(
  "actionData/fetchActionMovies",
  async ({ page_size, page }: { page_size: number; page: number }) => {
    const res = await axios.get(
      `http://localhost:8000/movies/top/Action?page_size=${page_size}&page=${page}`
    );
    if(res.data)
        console.log('im inside fetchActionMovies');
    return res.data;
  }
);

export interface ActionMovies {
  data: Movies[];
  loading: boolean;
  error: string;
  page_size : number;
  page : number;
  selected : boolean;
}

const initialState: ActionMovies = {
  data: [],
  loading: false,
  error: "",
    page_size : 10,
    page: 1,
    selected: false,
};

export const ActionMoviesSlice = createSlice({
  name: "actionData",
  initialState,
  reducers: {
    incrementPages: (state) =>{
        state.page = state.page + 1;
    },
    decrementPages: (state) =>{
        state.page = state.page - 1;
    },
    isSelected : (state) =>{
        state.selected = !state.selected;
    }
  },
  extraReducers: (build) => {
    build
      .addCase(fetchActionMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchActionMovies.fulfilled, (state, action) => {
        state.data = action.payload.data.movies;
        console.log(state.data);
        state.loading = false;
      })
      .addCase(fetchActionMovies.rejected, (state, action) => {
        state.error = action.error.message || "error";
        state.loading = false;
      });
  },
});

export default ActionMoviesSlice.reducer;
export const { incrementPages, decrementPages, isSelected } = ActionMoviesSlice.actions;
