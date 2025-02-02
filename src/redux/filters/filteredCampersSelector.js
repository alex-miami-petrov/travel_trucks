import { createSelector } from "@reduxjs/toolkit";
import { selectCampers, selectFilters } from "./selector.js";

// Основний селектор, який застосовує фільтри
export const selectFilteredCampers = createSelector(
  [selectCampers, selectFilters],
  (campers = [], filters = {}) => {
    // Додаємо значення за замовчуванням
    return campers.filter((camper) => {
      // Фільтр за локацією (ігноруємо регістр та перевіряємо частковий збіг)
      if (
        filters.location?.trim() && // Перевірка, чи існує location та чи він не порожній
        !camper.location.toLowerCase().includes(filters.location.toLowerCase())
      ) {
        return false;
      }

      // Фільтр за типом кемпера (тільки один вибір)
      if (filters.form && camper.form !== filters.form) {
        return false;
      }

      // Фільтр за обладнанням (усі вибрані елементи повинні бути в camper)
      if (filters.equipment?.length > 0) {
        // Перевірка, чи існує equipment та чи він не порожній
        const hasAllEquipment = filters.equipment.every((eq) => camper[eq]);
        if (!hasAllEquipment) {
          return false;
        }
      }

      return true;
    });
  }
);
