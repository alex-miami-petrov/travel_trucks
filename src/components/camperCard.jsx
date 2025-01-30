import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../redux/favoritesSlice";
import s from "./camperCard.module.css";

const CamperCard = ({ camper }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const isFavorite = favorites.includes(camper.id);

  return (
    <div className={s.card}>
      <img src={camper.image} alt={camper.name} className={s.image} />
      <div className={s.details}>
        <h3>{camper.name}</h3>
        <p>
          ⭐ {camper.rating} ({camper.reviews.length} Reviews)
        </p>
        <p>€{camper.price}</p>
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
