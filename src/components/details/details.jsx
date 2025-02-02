import React, { Suspense, useEffect, useState } from "react";
import {
  NavLink,
  Outlet,
  useNavigate,
  useParams,
  useLocation,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCamperById } from "../../redux/campers/operations.js";
import s from "./details.module.css";
import icons from "../../img/icons.svg";
import { calculateAverageRating } from "../../utils/camperUtils";
import Container from "../../utils/container/container.jsx";
import Modal from "../imageModal/imageModal.jsx";
import {
  selectError,
  selectLoading,
  selectSelectedCamper,
} from "../../redux/campers/selectors.js";
import { RewRank } from "../../services/rewRank/rewRank.jsx";

const Details = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const camper = useSelector(selectSelectedCamper);

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (id) {
      dispatch(fetchCamperById(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (
      camper &&
      !location.pathname.includes("features") &&
      !location.pathname.includes("reviews")
    ) {
      navigate(`/catalog/${id}/features`, { replace: true });
    }
  }, [camper, id, location, navigate]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!camper) {
    return <p>No camper data available.</p>;
  }

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const locationString = camper.location.split(", ").reverse().join(", ");

  return (
    <section className={s.camperDetails}>
      <Container>
        <div className={s.header}>
          <h2 className={s.title}>{camper.name}</h2>
        </div>
        <RewRank camper={camper} location={locationString} />
        <p className={s.price}>€{camper.price.toFixed(2)}</p>
        <div className={s.gallery}>
          {camper.gallery?.map((img, index) => (
            <img
              key={index}
              src={img.original}
              alt={`${camper.name} ${index + 1}`}
              className={s.galleryImage}
              onClick={() => img.original && handleImageClick(img.original)}
            />
          ))}
        </div>

        <p className={s.description}>{camper.description}</p>

        <ul className={s.infoList}>
          <li>
            <NavLink
              to="features"
              className={({ isActive }) => (isActive ? s.activeLink : "")}
            >
              Features
            </NavLink>
          </li>
          <li>
            <NavLink
              to="reviews"
              className={({ isActive }) => (isActive ? s.activeLink : "")}
            >
              Reviews
            </NavLink>
          </li>
        </ul>

        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet context={{ camper }} />
        </Suspense>
      </Container>

      <Modal isOpen={!!selectedImage} closeModal={handleCloseModal}>
        <img src={selectedImage} alt="Selected" className={s.modalImage} />
      </Modal>
    </section>
  );
};

export default Details;
