import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setLocation,
  toggleEquipment,
  setForm,
  resetFilters,
} from "../../redux/filtersSlice";
import axios from "axios";
import CamperCard from "../camperCard/camperCard";
import Container from "../../utils/container/container.jsx";
import icons from "../../img/icons.svg";
import s from "./catalog.module.css";

const equipmentFilters = [
  { key: "AC", label: "AC", icon: "icon-ac" },
  { key: "transmission", label: "Automatic", icon: "icon-trans" },
  { key: "kitchen", label: "Kitchen", icon: "icon-kitchen" },
  { key: "TV", label: "TV", icon: "icon-tv" },
  { key: "bathroom", label: "Bathroom", icon: "icon-bath" },
];

const formFilters = [
  { key: "van", label: "Van", icon: "icon-van" },
  { key: "fullyIntegrated", label: "Fully Integrated", icon: "icon-full" },
  { key: "alcove", label: "Alcove", icon: "icon-alcove" },
];

const Catalog = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const [campers, setCampers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCampers = () => {
    setLoading(true);
    setCampers([]);
    axios
      .get("https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers")
      .then((res) => {
        if (Array.isArray(res.data.items)) {
          setCampers(res.data.items);
        } else {
          console.error("Invalid data format:", res.data);
        }
      })
      .catch((err) => console.error("Error fetching campers:", err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchCampers();
  }, []);

  // Оновлюємо лише локацію при зміні інпуту, але не викликаємо пошук
  const handleInputChange = (e) => {
    const value = e.target.value;
    dispatch(setLocation(value));
  };

  // Викликаємо пошук після натискання кнопки "Search"
  const handleSearch = (e) => {
    e.preventDefault();
    fetchCampers(); // Пошук виконується тільки при натисканні кнопки "Search"
  };

  const filteredCampers = campers.filter((camper) => {
    if (
      filters.location &&
      !camper.location.toLowerCase().includes(filters.location.toLowerCase())
    ) {
      return false;
    }

    if (filters.form && camper.form !== filters.form) {
      return false;
    }

    if (filters.equipment.length > 0) {
      return filters.equipment.every((eq) => camper[eq] === true);
    }

    return true;
  });

  // Перевірка наявності тексту в інпуті для зміни кольору іконки
  const isInputFilled = filters.location.trim().length > 0;

  return (
    <section className={s.catalog}>
      <Container>
        <div className={s.wrapper}>
          <aside className={s.filters}>
            <form className={s.form} onSubmit={handleSearch}>
              <div className={s.inputWrap}>
                <label className={s.label} htmlFor="location">
                  Location
                </label>
                <input
                  name="location"
                  placeholder="City"
                  className={s.input}
                  value={filters.location}
                  onChange={handleInputChange} // Оновлюємо тільки локацію
                />
                <svg
                  className={`${s.inputIcon} ${
                    isInputFilled ? s.iconFilled : ""
                  }`} // Змінюємо колір, якщо є текст
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
                      onClick={() => dispatch(toggleEquipment(key))}
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
                      onClick={() => dispatch(setForm(key))}
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
            ) : filteredCampers.length > 0 ? (
              filteredCampers.map((camper) => (
                <CamperCard key={camper.id} camper={camper} />
              ))
            ) : (
              <p>No campers found</p>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Catalog;
