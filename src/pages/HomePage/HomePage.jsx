import React from "react";

import s from "./homePage.module.css";

const HomePage = () => {
  return (
    <>
      <div className={s.container}>
        <h1>Campers of your dreams</h1>
        <p>You can find everything you want in our catalog</p>
        <button>View Now</button>
      </div>
    </>
  );
};

export default HomePage;
