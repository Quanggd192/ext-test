import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
console.log("first", process.env.REACT_APP_API_ENDPOINT);
// Define a service using a base URL and expected endpoints
export const Api = createApi({
  reducerPath: "mockApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_ENDPOINT,
  }),
  endpoints: (builder) => ({
    getChartData: builder.query<Array<any>, string>({
      query: (type?: string) => "/chart-data/" + type,
    }),
    getListFood: builder.query<Array<any>, string>({
      query: (type?: string) => "/list-food/" + type,
    }),
  }),
});

export const {
  useGetChartDataQuery,
  useGetListFoodQuery,
  useLazyGetListFoodQuery,
} = Api;
