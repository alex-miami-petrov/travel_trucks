import React from "react";
import s from "./catalog.module.css";
import Container from "../../utils/container/container.jsx";
import icons from "../../img/icons.svg";

const Catalog = () => {
  return (
    <section className={s.catalog}>
      <Container>
        <p className={s.catalogText}>Location</p>
        <form className={s.form}>
          <div className={s.inputWrap}>
            <input
              name="location"
              // value="location"
              placeholder="City"
              className={s.input}
            />
            <svg className={s.inputIcon} width="20" height="20">
              <use href={`${icons}#icon-map`} />
            </svg>
          </div>
        </form>
      </Container>
    </section>
  );
};

export default Catalog;
