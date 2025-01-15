import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface UserData {
  id: string;
  email: string;
  username: string;
  first_name: string;
  last_name: string;
  image_url: string;
}

interface UserState {
  userData: UserData | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  loading: false,
  error: null,
  userData: null,
};

export const userLogin = createAsyncThunk(
  "user/userLogin",
  async (data: { email: string; password: string }) => {
    const response = await axios.post(
      "http://localhost:8000/users/login",
      data,
    );
    return response.data;
  },
);

export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async (id: string) => {
    const response = await axios.get("http://localhost:8000/users/" + id);
    return response.data;
  },
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload.data;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to login";
      })
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload.data;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch user data";
      });
  },
});

export default userSlice.reducer;
