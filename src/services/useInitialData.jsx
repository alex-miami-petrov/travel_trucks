import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setLocation,
  toggleEquipment,
  setForm,
} from "../redux/filters/slice.js";
import fetchCampers from "../services/fetchCampers.jsx";

const useInitialData = (setCampers) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const savedFilters = JSON.parse(localStorage.getItem("filters"));
    const savedCampers = JSON.parse(localStorage.getItem("campers"));

    if (savedFilters && typeof savedFilters === "object") {
      dispatch(setLocation(savedFilters.location || ""));
      if (Array.isArray(savedFilters.equipment)) {
        savedFilters.equipment.forEach((key) => dispatch(toggleEquipment(key)));
      }
      dispatch(setForm(savedFilters.form || ""));
    }

    if (savedCampers && Array.isArray(savedCampers)) {
      setCampers(savedCampers);
    } else {
      fetchRandomCampers();
    }
  }, [dispatch, setCampers]);

  const fetchRandomCampers = async () => {
    try {
      const savedFilters = JSON.parse(localStorage.getItem("filters")) || {};

      const campers = await fetchCampers(savedFilters);
      setCampers(campers);
    } catch (error) {
      console.error("Error fetching random campers:", error);
    }
  };
};

export default useInitialData;
