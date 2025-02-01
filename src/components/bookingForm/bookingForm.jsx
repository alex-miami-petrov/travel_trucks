import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as Yup from "yup";
import s from "./bookingForm.module.css";

const BookingForm = () => {
  const initialValues = {
    name: "",
    email: "",
    bookingDate: new Date(),
    comment: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Enter a valid email address"
      )
      .required("Email is required"),

    bookingDate: Yup.date().required("Booking date is required"),
    comment: Yup.string(),
  });

  const handleSubmit = (values) => {
    console.log("Form data:", values);
  };

  return (
    <div>
      <h2 className={s.formTitle}>Book your campervan now</h2>
      <p className={s.formText}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <div>
              <label htmlFor="name"></label>
              <Field className={s.field} name="name" type="text" />
              <ErrorMessage
                name="name"
                placeholder="Name*"
                component="div"
                style={{ color: "red" }}
              />
            </div>

            <div>
              <label htmlFor="email">Email*</label>
              <Field className={s.field} name="email" type="email" />
              <ErrorMessage
                name="email"
                component="div"
                style={{ color: "red" }}
              />
            </div>

            <div>
              <label htmlFor="bookingDate">Booking date*</label>
              <DatePicker
                className={s.field}
                selected={values.bookingDate}
                onChange={(date) => setFieldValue("bookingDate", date)}
                dateFormat="dd/MM/yyyy"
              />
              <ErrorMessage
                name="bookingDate"
                component="div"
                style={{ color: "red" }}
              />
            </div>

            <div>
              <label htmlFor="comment">Comment</label>
              <Field
                className={s.commentField}
                name="comment"
                as="textarea"
                placeholder="Enter your comment"
              />
              <ErrorMessage
                name="comment"
                component="div"
                style={{ color: "red" }}
              />
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;
