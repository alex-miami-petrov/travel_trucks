// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleFavorite } from "../../redux/favoritesSlice";
// import s from "./camperCard.module.css";

// const CamperCard = ({ camper }) => {
//   const dispatch = useDispatch();
//   const favorites = useSelector((state) => state.favorites);
//   const isFavorite = favorites.includes(camper.id);

//   const averageRating =
//     camper.reviews.length > 0
//       ? camper.reviews.reduce(
//           (sum, review) => sum + review.reviewer_rating,
//           0
//         ) / camper.reviews.length
//       : 0;

//   return (
//     <div className={s.card}>
//       <img
//         src={camper.gallery[0].thumb}
//         alt={camper.name}
//         className={s.image}
//       />
//       <div className={s.details}>
//         <h3>{camper.name}</h3>
//         <p>
//           ⭐ {averageRating.toFixed(1)} ({camper.reviews.length} Reviews)
//         </p>
//         <p>€{camper.price}</p>
//         <p>{camper.location}</p>
//         <button
//           className={isFavorite ? s.favoriteActive : s.favorite}
//           onClick={() => dispatch(toggleFavorite(camper.id))}
//         >
//           {isFavorite ? "❤️" : "🤍"}
//         </button>
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

  const averageRating =
    camper.reviews.length > 0
      ? camper.reviews.reduce(
          (sum, review) => sum + review.reviewer_rating,
          0
        ) / camper.reviews.length
      : 0;

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

        <p>{camper.location}</p>
        <p>
          ⭐ {averageRating.toFixed(1)} ({camper.reviews.length} Reviews)
        </p>

        <button className={s.showMore}>Show more</button>
      </div>
    </div>
  );
};

export default CamperCard;
