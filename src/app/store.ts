import { configureStore } from '@reduxjs/toolkit'
import { productApi } from '../services/products'
import { persistReducer, persistStore } from 'redux-persist'
import storage from "redux-persist/lib/storage"
import cartReducer from "../features/cart/cartSlice"
const persistConfig = {
  key: "root",
  storage
}

const persistedReducer = persistReducer(persistConfig, cartReducer);


export const store = configureStore({
  reducer: {
    cart: persistedReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware)
})

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch