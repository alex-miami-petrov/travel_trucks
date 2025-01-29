import { Navigation } from "../Navigation/navigation";
import logo from "../../img/logo.png";

import s from "./AppBar.module.css";

export const AppBar = () => {
  return (
    <header className={s.header}>
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
      <Navigation />
    </header>
  );
};
