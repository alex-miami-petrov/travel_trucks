import React from "react";
import s from "./rewRank.module.css";
import icons from "../../img/icons.svg";

export const RewRank = ({ camper, location }) => {
  const averageRating = camper?.rating;
  const reviewsLength = camper?.reviews?.length;

  return (
    <div className={s.rewLocWrap}>
      <div className={s.rewWrap}>
        <svg className={s.starIcon} width="16" height="16">
          <use href={`${icons}#icon-star`} />
        </svg>
        <p>
          <span className={s.rewSpan}>
            {averageRating.toFixed(1)}
            {reviewsLength && `(${reviewsLength} Reviews)`}
          </span>
        </p>
      </div>

      <div className={s.locWrap}>
        <svg className={s.mapIcon} width="16" height="16">
          <use href={`${icons}#icon-map`} />
        </svg>
        <p>{location}</p>
      </div>
    </div>
  );
};
