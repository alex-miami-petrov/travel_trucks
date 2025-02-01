import React, { Suspense, useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import s from "./details.module.css";
import icons from "../../img/icons.svg";
import { calculateAverageRating } from "../../utils/camperUtils";
import Container from "../../utils/container/container.jsx";
import Modal from "../imageModal/imageModal.jsx";

const API_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

const Details = () => {
  const { id } = useParams();
  const [camper, setCamper] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); // Стан для вибраної картинки
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCamperById = async () => {
      if (!id) {
        console.error("Missing camper ID!");
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const res = await axios.get(`${API_URL}/${id}`);
        setCamper(res.data);
      } catch (err) {
        setError("Failed to load camper data");
      } finally {
        setLoading(false);
      }
    };

    fetchCamperById();
  }, [id]);

  useEffect(() => {
    if (camper) {
      navigate(`/catalog/${id}/features`, { replace: true });
    }
  }, [camper, id, navigate]);

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

  const averageRating = calculateAverageRating(camper.reviews, camper.rating);

  const location = camper.location.split(", ").reverse().join(", ");

  return (
    <section className={s.camperDetails}>
      <Container>
        <div className={s.header}>
          <h2 className={s.title}>{camper.name}</h2>
        </div>
        <div className={s.rewLocWrap}>
          <p>
            <svg className={s.starIcon} width="16" height="16">
              <use href={`${icons}#icon-star`} />
            </svg>
            <span className={s.rewSpan}>
              {averageRating.toFixed(1)}
              {camper.reviews?.length && `(${camper.reviews.length} Reviews)`}
            </span>
          </p>
          <div className={s.locWrap}>
            <svg className={s.mapIcon} width="16" height="16">
              <use href={`${icons}#icon-map`} />
            </svg>
            <p>{location}</p>
          </div>
        </div>
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
