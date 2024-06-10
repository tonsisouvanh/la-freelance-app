import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AuthResponse, SigninType, User } from "../auth/authType";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_DOMAIN }),
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, SigninType>({
      query: (credentials) => ({
        url: "login",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    getCurrentUser: builder.query<User, void>({
      query: () => ({
        url: "me",
        method: "GET",
      }),
    }),
    
  }),
});

export const { useLoginMutation, useGetCurrentUserQuery } = authApi;
