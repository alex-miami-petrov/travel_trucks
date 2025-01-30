import { Navigation } from "../navigation/navigation";
import logo from "../../img/logo.png";

import s from "./appBar.module.css";

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
