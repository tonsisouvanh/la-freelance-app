import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthState, SigninType, SignupType } from "./authType";
import axios from "../../../helpers/axiosConfig";
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
export const signUp = createAsyncThunk<AuthState, SignupType>(
  "auth/signUp",
  async (userData, thunkAPI) => {
    try {
      const formattedData = {
        phone: userData.phone?.toString(),
        firstName: userData.fname,
        lastName: userData.lname,
        email: userData.email,
        dob_at: userData.dob,
        role: "user",
        password: userData.password,
        profile: userData.profile ? userData?.profile : null,
      };
      const response = await axios.post(
        "/signup",
        { ...formattedData },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Signup failed"); // Set a clear error message
    }
  }
);

const initialState: AuthState = {
  user: null,
  token: null,
  isLoggedIn: false,
  status: "idle",
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
    },
    resetStatus: (state) => {
      state.error = null;
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      // sign in
      .addCase(signIn.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.status = "success";
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          (action.error.message as string) ||
          "An error occurred during sign-in.";
      })
      .addCase(signUp.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state) => {
        state.status = "success";
      })
      .addCase(signUp.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          (action.error.message as string) ||
          "An error occurred during sign-in.";
      });
  },
});

export const { logout, resetStatus } = authSlice.actions;
export default authSlice.reducer;
