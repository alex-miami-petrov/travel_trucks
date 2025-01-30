import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

// Async Thunk для завантаження кемперів
export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async (_, { getState }) => {
    const { filters } = getState();
    const response = await axios.get(API_URL, { params: filters });
    return response.data;
  }
);

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    list: [],
    status: "idle",
    error: null,
  },
  reducers: {
    clearCampers: (state) => {
      state.list = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { clearCampers } = campersSlice.actions;
export default campersSlice.reducer;
