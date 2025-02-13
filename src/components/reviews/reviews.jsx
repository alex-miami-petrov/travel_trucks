import { useOutletContext } from "react-router-dom";
import s from "./reviews.module.css";
import BookingForm from "../bookingForm/bookingForm.jsx";
import StarRating from "../../utils/starRating/starRating.jsx";

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
                <article>
                  <div className={s.avatar}>
                    <p className={s.reviewerInitial}>
                      {getFirstLetter(reviewer_name)}
                    </p>
                    <div className={s.nameStarWrap}>
                      <p>{reviewer_name}</p>
                      <div className={s.starWrap}>
                        <StarRating rating={reviewer_rating} />
                      </div>
                    </div>
                  </div>
                  <p className={s.comment}>{comment}</p>
                </article>
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

export default Reviews;
