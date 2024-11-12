import { baseApi } from "../baseApi";

const carApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCars: builder.query({
      query: () => "data.json",
    }),
  }),
});

export const { useGetCarsQuery } = carApi;
