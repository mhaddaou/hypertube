import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/lib/axios";

export interface MovieTorrent {
  quality: string;
  url: string;
}

export interface MovieDetails {
  id: number;
  title: string;
  runtime: number;
  year: number;
  description_intro: string;
  genres: string[];
  large_screenshot_image1: string;
  large_cover_image: string;
  rating: number;
  source: string;
  torrents: MovieTorrent[];
}

export interface MovieSuggestions {
  id: number;
  title: string;
  genres: string[];
  rating: number;
  medium_cover_image: string;
}

export const fetchMovieData = createAsyncThunk(
  "movie/fetchMovieData",
  async ({ id, source }: { id: number; source?: string }) => {
    const movieSource = source || 'YTS';
    const response = await axiosInstance.get(`/movies/${id}/${movieSource}`);
    return {
      data: {
        movie: {
          ...response.data.data.movie,
          source: movieSource
        }
      },
      movie_suggestions: response.data.movie_suggestions
    };
  },
);

const initialState = {
  status: "idle" as "idle" | "loading" | "succeeded" | "failed",
  error: null as string | null,
  movieData: null as MovieDetails | null,
  movieSuggestions: [] as MovieSuggestions[],
};

const MovieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovieData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movieData = action.payload.data.movie;
        state.movieSuggestions = action.payload.movie_suggestions.data.movies;
      })
      .addCase(fetchMovieData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Unknown error";
      });
  },
});

export default MovieSlice.reducer;
