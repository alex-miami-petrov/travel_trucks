import React from "react";
import { Link } from "react-router-dom";
import s from "./rewRank.module.css";
import icons from "../../img/icons.svg";

export const RewRank = ({ camper, location }) => {
  const averageRating = camper?.rating;
  const reviewsLength = camper?.reviews?.length;

  return (
    <div className={s.rewLocWrap}>
      <Link to={`/catalog/${camper.id}/reviews`} className={s.rewWrap}>
        <svg className={s.starIcon} width="16" height="16">
          <use href={`${icons}#icon-star`} />
        </svg>
        <p>
          <span className={s.rewSpan}>
            {averageRating.toFixed(1)}
            {reviewsLength && `(${reviewsLength} Reviews)`}
          </span>
        </p>
      </Link>

      <div className={s.locWrap}>
        <svg className={s.mapIcon} width="16" height="16">
          <use href={`${icons}#icon-map`} />
        </svg>
        <p>{location}</p>
      </div>
    </div>
  );
};
