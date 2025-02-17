import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/lib/axios";

const COMMENTS_PAGE_SIZE = 2;

interface commentData {
  comment_info: {
    comment_id: string;
    comment: string;
    created_at: string;
  };
  user_info: {
    user_id: string;
    username: string;
    profile_picture: string;
  };
}

export const fetchComments = createAsyncThunk(
  "comment/fetchComments",
  async ({ id, page, source }: { id: number; page: number; source: string }) => {
    const response = await axiosInstance.get(
      `/comments/${id}/${source}?page_size=${COMMENTS_PAGE_SIZE}&page=${page}`,
    );
    return {
      comments: response.data.data.comments,
      max_comments: response.data.data.max_comments,
    };
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
    const response = await axiosInstance.post(`/comments`, {
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
        const newComments = action.payload.comments;
        if (action.meta.arg.page === 0) {
          state.comments = newComments;
        } else {
          state.comments = [...state.comments, ...newComments];
        }
        
        const currentTotalComments = (action.meta.arg.page + 1) * COMMENTS_PAGE_SIZE;
        state.hasMore = currentTotalComments < action.payload.max_comments;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Unknown error";
      });
  },
});

export default commentSlice.reducer;
