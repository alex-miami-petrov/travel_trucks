// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   setLocation,
//   toggleEquipment,
//   setForm,
//   resetFilters,
// } from "../../redux/filtersSlice";
// import axios from "axios";
// import CamperCard from "../camperCard/camperCard";
// import Container from "../../utils/container/container.jsx";
// import icons from "../../img/icons.svg";
// import s from "./catalog.module.css";

// const equipmentFilters = [
//   { key: "AC", label: "AC", icon: "icon-ac" },
//   { key: "transmission", label: "Automatic", icon: "icon-trans" },
//   { key: "kitchen", label: "Kitchen", icon: "icon-kitchen" },
//   { key: "TV", label: "TV", icon: "icon-tv" },
//   { key: "bathroom", label: "Bathroom", icon: "icon-bath" },
// ];

// const formFilters = [
//   { key: "van", label: "Van", icon: "icon-van" },
//   { key: "fullyIntegrated", label: "Fully Integrated", icon: "icon-full" },
//   { key: "alcove", label: "Alcove", icon: "icon-alcove" },
// ];

// const Catalog = () => {
//   const dispatch = useDispatch();
//   const filters = useSelector((state) => state.filters);
//   const [campers, setCampers] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [visibleCount, setVisibleCount] = useState(4);

//   const fetchCampers = () => {
//     setLoading(true);
//     setCampers([]);
//     axios
//       .get("https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers")
//       .then((res) => {
//         if (Array.isArray(res.data.items)) {
//           setCampers(res.data.items);
//         } else {
//           console.error("Invalid data format:", res.data);
//         }
//       })
//       .catch((err) => console.error("Error fetching campers:", err))
//       .finally(() => setLoading(false));
//   };

//   useEffect(() => {
//     fetchCampers();
//   }, []);

//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     dispatch(setLocation(value));
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     fetchCampers();
//   };

//   const filteredCampers = campers.filter((camper) => {
//     if (
//       filters.location &&
//       !camper.location.toLowerCase().includes(filters.location.toLowerCase())
//     ) {
//       return false;
//     }

//     if (filters.form && camper.form !== filters.form) {
//       return false;
//     }

//     if (filters.equipment.length > 0) {
//       return filters.equipment.every((eq) => camper[eq] === true);
//     }

//     return true;
//   });

//   const isInputFilled = filters.location.trim().length > 0;

//   const handleLoadMore = () => {
//     setVisibleCount(visibleCount + 4);
//   };

//   return (
//     <section className={s.catalog}>
//       <Container>
//         <div className={s.wrapper}>
//           <aside className={s.filters}>
//             <form className={s.form} onSubmit={handleSearch}>
//               <div className={s.inputWrap}>
//                 <label className={s.label} htmlFor="location">
//                   Location
//                 </label>
//                 <input
//                   name="location"
//                   placeholder="City"
//                   className={s.input}
//                   value={filters.location}
//                   onChange={handleInputChange}
//                 />
//                 <svg
//                   className={`${s.inputIcon} ${isInputFilled ? s.active : ""}`}
//                   width="20"
//                   height="20"
//                 >
//                   <use href={`${icons}#icon-map`} />
//                 </svg>
//               </div>
//               <h2 className={s.mainFilterTitle}>Filters</h2>

//               <div className={s.filterGroup}>
//                 <h3 className={s.filterTitle}>Vehicle equipment</h3>
//                 <div className={s.filterOptions}>
//                   {equipmentFilters.map(({ key, label, icon }) => (
//                     <button
//                       key={key}
//                       type="button"
//                       className={`${s.filterBtn} ${
//                         filters.equipment.includes(key) ? s.active : ""
//                       }`}
//                       onClick={() => dispatch(toggleEquipment(key))}
//                     >
//                       <svg className={s.equipIcon} width="32" height="32">
//                         <use href={`${icons}#${icon}`} />
//                       </svg>
//                       {label}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               <div className={s.filterGroup}>
//                 <h3 className={s.filterTitle}>Vehicle type</h3>
//                 <div className={s.filterOptions}>
//                   {formFilters.map(({ key, label, icon }) => (
//                     <button
//                       key={key}
//                       type="button"
//                       className={`${s.filterBtn} ${
//                         filters.form === key ? s.active : ""
//                       }`}
//                       onClick={() => dispatch(setForm(key))}
//                     >
//                       <svg className={s.equipIcon} width="32" height="32">
//                         <use href={`${icons}#${icon}`} />
//                       </svg>
//                       {label}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               <button type="submit" className={s.searchBtn}>
//                 Search
//               </button>
//             </form>
//           </aside>

//           <div className={s.catalogList}>
//             {loading ? (
//               <p>Loading...</p>
//             ) : filteredCampers.length > 0 ? (
//               filteredCampers
//                 .slice(0, visibleCount)
//                 .map((camper) => <CamperCard key={camper.id} camper={camper} />)
//             ) : (
//               <p>No campers found</p>
//             )}
//             {filteredCampers.length > visibleCount && (
//               <button className={s.loadMoreBtn} onClick={handleLoadMore}>
//                 Load More
//               </button>
//             )}
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default Catalog;

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setLocation,
  toggleEquipment,
  setForm,
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
  const [visibleCount, setVisibleCount] = useState(4);

  // Функція запиту до API (пошук)
  const fetchCampers = () => {
    setLoading(true);
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

  // При першому завантаженні робимо запит (якщо потрібно, інакше можна закоментувати)
  useEffect(() => {
    fetchCampers();
  }, []);

  // Зміна поля location – оновлюємо Redux, але не робимо запит
  const handleInputChange = (e) => {
    dispatch(setLocation(e.target.value));
  };

  // Пошук виконується тільки при натисканні кнопки "Search"
  const handleSearch = (e) => {
    e.preventDefault();
    fetchCampers();
  };

  // Фільтруємо отримані дані згідно з вибраними значеннями фільтрів
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

  const isInputFilled = filters.location.trim().length > 0;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <section className={s.catalog}>
      <Container>
        <div className={s.wrapper}>
          <aside className={s.filters}>
            <form className={s.form} onSubmit={handleSearch}>
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
                  onChange={handleInputChange} // Оновлюємо Redux, але не викликаємо пошук
                />
                <svg
                  className={`${s.inputIcon} ${isInputFilled ? s.active : ""}`}
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
                      onClick={() => dispatch(toggleEquipment(key))} // Оновлюємо фільтри, але не робимо запит
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
                      onClick={() => dispatch(setForm(key))} // Оновлюємо фільтри, але не робимо запит
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
              filteredCampers
                .slice(0, visibleCount)
                .map((camper) => <CamperCard key={camper.id} camper={camper} />)
            ) : (
              <p>No campers found</p>
            )}
            {filteredCampers.length > visibleCount && (
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
