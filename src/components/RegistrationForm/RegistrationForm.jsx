import { Field, Formik, Form } from "formik";
import React from "react";
import s from "./RegistrationForm.module.css";
import { register } from "../../redux/auth/operations";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { slideInFromRight } from "../../components/motion";
import { useDispatch } from "react-redux";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Це поле обов'язкове"),
    email: Yup.string()
      .email("Неправильний формат email")
      .required("Це поле обов'язкове"),
    password: Yup.string().required("Це поле обов'язкове"),
  });

  const handleSubmit = (values, options) => {
    dispatch(register(values));
    options.resetForm();
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideInFromRight()}
    >
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <Form className={s.form}>
            <label className={s.label} htmlFor="name">
              Name
            </label>
            <Field
              className={s.field}
              id="name"
              name="name"
              placeholder="Jane"
            />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}
            <label htmlFor="email" className={s.label}>
              Email
            </label>
            <Field
              className={s.field}
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
            />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <label htmlFor="password" className={s.label}>
              Password
            </label>
            <Field
              className={s.field}
              id="password"
              name="password"
              placeholder="password"
              type="password"
            />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            <button type="submit" className={s.btn}>
              Register
            </button>
          </Form>
        )}
      </Formik>
    </motion.div>
  );
};

export default RegistrationForm;
