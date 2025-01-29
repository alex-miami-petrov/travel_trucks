import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
// import { addContact } from "../../redux/contactsSlice";
import { addContact } from "../../redux/contacts/operations";

// const formatPhoneNumber = (number) => {
//   const cleaned = number.replace(/\D/g, "");

//   const match = cleaned.match(/^(\d{3})(\d{2})(\d{2})$/);
//   if (match) {
//     return `${match[1]}-${match[2]}-${match[3]}`;
//   }

//   return cleaned;
// };

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters long")
    .max(50, "Name must be at most 50 characters long")
    .required("Name is required"),
  number: Yup.string()
    .max(7, "Number must be at most 7 digits long")
    .matches(/^\d*$/, "Number must contain only digits")
    .required("Number is required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        handleSubmit(values, { resetForm });
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, setFieldValue, values }) => (
        <Form className={s.contactForm}>
          <div className={s.formField}>
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" className={s.error} />
          </div>
          <div className={s.formField}>
            <label htmlFor="number">Number</label>
            <Field
              type="text"
              id="number"
              name="number"
              value={values.number}
              onChange={(event) => {
                const { value } = event.target;

                if (value.length <= 7 && /^\d*$/.test(value)) {
                  setFieldValue("number", value);
                }
              }}
            />
            <ErrorMessage name="number" component="div" className={s.error} />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Add Contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
