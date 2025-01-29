import React from "react";
import { useSelector } from "react-redux";

const CatalogPage = () => {
  const { campers, status, error } = useSelector((state) => state.campers);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Catalog</h1>
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

export default CatalogPage;
