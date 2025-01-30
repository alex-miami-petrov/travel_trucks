import React from "react";
import s from "./catalog.module.css";
import Container from "../../utils/container/container.jsx";

const Catalog = () => {
  return (
    <section className={s.catalog}>
      <Container>
        <p className={s.catalogText}>Location</p>
        <form onSubmit={handleSubmit} className={s.form}>
          <div className={`${s.inputGroup} ${errors.name ? s.errorGroup : ""}`}>
            <input
              name="location"
              value={formData.location}
              placeholder="City"
              className={s.input}
            />
            <svg className={s.icon} width="24" height="24">
              <use href={`${icons}#icon-name`} />
            </svg>
      </Container>
    </section>
  );
};

export default Catalog;
