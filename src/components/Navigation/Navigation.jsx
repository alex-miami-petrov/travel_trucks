import { NavLink, useLocation } from "react-router-dom";
import s from "./navigation.module.css";

export const Navigation = () => {
  const location = useLocation();
  const isDetailsPage = /^\/catalog\/[^/]+(\/features|\/reviews)?$/.test(
    location.pathname
  );
  return (
    <nav className={s.nav}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${s.link} ${s.active}` : s.link
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/catalog"
        className={({ isActive }) =>
          isActive && !isDetailsPage ? `${s.link} ${s.active}` : s.link
        }
      >
        Catalog
      </NavLink>
    </nav>
  );
};
