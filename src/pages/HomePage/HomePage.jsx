import { slideInFromRightScale } from "../../components/motion";
import s from "./homePage.module.css";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <>
      <div className={s.container}>
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={slideInFromRightScale()}
          className={s.title}
        >
          Contacts manager welcome page{" "}
        </motion.h1>
      </div>
    </>
  );
}
