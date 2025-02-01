import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as Yup from "yup";
import s from "./bookingForm.module.css";
import { startOfDay } from "date-fns";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import enGB from "date-fns/locale/en-GB";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { format } from "date-fns";

registerLocale("en-GB", enGB);

const BookingForm = () => {
  const datePickerId = "bookingDate";
  const initialValues = {
    name: "",
    email: "",
    bookingDate: null,
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
    const formattedDate = values.bookingDate
      ? format(values.bookingDate, "dd/MM/yyyy")
      : "";

    const formData = {
      ...values,
      bookingDate: formattedDate,
    };

    toast.success("Your booking was successfully submitted!", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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
              <Field
                className={s.field}
                name="name"
                type="text"
                id="name"
                placeholder="Name*"
                autoComplete="name"
              />
              <ErrorMessage
                name="name"
                component="div"
                style={{ color: "red" }}
              />
            </div>

            <div>
              <label htmlFor="email"></label>
              <Field
                className={s.field}
                name="email"
                type="email"
                id="email"
                placeholder="Email*"
                autoComplete="email"
              />
              <ErrorMessage
                name="email"
                component="div"
                style={{ color: "red" }}
              />
            </div>

            <div>
              <DatePicker
                id={datePickerId}
                className={s.field}
                placeholderText="Booking date*"
                selected={values.bookingDate || null}
                onChange={(date) => {
                  const cleanedDate = startOfDay(date);
                  setFieldValue("bookingDate", cleanedDate);
                }}
                dateFormat="dd/MM/yyyy"
                locale="en-GB"
                weekStartsOn={1}
                showTimeSelect={false}
                autoComplete="off"
              />
              <ErrorMessage
                name="bookingDate"
                component="div"
                style={{ color: "red" }}
              />
            </div>

            <div>
              <label htmlFor="comment"></label>
              <Field
                className={s.commentField}
                name="comment"
                id="comment"
                as="textarea"
                placeholder="Comment"
                autoComplete="off"
              />
              <ErrorMessage
                name="comment"
                component="div"
                style={{ color: "red" }}
              />
            </div>

            <button className={s.subBtn} type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>

      <ToastContainer />
    </div>
  );
};

export default BookingForm;
