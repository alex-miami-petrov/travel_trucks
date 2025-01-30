import { createSlice } from "@reduxjs/toolkit";

const loadFavorites = () => JSON.parse(localStorage.getItem("favorites")) || [];

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: loadFavorites(),
  reducers: {
    toggleFavorite: (state, action) => {
      const id = action.payload;
      const index = state.indexOf(id);
      if (index === -1) {
        state.push(id);
      } else {
        state.splice(index, 1);
      }
      localStorage.setItem("favorites", JSON.stringify(state));
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
