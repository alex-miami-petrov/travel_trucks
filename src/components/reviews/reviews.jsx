import { useOutletContext } from "react-router-dom";
import s from "./reviews.module.css";
import icons from "../../img/icons.svg";
import BookingForm from "../bookingForm/bookingForm.jsx";

const Reviews = () => {
  const { camper } = useOutletContext();

  if (!camper || !camper.reviews?.length) {
    return <p>No reviews yet.</p>;
  }

  const getFirstLetter = (name) => name.charAt(0).toUpperCase();

  return (
    <div className={s.revContainer}>
      <div className={s.reviews}>
        <ul>
          {camper.reviews.map(
            ({ id, reviewer_name, reviewer_rating, comment }, index) => (
              <li key={id || index} className={s.reviewItem}>
                <div className={s.avatar}>
                  <p className={s.reviewerInitial}>
                    {getFirstLetter(reviewer_name)}
                  </p>
                  <div className={s.nameStarWrap}>
                    <p>{reviewer_name}</p>
                    <p>{renderStars(reviewer_rating)}</p>
                  </div>
                </div>

                <p className={s.comment}>{comment}</p>
              </li>
            )
          )}
        </ul>
      </div>
      <div className={s.formWrap}>
        <BookingForm />
      </div>
    </div>
  );
};

const renderStars = (rating) => {
  if (typeof rating !== "number" || rating < 0 || rating > 5) {
    return null;
  }

  const filledStars = [];
  const emptyStars = [];

  for (let i = 0; i < rating; i++) {
    filledStars.push(
      <svg key={`filled-${i}`} className={s.starIcon} width="16" height="16">
        <use href={`${icons}#icon-star`} />
      </svg>
    );
  }

  for (let i = 0; i < 5 - rating; i++) {
    emptyStars.push(
      <svg key={`empty-${i}`} className={s.starIcon} width="16" height="16">
        <use href={`${icons}#icon-star-empty`} />
      </svg>
    );
  }

  return [...filledStars, ...emptyStars]; // Об'єднуємо заповнені та порожні зірки
};

export default Reviews;
