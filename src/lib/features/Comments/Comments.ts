import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface commentData {
  comment_info: {
    comment: string;
    created_at: string;
  };
  user_info: {
    username: string;
    profile_picture: string;
  };
}

export const fetchComments = createAsyncThunk(
  "comment/fetchComments",
  async ({ id, page }: { id: number; page: number }) => {
    const response = await axios.get(
      `http://localhost:8000/comments/${id}/YTS?page_size=2&page=${page}`,
    );
    return response.data.data.comments;
  },
);

export const addComment = createAsyncThunk(
  "comment/addComment",
  async ({
    movie_id,
    comment,
    source,
  }: {
    movie_id: number;
    comment: string;
    source: string;
  }) => {
    const response = await axios.post(`http://localhost:8000/comments`, {
      movie_id,
      comment,
      source,
    });
    return response.data.data.comments;
  },
);

const initialState = {
  status: "idle" as "idle" | "loading" | "succeeded" | "failed",
  error: null as string | null,
  comments: [] as commentData[],
  hasMore: true,
};

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.status = "succeeded";
        const newComments = action.payload;
        if (action.meta.arg.page === 0) {
          state.comments = newComments;
        } else {
          state.comments = [...state.comments, ...newComments];
        }
        if (!state.comments || state.comments.length === 0) {
          state.hasMore = false;
          return;
        }
        if (action.payload.length < 2) {
          state.hasMore = false;
        } else {
          state.hasMore = true;
        }
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Unknown error";
      });
  },
});

export default commentSlice.reducer;
