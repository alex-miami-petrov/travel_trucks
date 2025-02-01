// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   location: "",
//   equipment: [],
//   form: "",
// };

// const filtersSlice = createSlice({
//   name: "filters",
//   initialState,
//   reducers: {
//     setLocation(state, action) {
//       state.location = action.payload;
//     },
//     toggleEquipment(state, action) {
//       const item = action.payload;
//       state.equipment.includes(item)
//         ? (state.equipment = state.equipment.filter((eq) => eq !== item))
//         : state.equipment.push(item);
//     },

//     setForm(state, action) {
//       state.form = action.payload;
//     },
//     resetFilters(state) {
//       state.location = "";
//       state.equipment = [];
//       state.form = "";
//     },
//   },
// });

// export const { setLocation, toggleEquipment, setForm, resetFilters } =
//   filtersSlice.actions;

// export default filtersSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  equipment: [],
  form: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setLocation(state, action) {
      state.location = action.payload;
    },
    toggleEquipment(state, action) {
      const item = action.payload;
      state.equipment.includes(item)
        ? (state.equipment = state.equipment.filter((eq) => eq !== item))
        : state.equipment.push(item);
    },
    setForm(state, action) {
      state.form = action.payload;
    },
    resetFilters(state) {
      state.location = "";
      state.equipment = [];
      state.form = "";
    },
  },
});

export const { setLocation, toggleEquipment, setForm, resetFilters } =
  filtersSlice.actions;

export default filtersSlice.reducer;
