import { configureStore } from "@reduxjs/toolkit";
import campersReducer from "./campers/slice";
import filtersReducer from "./filtersSlice";
import favoritesReducer from "./favoritesSlice";

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filtersReducer,
    favorites: favoritesReducer,
  },
});

export default store;
