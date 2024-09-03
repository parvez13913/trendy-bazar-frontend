import { baseApi } from "./baseApi"
import { tagTypes } from "../tag-types";

const USER_URL = "/users";
const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addSeller: build.mutation({
      query: (sellerData) => ({
        url: `${USER_URL}/createSeller`,
        method: "POST",
        data: sellerData,
      }),
      invalidatesTags: [tagTypes.seller]
    }),
    addCustomer: build.mutation({
      query: (customerData) => ({
        url: `${USER_URL}/createCustomer`,
        method: "POST",
        data: customerData,
      }),
      invalidatesTags: [tagTypes.customer]
    }),
  }),
})

export const { useAddSellerMutation, useAddCustomerMutation } = userApi;