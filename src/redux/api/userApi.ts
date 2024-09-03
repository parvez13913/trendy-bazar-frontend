import { baseApi } from "./baseApi"
import { tagTypes } from "../tag-types";

const USER_URL = "/users";
const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addSeller: build.mutation({
      query: (loginData) => ({
        url: `${USER_URL}/createSeller`,
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: [tagTypes.user]
    }),
  }),
})

export const { useAddSellerMutation } = userApi;