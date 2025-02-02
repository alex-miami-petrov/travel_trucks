import { createSelector } from "@reduxjs/toolkit";
import { selectCampers, selectFilters } from "./selector.js";

export const selectFilteredCampers = createSelector(
  [selectCampers, selectFilters],
  (campers = [], filters = {}) => {
    return campers.filter((camper) => {
      if (
        filters.location?.trim() &&
        !camper.location.toLowerCase().includes(filters.location.toLowerCase())
      ) {
        return false;
      }

      if (filters.form && camper.form !== filters.form) {
        return false;
      }

      if (filters.equipment?.length > 0) {
        const hasAllEquipment = filters.equipment.every((eq) => camper[eq]);
        if (!hasAllEquipment) {
          return false;
        }
      }

      return true;
    });
  }
);
