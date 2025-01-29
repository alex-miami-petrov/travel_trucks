import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCampers, setFilters } from "../../redux/campers/slice.js";

const Catalog = () => {
  const dispatch = useDispatch();
  const { campers, status, error, filters } = useSelector(
    (state) => state.campers
  );
  const [location, setLocation] = useState(filters.location || "");

  const handleFilterChange = () => {
    const newFilters = { location };
    dispatch(setFilters(newFilters));
    dispatch(fetchCampers(newFilters));
  };

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Catalog</h1>
      <div>
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={handleFilterChange}>Filter</button>
      </div>
      <ul>
        {campers.map((camper) => (
          <li key={camper.id}>
            {camper.name} - ${camper.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catalog;
