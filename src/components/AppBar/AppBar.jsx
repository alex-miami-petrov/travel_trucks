import { Navigation } from "../navigation/navigation";
import logo from "../../img/logo.png";

import s from "./appBar.module.css";
import { NavLink } from "react-router-dom";

export const AppBar = () => {
  return (
    <header className={s.header}>
      <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink>

      <Navigation />
    </header>
  );
};
