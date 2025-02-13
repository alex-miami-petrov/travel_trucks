import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../redux/favoritesSlice";
import s from "./camperCard.module.css";
import icons from "../../img/icons.svg";
import { Link } from "react-router-dom";
import { featureIcons } from "../../utils/camperUtils";
import { RewRank } from "../../services/rewRank/rewRank.jsx";

const CamperCard = ({ camper }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const isFavorite = favorites.includes(camper.id);

  const location = camper.location.split(", ").reverse().join(", ");

  return (
    <div className={s.camperCard}>
      <img
        src={camper.gallery[0].thumb}
        alt={camper.name}
        className={s.camperImage}
      />
      <div className={s.camperInfo}>
        <div className={s.titleWrap}>
          <div className={s.nameWrap}>
            <h3 className={s.campNameTitle}>{camper.name}</h3>
          </div>

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
        <RewRank camper={camper} location={location} />
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
        <Link to={`/catalog/${camper.id}`}>
          <button className={s.showMore}>Show more</button>
        </Link>
      </div>
    </div>
  );
};

export default CamperCard;
