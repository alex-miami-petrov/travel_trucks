import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    setNameFilter(state, { payload }) {
      state.name = payload;
    },
  },
});

export const { setNameFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
