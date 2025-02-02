import { authApi } from "../redux/campers/operations.js";

const fetchCampers = async (filters) => {
  try {
    const createQueryParams = (filters) => {
      const queryParams = {};

      if (filters.location) queryParams.location = filters.location;
      if (filters.form) queryParams.form = filters.form;
      if (filters.kitchen !== undefined) queryParams.kitchen = filters.kitchen;
      if (filters.TV !== undefined) queryParams.TV = filters.TV;
      if (filters.AC !== undefined) queryParams.AC = filters.AC;

      filters.equipment.forEach((key) => {
        queryParams[key] = key === "transmission" ? "automatic" : true;
      });

      return queryParams;
    };

    const params = createQueryParams(filters);

    if (Object.keys(params).length === 0) {
      return [];
    }

    const { data } = await authApi.get("/", { params });

    return data.items;
  } catch (err) {
    console.error("Error fetching campers:", err.message);
    return [];
  }
};

export default fetchCampers;
