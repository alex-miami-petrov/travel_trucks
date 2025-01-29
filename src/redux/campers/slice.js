import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async (filters = {}) => {
    const params = new URLSearchParams(filters).toString();
    const response = await axios.get(`${API_URL}?${params}`);
    console.log("Fetched campers:", response.data);
    return response.data;
  }
);

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    campers: [],
    status: "idle",
    error: null,
    filters: {},
  },
  reducers: {
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.campers = action.payload;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setFilters } = campersSlice.actions;
export default campersSlice.reducer;
