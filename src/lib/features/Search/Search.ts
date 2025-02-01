import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/lib/axios";

interface SearchParams {
  query_term: string;
  quality: string;
  source: string;
  sortBy: string;
  orderBy: string;
  page: number;
}

export interface Movie {
  id: number;
  title: string;
  year: number;
  summary: string;
  genres: string[];
  rating: number;
  large_cover_image: string;
}

export const fetchSearchedMovies = createAsyncThunk(
  "search/fetchSearchedMovies",
  async (searchParams: SearchParams) => {
    const response = await axiosInstance.post(
      `/movies/search?page_size=10&page=${searchParams.page}`,
      searchParams,
    );
    return response.data;
  },
);

const initialState = {
  items: [] as Movie[],
  status: "idle" as "idle" | "loading" | "succeeded" | "failed",
  error: null as string | null,
  hasMore: true,
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
        const newMovies = action.payload.data.movies;
        if (!newMovies || newMovies.length === 0) {
          state.hasMore = false;
          state.items = [];
          return;
        }
        if (action.meta.arg.page === 1) {
          state.items = newMovies;
        } else {
          state.items = [...state.items, ...newMovies];
        }
        if (newMovies.length < 10) {
          state.hasMore = false;
        } else {
          state.hasMore = true;
        }
      })
      .addCase(fetchSearchedMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Unknown error";
        state.hasMore = false;
      });
  },
});

export default SearchedMoviesSlice.reducer;
