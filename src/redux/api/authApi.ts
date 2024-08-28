import { baseApi } from "./baseApi"
import { tagTypes } from "../tag-types";

const AUTH_URL = "/auth";
const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `${AUTH_URL}/login`,
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: [tagTypes.user]
    }),
  }),
})

export const { useUserLoginMutation } = authApi;