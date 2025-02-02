import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCamperById } from "./campersOperations";

const initialState = {
  campers: [],
  selectedCamper: null,
  isLoading: false,
  error: null,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    clearSelectedCamper(state) {
      state.selectedCamper = null;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchCampers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.campers = action.payload;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(fetchCamperById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedCamper = action.payload;
      })
      .addCase(fetchCamperById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { clearSelectedCamper } = campersSlice.actions;
export default campersSlice.reducer;
