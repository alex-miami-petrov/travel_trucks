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

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   equipment: [],
//   form: null,
//   location: "",
// };

// const filtersSlice = createSlice({
//   name: "filters",
//   initialState,
//   reducers: {
//     toggleEquipment(state, action) {
//       const key = action.payload;
//       if (state.equipment.includes(key)) {
//         state.equipment = state.equipment.filter((item) => item !== key);
//       } else {
//         state.equipment.push(key);
//       }
//     },
//     setForm(state, action) {
//       state.form = action.payload;
//     },
//     setLocation(state, action) {
//       state.location = action.payload;
//     },
//     resetFilters(state) {
//       state.equipment = [];
//       state.form = null;
//       state.location = "";
//     },
//   },
// });

// export const { toggleEquipment, setForm, setLocation, resetFilters } =
//   filtersSlice.actions;

// export default filtersSlice.reducer;
