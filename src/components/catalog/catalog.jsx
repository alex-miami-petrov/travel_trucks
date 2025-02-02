import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setLocation,
  toggleEquipment,
  setForm,
  resetFilters,
} from "../../redux/filters/slice.js"; // Імпортуємо resetFilters
import CamperCard from "../camperCard/camperCard";
import Container from "../../utils/container/container.jsx";
import icons from "../../img/icons.svg";
import s from "./catalog.module.css";
import { selectFilters } from "../../redux/filters/selector.js";
import fetchCampers from "../../services/fetchCampers.jsx";
import useInitialData from "../../services/useInitialData";

const equipmentFilters = [
  { key: "AC", label: "AC", icon: "icon-ac" },
  { key: "transmission", label: "Automatic", icon: "icon-trans" },
  { key: "kitchen", label: "Kitchen", icon: "icon-kitchen" },
  { key: "TV", label: "TV", icon: "icon-tv" },
  { key: "bathroom", label: "Bathroom", icon: "icon-bath" },
];

const formFilters = [
  { key: "panelTruck", label: "Van", icon: "icon-van" },
  { key: "fullyIntegrated", label: "Fully Integrated", icon: "icon-full" },
  { key: "alcove", label: "Alcove", icon: "icon-alcove" },
];

const Catalog = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const [campers, setCampers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);

  useInitialData(setCampers);

  const fetchCampersData = async () => {
    setLoading(true);
    const data = await fetchCampers(filters);
    setCampers(data);
    setLoading(false);

    localStorage.setItem("campers", JSON.stringify(data));
  };

  const handleInputChange = (e) => {
    dispatch(setLocation(e.target.value));
  };

  const handleEquipmentClick = (key) => {
    dispatch(toggleEquipment(key));
  };

  const handleFormClick = (key) => {
    dispatch(setForm(key));
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const handleSearchClick = (e) => {
    e.preventDefault();

    dispatch(resetFilters());

    setCampers([]);
    fetchCampersData();

    localStorage.setItem("filters", JSON.stringify(filters));
  };

  return (
    <section className={s.catalog}>
      <Container>
        <div className={s.wrapper}>
          <aside className={s.filters}>
            <form className={s.form} onSubmit={handleSearchClick}>
              <div className={s.inputWrap}>
                <label className={s.label} htmlFor="location-input">
                  Location
                </label>
                <input
                  id="location-input"
                  name="location"
                  placeholder="City"
                  className={s.input}
                  value={filters.location}
                  onChange={handleInputChange}
                />
                <svg
                  className={`${s.inputIcon} ${
                    filters.location ? s.active : ""
                  }`}
                  width="20"
                  height="20"
                >
                  <use href={`${icons}#icon-map`} />
                </svg>
              </div>

              <h2 className={s.mainFilterTitle}>Filters</h2>

              <div className={s.filterGroup}>
                <h3 className={s.filterTitle}>Vehicle equipment</h3>
                <div className={s.filterOptions}>
                  {equipmentFilters.map(({ key, label, icon }) => (
                    <button
                      key={key}
                      type="button"
                      className={`${s.filterBtn} ${
                        filters.equipment.includes(key) ? s.active : ""
                      }`}
                      onClick={() => handleEquipmentClick(key)}
                    >
                      <svg className={s.equipIcon} width="32" height="32">
                        <use href={`${icons}#${icon}`} />
                      </svg>
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div className={s.filterGroup}>
                <h3 className={s.filterTitle}>Vehicle type</h3>
                <div className={s.filterOptions}>
                  {formFilters.map(({ key, label, icon }) => (
                    <button
                      key={key}
                      type="button"
                      className={`${s.filterBtn} ${
                        filters.form === key ? s.active : ""
                      }`}
                      onClick={() => handleFormClick(key)}
                    >
                      <svg className={s.equipIcon} width="32" height="32">
                        <use href={`${icons}#${icon}`} />
                      </svg>
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <button type="submit" className={s.searchBtn}>
                Search
              </button>
            </form>
          </aside>

          <div className={s.catalogList}>
            {loading ? (
              <p>Loading...</p>
            ) : campers.length > 0 ? (
              campers
                .slice(0, visibleCount)
                .map((camper) => <CamperCard key={camper.id} camper={camper} />)
            ) : (
              <p>No campers found</p>
            )}
            {campers.length > visibleCount && (
              <button className={s.loadMoreBtn} onClick={handleLoadMore}>
                Load More
              </button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Catalog;
