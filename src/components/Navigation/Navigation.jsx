import { NavLink } from "react-router-dom";

import s from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav>
      <NavLink className={s.link} to="/">
        Home
      </NavLink>
      <NavLink className={s.link} to="/catalog">
        Catalog
      </NavLink>
    </nav>
  );
};
