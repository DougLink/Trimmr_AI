import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";
import userReducer from "./user_slice";

export const store = configureStore({
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer,
        user: userReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
})
