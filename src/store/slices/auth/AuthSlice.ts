import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SignupType } from "./authType";
import { axiosPublic } from "../../../helpers/axiosConfig";

interface User {
  id: number;
  firstname: string;
  lastname: string;
  phone: string;
  role: string;
  last_login: Date;
  token: string;
  access_token: string;
  refresh_token: string;
}

interface AuthState {
  user: User | null;
  status: "idle" | "loading" | "failed" | "success";
  error: string | null;
}

interface SigninType {
  phone: string;
  password: string;
}

const initialState: AuthState = {
  user: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo") || "")
    : null,
  status: "idle",
  error: null,
};

export const signIn = createAsyncThunk<User, SigninType>(
  "auth/signIn",
  async (credentials, thunkAPI) => {
    try {
      const response = await axiosPublic.post(
        "/login",
        { ...credentials, login_method: "password" },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      localStorage.setItem("userInfo", JSON.stringify(response.data));

      return response.data; // Replace with the actual data structure
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.error);
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
      const response = await axiosPublic.post(
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

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("userInfo");
      state.user = null;
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
        state.user = action.payload;
        state.error = null;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.status = "failed";
        // state.error = action.payload as string;
        state.error = action.error.message as string;
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
        state.error = action.error.message as string;
      });
  },
});

export const { logout, resetStatus } = authSlice.actions;
export default authSlice.reducer;
