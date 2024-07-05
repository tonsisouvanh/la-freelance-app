import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "./authType";

interface AuthState {
  user: User | null;
}

const initialState: AuthState = {
  // user: {
  //   id: 1,
  //   firstname: "John",
  //   lastname: "Doe",
  //   phone: "123456789",
  //   role: "admin",
  //   last_login: new Date(),
  //   token: "k09qwdpojk",
  //   access_token: "fkpw9i",
  //   refresh_token: "fjpw9",
  // },
  user: null,
  // user: sessionStorage.getItem("user")
  //   ? JSON.parse(sessionStorage.getItem("user") || "")
  //   : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
      sessionStorage.removeItem("user");
      window.location.reload();
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
