import React from "react";
import s from "./home.module.css";
import Container from "../../utils/container/container.jsx";

const Home = () => {
  return (
    <section className={s.home}>
      <Container>
        <div className={s.homeWrap}>
          <h1 className={s.homeTitle}>Campers of your dreams</h1>
          <p className={s.homeText}>
            You can find everything you want in our catalog
          </p>
          <a className={s.homeLink} href="/catalog">
            View Now
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Home;
