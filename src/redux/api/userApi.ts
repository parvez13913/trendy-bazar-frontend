import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const USER_URL = "/users";
const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addSeller: build.mutation({
      query: (sellerData) => ({
        url: `${USER_URL}/createSeller`,
        method: "POST",
        data: sellerData,
      }),
      invalidatesTags: [tagTypes.seller],
    }),
    addCustomer: build.mutation({
      query: (customerData) => ({
        url: `${USER_URL}/createCustomer`,
        method: "POST",
        data: customerData,
      }),
      invalidatesTags: [tagTypes.customer],
    }),
    user: build.query({
      query: (userEmail) => ({
        url: `${USER_URL}/${userEmail}`,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
  }),
});

export const { useAddSellerMutation, useAddCustomerMutation, useUserQuery } =
  userApi;
