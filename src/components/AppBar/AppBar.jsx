import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { AuthNav } from "../AuthNav/AuthNav";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import s from "./AppBar.module.css";

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const user = useSelector(selectUser);

  return (
    <header className={s.header}>
      <Navigation />
      {/* <div>Welcome, {user.name}</div> */}
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
