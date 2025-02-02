import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  equipment: [],
  form: null,
  location: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    toggleEquipment(state, action) {
      const key = action.payload;
      if (state.equipment.includes(key)) {
        state.equipment = state.equipment.filter((item) => item !== key);
      } else {
        state.equipment.push(key);
      }
    },
    setForm(state, action) {
      state.form = action.payload;
    },
    setLocation(state, action) {
      state.location = action.payload;
    },
    resetFilters(state) {
      state.equipment = [];
      state.form = null;
      state.location = "";
    },
  },
});

export const { toggleEquipment, setForm, setLocation, resetFilters } =
  filtersSlice.actions;

export default filtersSlice.reducer;
