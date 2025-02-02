// import React from "react";
// import s from "./home.module.css";
// import Container from "../../utils/container/container.jsx";
// import { NavLink } from "react-router-dom";

// const Home = () => {
//   return (
//     <section className={s.home}>
//       <Container>
//         <h1 className={s.homeTitle}>Campers of your dreams</h1>
//         <p className={s.homeText}>
//           You can find everything you want in our catalog
//         </p>
//         <NavLink className={s.homeLink} to="/catalog">
//           View Now
//         </NavLink>
//       </Container>
//     </section>
//   );
// };

// export default Home;

import React from "react";
import s from "./home.module.css";
import Container from "../../utils/container/container.jsx";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <section className={s.home}>
      <Container>
        <h1 className={s.homeTitle}>Campers of your dreams</h1>
        <p className={s.homeText}>
          You can find everything you want in our catalog
        </p>
        <NavLink className={s.homeLink} to="/catalog">
          View Now
        </NavLink>
      </Container>
    </section>
  );
};

export default Home;
