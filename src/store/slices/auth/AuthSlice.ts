import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthState, SigninType } from "./authType";
import axios from "axios";

export const signIn = createAsyncThunk<AuthState, SigninType>(
  "auth/signIn",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/v1/login", credentials, {
        headers: { "Content-Type": "application/json" },
      });
      if (!response.data.success) {
        throw new Error(response.data.message || "Login failed");
      }

      return response.data; // Replace with the actual data structure
    } catch (error) {
      return thunkAPI.rejectWithValue("Login failed"); // Set a clear error message
    }
  }
);

const initialState: AuthState = {
  user: null,
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.token = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // sign in
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          (action.error.message as string) ||
          "An error occurred during sign-in.";
      });
  },
});

export default authSlice.reducer;
