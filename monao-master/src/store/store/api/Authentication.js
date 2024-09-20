import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BACKEND_API_URL } from "../../../env";

export const AuthenticationApi = createApi({
  reducerPath: "AuthenticationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BACKEND_API_URL,
  }),

  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ data }) => {
        return {
          url: "login/",
          body: data,
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    resetPassword: builder.mutation({
      query: ({ uid, token, data }) => {
        return {
          url: `reset_password_confirm/${uid}/${token}/`,
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { useLoginMutation, useResetPasswordMutation } = AuthenticationApi;
