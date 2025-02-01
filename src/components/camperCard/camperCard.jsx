// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleFavorite } from "../../redux/favoritesSlice";
// import s from "./camperCard.module.css";
// import icons from "../../img/icons.svg";

// const CamperCard = ({ camper }) => {
//   const dispatch = useDispatch();
//   const favorites = useSelector((state) => state.favorites);
//   const isFavorite = favorites.includes(camper.id);

//   const averageRating = camper.reviews.length
//     ? camper.reviews.reduce(
//         (sum, review) => sum + Number(review.reviewer_rating),
//         0
//       ) / camper.reviews.length
//     : 0;
//   console.log("Average rating for Camper", camper.id, ":", averageRating);
//   return (
//     <div className={s.camperCard}>
//       <img
//         src={camper.gallery[0].thumb}
//         alt={camper.name}
//         className={s.camperImage}
//       />
//       <div className={s.camperInfo}>
//         <div className={s.titleWrap}>
//           <h3 className={s.campNameTitle}>{camper.name}</h3>
//           <div className={s.priceFavWrap}>
//             <p className={s.campPrice}>€{camper.price.toFixed(2)}</p>
//             <div className={s.buttonGroup}>
//               <button
//                 className={s.favBtn}
//                 onClick={() => dispatch(toggleFavorite(camper.id))}
//               >
//                 <svg
//                   className={`${s.inputIcon} ${
//                     isFavorite ? s.iconFavoriteActive : s.iconFavorite
//                   }`}
//                   width="24"
//                   height="24"
//                 >
//                   <use href={`${icons}#icon-heart`} />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className={s.rewLocWrap}>
//           <p>
//             <svg className={s.starIcon} width="16" height="16">
//               <use href={`${icons}#icon-star`} />
//             </svg>
//             <span className={s.rewSpan}>
//               {averageRating.toFixed(1)}({camper.reviews.length} Reviews)
//             </span>
//           </p>
//           <div className={s.locWrap}>
//             <svg className={s.mapIcon} width="16" height="16">
//               <use href={`${icons}#icon-map`} />
//             </svg>
//             <p>{camper.location}</p>
//           </div>
//         </div>

//         <button className={s.showMore}>Show more</button>
//       </div>
//     </div>
//   );
// };

// export default CamperCard;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../redux/favoritesSlice";
import s from "./camperCard.module.css";
import icons from "../../img/icons.svg";

const CamperCard = ({ camper }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const isFavorite = favorites.includes(camper.id);

  const averageRating = camper.reviews.length
    ? camper.reviews.reduce(
        (sum, review) => sum + Number(review.reviewer_rating),
        0
      ) / camper.reviews.length
    : 0;

  const featureIcons = [
    { key: "AC", label: "AC", icon: "icon-ac" },
    { key: "transmission", label: "Automatic", icon: "icon-trans" },
    { key: "kitchen", label: "Kitchen", icon: "icon-kitchen" },
    { key: "TV", label: "TV", icon: "icon-tv" },
    { key: "bathroom", label: "Bathroom", icon: "icon-bath" },
  ];

  return (
    <div className={s.camperCard}>
      <img
        src={camper.gallery[0].thumb}
        alt={camper.name}
        className={s.camperImage}
      />
      <div className={s.camperInfo}>
        <div className={s.titleWrap}>
          <h3 className={s.campNameTitle}>{camper.name}</h3>
          <div className={s.priceFavWrap}>
            <p className={s.campPrice}>€{camper.price.toFixed(2)}</p>
            <div className={s.buttonGroup}>
              <button
                className={s.favBtn}
                onClick={() => dispatch(toggleFavorite(camper.id))}
              >
                <svg
                  className={`${s.inputIcon} ${
                    isFavorite ? s.iconFavoriteActive : s.iconFavorite
                  }`}
                  width="24"
                  height="24"
                >
                  <use href={`${icons}#icon-heart`} />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={s.rewLocWrap}>
          <p>
            <svg className={s.starIcon} width="16" height="16">
              <use href={`${icons}#icon-star`} />
            </svg>
            <span className={s.rewSpan}>
              {averageRating.toFixed(1)}({camper.reviews.length} Reviews)
            </span>
          </p>
          <div className={s.locWrap}>
            <svg className={s.mapIcon} width="16" height="16">
              <use href={`${icons}#icon-map`} />
            </svg>
            <p>{camper.location}</p>
          </div>
        </div>
        <div className={s.reviewWrapper}>
          {camper.reviews.length > 0 && (
            <p className={s.reviewText}>{camper.reviews[0].comment}</p>
          )}
        </div>

        <div className={s.featuresWrap}>
          {featureIcons.map(
            ({ key, label, icon }) =>
              camper[key] && (
                <div key={key} className={s.featureItem}>
                  <svg width="20" height="20">
                    <use href={`${icons}#${icon}`} />
                  </svg>
                  <span>{label}</span>
                </div>
              )
          )}
        </div>

        <button className={s.showMore}>Show more</button>
      </div>
    </div>
  );
};

export default CamperCard;

// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleFavorite } from "../../redux/favoritesSlice";
// import s from "./camperCard.module.css";
// import icons from "../../img/icons.svg";

// const equipmentFilters = [
//   { key: "AC", label: "AC", icon: "icon-ac" },
//   { key: "transmission", label: "Automatic", icon: "icon-trans" },
//   { key: "kitchen", label: "Kitchen", icon: "icon-kitchen" },
//   { key: "TV", label: "TV", icon: "icon-tv" },
//   { key: "bathroom", label: "Bathroom", icon: "icon-bath" },
// ];

// const CamperCard = ({ camper }) => {
//   const dispatch = useDispatch();
//   const favorites = useSelector((state) => state.favorites);
//   const isFavorite = favorites.includes(camper.id);

//   const averageRating = camper.reviews.length
//     ? camper.reviews.reduce((sum, review) => sum + Number(review.reviewer_rating), 0) /
//       camper.reviews.length
//     : 0;

//     const truncateReview = (reviewText) => {
//     if (reviewText.length > 60) {
//       return reviewText.slice(0, 60) + "...";
//     }
//     return reviewText;
//   };

//   return (
//     <div className={s.camperCard}>
//       <img src={camper.gallery[0].thumb} alt={camper.name} className={s.camperImage} />
//       <div className={s.camperInfo}>
//         <div className={s.titleWrap}>
//           <h3 className={s.campNameTitle}>{camper.name}</h3>
//           <div className={s.priceFavWrap}>
//             <p className={s.campPrice}>€{camper.price.toFixed(2)}</p>
//             <div className={s.buttonGroup}>
//               <button className={s.favBtn} onClick={() => dispatch(toggleFavorite(camper.id))}>
//                 <svg
//                   className={`${s.inputIcon} ${isFavorite ? s.iconFavoriteActive : s.iconFavorite}`}
//                   width="24"
//                   height="24"
//                 >
//                   <use href={`${icons}#icon-heart`} />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className={s.rewLocWrap}>
//           <p>
//             <svg className={s.starIcon} width="16" height="16">
//               <use href={`${icons}#icon-star`} />
//             </svg>
//             <span className={s.rewSpan}>
//               {averageRating.toFixed(1)} ({camper.reviews.length} Reviews)
//             </span>
//           </p>
//           <div className={s.locWrap}>
//             <svg className={s.mapIcon} width="16" height="16">
//               <use href={`${icons}#icon-map`} />
//             </svg>
//             <p>{camper.location}</p>
//           </div>
//         </div>
//         {camper.reviews.length > 0 && (
//           <p className={s.reviewText}>{truncateReview(camper.reviews[0].comment)}</p>
//         )}

//         <div className={s.equipmentIcons}>
//           {equipmentFilters
//             .filter((filter) => camper.equipment?.includes(filter.key))
//             .map((filter) => (
//               <svg key={filter.key} className={s.equipmentIcon} width="16" height="16">
//                 <use href={`${icons}#${filter.icon}`} />
//               </svg>
//             ))}
//         </div>

//         <button className={s.showMore}>Show more</button>
//       </div>
//     </div>
//   );
// };

// export default CamperCard;
