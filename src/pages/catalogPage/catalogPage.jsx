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
  const [form, setForm] = useState(filters.form || "");
  const [AC, setAC] = useState(filters.AC || false);
  const [TV, setTV] = useState(filters.TV || false);
  const [kitchen, setKitchen] = useState(filters.kitchen || false);
  const [transmission, setTransmission] = useState(filters.transmission || "");

  const handleFilterChange = () => {
    const newFilters = { location, form, AC, TV, kitchen, transmission };

    const cleanFilters = Object.fromEntries(
      Object.entries(newFilters).filter(
        ([_, value]) => value !== "" && value !== undefined && value !== null
      )
    );

    dispatch(setFilters(cleanFilters));
    dispatch(fetchCampers(cleanFilters));
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

        <select value={form} onChange={(e) => setForm(e.target.value)}>
          <option value="">Select Type</option>
          <option value="alcove">Alcove</option>
          <option value="van">Van</option>
          <option value="fullyIntegrated">Fully Integrated</option>
          <option value="panelTruck">Panel Truck</option>
        </select>

        <label>
          <input
            type="checkbox"
            checked={AC}
            onChange={(e) => setAC(e.target.checked)}
          />{" "}
          AC
        </label>
        <label>
          <input
            type="checkbox"
            checked={TV}
            onChange={(e) => setTV(e.target.checked)}
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
        {Array.isArray(campers) && campers.length > 0 ? (
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
