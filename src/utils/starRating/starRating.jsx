import React from "react";
import icons from "../../img/icons.svg";
import s from "./starRating.module.css";

const StarRating = ({ rating }) => {
  if (typeof rating !== "number" || rating < 0 || rating > 5) {
    return null;
  }

  const filledStars = [];
  const emptyStars = [];

  for (let i = 0; i < rating; i++) {
    filledStars.push(
      <svg
        key={`filled-${i}`}
        className={`${s.starIcon}`}
        width="16"
        height="16"
      >
        <use href={`${icons}#icon-star`} />
      </svg>
    );
  }

  for (let i = 0; i < 5 - rating; i++) {
    emptyStars.push(
      <svg
        key={`empty-${i}`}
        className={`${s.starIconEmpty}`}
        width="16"
        height="16"
      >
        <use href={`${icons}#icon-star-empty`} />
      </svg>
    );
  }

  return [...filledStars, ...emptyStars];
};

export default StarRating;
