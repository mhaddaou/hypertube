import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface SearchParams {
  query_term: string;
  quality: string;
  source: string;
  sortBy: string;
  orderBy: string;
}

export const fetchSearchedMovies = createAsyncThunk(
  "data/fetchSearchedMovies",
  async (searchParams: SearchParams) => {
    const response = await axios.post(
      "http://127.0.0.1:8000/movies/search",
      searchParams,
    );
    return response.data;
  },
);

const initialState = {
  items: [],
  status: "idle" as "idle" | "loading" | "succeeded" | "failed",
  error: null as string | null,
};

const SearchedMoviesSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchedMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSearchedMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload.data.movies;
      })
      .addCase(fetchSearchedMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Unknown error";
      });
  },
});

export default SearchedMoviesSlice.reducer;
