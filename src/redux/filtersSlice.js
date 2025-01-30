import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    location: "",
    equipment: [],
    type: "",
  },
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    toggleEquipment: (state, action) => {
      const index = state.equipment.indexOf(action.payload);
      if (index === -1) {
        state.equipment.push(action.payload);
      } else {
        state.equipment.splice(index, 1);
      }
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
    resetFilters: (state) => {
      state.location = "";
      state.equipment = [];
      state.type = "";
    },
  },
});

export const { setLocation, toggleEquipment, setType, resetFilters } =
  filtersSlice.actions;
export default filtersSlice.reducer;
