import { axiosBaseQuery } from '@/helpers/axios/axiosBaseQuery';
import { getBaseURL } from '@/helpers/config/envConfig';
import { createApi } from '@reduxjs/toolkit/query/react';
import { tagsTypesList } from '../tag-types';


export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({ baseUrl: getBaseURL() }),
  endpoints: (builder) => ({}),
  tagTypes: tagsTypesList
});