// import React from "react";
// import Catalog from "../../components/catalog/catalog.jsx";

// const CatalogPage = () => {
//   return (
//     <div>
//       <Catalog />
//     </div>
//   );
// };

// export default CatalogPage;

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCampers, setFilters } from "../../redux/campers/slice.js";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const { campers, status, error, filters } = useSelector(
    (state) => state.campers
  );
  const [location, setLocation] = useState(filters.location || "");
  const [type, setType] = useState(filters.type || "");
  const [ac, setAc] = useState(filters.ac || false);
  const [tv, setTv] = useState(filters.tv || false);
  const [kitchen, setKitchen] = useState(filters.kitchen || false);
  const [transmission, setTransmission] = useState(filters.transmission || "");

  const handleFilterChange = () => {
    const newFilters = { location, type, ac, tv, kitchen, transmission };
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
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">Select Type</option>
          <option value="van">Van</option>
          <option value="motorhome">Motorhome</option>
        </select>
        <label>
          <input
            type="checkbox"
            checked={ac}
            onChange={(e) => setAc(e.target.checked)}
          />{" "}
          AC
        </label>
        <label>
          <input
            type="checkbox"
            checked={tv}
            onChange={(e) => setTv(e.target.checked)}
          />{" "}
          TV
        </label>
        <label>
          <input
            type="checkbox"
            checked={kitchen}
            onChange={(e) => setKitchen(e.target.checked)}
          />{" "}
          Kitchen
        </label>
        <select
          value={transmission}
          onChange={(e) => setTransmission(e.target.value)}
        >
          <option value="">Select Transmission</option>
          <option value="manual">Manual</option>
          <option value="automatic">Automatic</option>
        </select>
        <button onClick={handleFilterChange}>Filter</button>
      </div>
      <ul>
        {Array.isArray(campers) ? (
          campers.map((camper) => (
            <li key={camper.id}>
              {camper.name} - ${camper.price.toFixed(2)}
            </li>
          ))
        ) : (
          <p>No campers available</p>
        )}
      </ul>
    </div>
  );
};

export default CatalogPage;
