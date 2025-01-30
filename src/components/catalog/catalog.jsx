import React from "react";
import s from "./catalog.module.css";
import Container from "../../utils/container/container.jsx";
import icons from "../../img/icons.svg";

const Catalog = () => {
  return (
    <section className={s.catalog}>
      <Container>
        <div className={s.wrapper}>
          {/* ФІЛЬТРИ */}
          <aside className={s.filters}>
            <form className={s.form}>
              {/* Локація */}
              <div className={s.inputWrap}>
                <label className={s.label} htmlFor="location">
                  Location
                </label>
                <input name="location" placeholder="City" className={s.input} />
                <svg className={s.inputIcon} width="20" height="20">
                  <use href={`${icons}#icon-map`} />
                </svg>
              </div>
              <h2 className={s.mainFilterTitle}>Filters</h2>
              {/* Фільтр: Vehicle equipment */}
              <div className={s.filterGroup}>
                <h3 className={s.filterTitle}>Vehicle equipment</h3>
                <div className={s.filterOptions}>
                  <button type="button" className={s.filterBtn}>
                    <svg className={s.equipIcon} width="32" height="28">
                      <use href={`${icons}#icon-ac`} />
                    </svg>
                    AC
                  </button>
                  <button type="button" className={s.filterBtn}>
                    Automatic
                  </button>
                  <button type="button" className={s.filterBtn}>
                    Kitchen
                  </button>
                  <button type="button" className={s.filterBtn}>
                    TV
                  </button>
                  <button type="button" className={s.filterBtn}>
                    Bathroom
                  </button>
                </div>
              </div>

              {/* Фільтр: Vehicle type */}
              <div className={s.filterGroup}>
                <h3 className={s.filterTitle}>Vehicle type</h3>
                <div className={s.filterOptions}>
                  <button type="button" className={s.filterBtn}>
                    Van
                  </button>
                  <button type="button" className={s.filterBtn}>
                    Fully Integrated
                  </button>
                  <button type="button" className={s.filterBtn}>
                    Alcove
                  </button>
                </div>
              </div>

              {/* Кнопка пошуку */}
              <button type="submit" className={s.searchBtn}>
                Search
              </button>
            </form>
          </aside>

          {/* СПИСОК КЕМПЕРІВ */}
          <div className={s.catalogList}>
            <p>Camper cards will be here</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Catalog;

// import React, { useState, useEffect } from "react";
// import s from "./catalog.module.css";
// import Container from "../../utils/container/container.jsx";
// import icons from "../../img/icons.svg";
// import axios from "axios";

// const API_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

// const equipmentOptions = ["AC", "Automatic", "Kitchen", "TV", "Bathroom"];
// const vehicleTypes = ["Van", "Fully Integrated", "Alcove"];

// const Catalog = () => {
//   const [campers, setCampers] = useState([]);
//   const [filters, setFilters] = useState({ location: "", equipment: [], type: [] });
//   const [page, setPage] = useState(1);
//   const [filteredCampers, setFilteredCampers] = useState([]);

//   useEffect(() => {
//     axios.get(API_URL).then((res) => {
//       setCampers(res.data);
//     });
//   }, []);

//   useEffect(() => {
//     applyFilters();
//   }, [filters, page, campers]);

//   const handleFilterChange = (type, value) => {
//     setFilters((prev) => {
//       const updatedFilters = { ...prev };

//       if (type === "equipment" || type === "type") {
//         updatedFilters[type] = prev[type].includes(value)
//           ? prev[type].filter((item) => item !== value)
//           : [...prev[type], value];
//       } else {
//         updatedFilters[type] = value;
//       }

//       return updatedFilters;
//     });
//   };

//   const applyFilters = () => {
//     let filtered = [...campers];

//     if (filters.location) {
//       filtered = filtered.filter((camper) =>
//         camper.location.toLowerCase().includes(filters.location.toLowerCase())
//       );
//     }

//     if (filters.equipment.length > 0) {
//       filtered = filtered.filter((camper) =>
//         filters.equipment.every((item) => camper.equipment.includes(item))
//       );
//     }

//     if (filters.type.length > 0) {
//       filtered = filtered.filter((camper) => filters.type.includes(camper.type));
//     }

//     setFilteredCampers(filtered.slice(0, page * 4));
//   };

//   return (
//     <section className={s.catalog}>
//       <Container>
//         <div className={s.wrapper}>
//           {/* ФІЛЬТРИ */}
//           <aside className={s.filters}>
//             <form className={s.form}>
//               {/* Локація */}
//               <div className={s.inputWrap}>
//                 <label className={s.label} htmlFor="location">
//                   Location
//                 </label>
//                 <input
//                   name="location"
//                   placeholder="City"
//                   className={s.input}
//                   value={filters.location}
//                   onChange={(e) => handleFilterChange("location", e.target.value)}
//                 />
//                 <svg className={s.inputIcon} width="20" height="20">
//                   <use href={`${icons}#icon-map`} />
//                 </svg>
//               </div>

//               {/* Vehicle equipment */}
//               <div className={s.filterGroup}>
//                 <h3 className={s.filterTitle}>Vehicle equipment</h3>
//                 <div className={s.filterOptions}>
//                   {equipmentOptions.map((option) => (
//                     <button
//                       key={option}
//                       type="button"
//                       className={`${s.filterBtn} ${filters.equipment.includes(option) ? s.active : ""}`}
//                       onClick={() => handleFilterChange("equipment", option)}
//                     >
//                       {option}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Vehicle type */}
//               <div className={s.filterGroup}>
//                 <h3 className={s.filterTitle}>Vehicle type</h3>
//                 <div className={s.filterOptions}>
//                   {vehicleTypes.map((option) => (
//                     <button
//                       key={option}
//                       type="button"
//                       className={`${s.filterBtn} ${filters.type.includes(option) ? s.active : ""}`}
//                       onClick={() => handleFilterChange("type", option)}
//                     >
//                       {option}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </form>
//           </aside>

//           {/* СПИСОК КЕМПЕРІВ */}
//           <div className={s.catalogList}>
//             {filteredCampers.map((camper) => (
//               <div key={camper.id} className={s.camperCard}>
//                 <img src={camper.image} alt={camper.name} className={s.camperImage} />
//                 <div className={s.camperInfo}>
//                   <h3>{camper.name}</h3>
//                   <p>{camper.location}</p>
//                   <p>€{camper.price}</p>
//                   <button className={s.showMore}>Show more</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* LOAD MORE */}
//         {filteredCampers.length < campers.length && (
//           <button className={s.loadMore} onClick={() => setPage(page + 1)}>
//             Load more
//           </button>
//         )}
//       </Container>
//     </section>
//   );
// };

// export default Catalog;
