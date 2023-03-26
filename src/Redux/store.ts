import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import foodSlice from "./features/food/foodSlice";
import { Api } from "Services";

const reducer = {
  counter: counterReducer,
  food: foodSlice,
  [Api.reducerPath]: Api.reducer
};
export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(Api.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
