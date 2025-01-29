import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";
import { useSelector } from "react-redux";

import s from "./AppBar.module.css";

export const AppBar = () => {
  return (
    <header className={s.header}>
      <Navigation />
    </header>
  );
};
