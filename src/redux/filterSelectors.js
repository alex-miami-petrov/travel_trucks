export const selectFilteredCampers = (state) => {
  const { location, equipment, form } = state.filters;
  const campers = state.campers.items;

  return campers.filter((camper) => {
    // Фільтрація по локації
    if (location && !camper.location.toLowerCase().includes(location.toLowerCase())) {
      return false;
    }

    // Фільтрація по типу кемпера
    if (form && camper.form !== form) {
      return false;
    }

    // Фільтрація по обладнанню
    if (equipment.length > 0) {
      return equipment.every((eq) => camper[eq] === true);
    }

    return true;
  });
};