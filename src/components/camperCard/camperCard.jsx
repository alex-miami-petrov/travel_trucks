import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../redux/favoritesSlice";
import s from "./camperCard.module.css";

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
    <div className={s.card}>
      <img
        src={camper.gallery[0].thumb}
        alt={camper.name}
        className={s.image}
      />
      <div className={s.details}>
        <h3>{camper.name}</h3>
        <p>
          ⭐ {averageRating.toFixed(1)} ({camper.reviews.length} Reviews)
        </p>
        <p>€{camper.price}</p>
        <p>{camper.location}</p>
        <button
          className={isFavorite ? s.favoriteActive : s.favorite}
          onClick={() => dispatch(toggleFavorite(camper.id))}
        >
          {isFavorite ? "❤️ Remove from Favorites" : "🤍 Add to Favorites"}
        </button>
      </div>
    </div>
  );
};

export default CamperCard;
