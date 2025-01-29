import { AppBar } from "../../components/AppBar/AppBar.jsx";
import { slideInFromRightScale } from "../../components/motion";
import s from "./homePage.module.css";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <>
      <div className={s.container}>
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={slideInFromRightScale()}
          className={s.title}
        >
          Contacts manager welcome page <AppBar />
        </motion.h1>
      </div>
    </>
  );
};

export default HomePage;
