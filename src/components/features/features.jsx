import React from "react";
import s from "./features.module.css";
import { featureIcons } from "../../utils/camperUtils.jsx";
import icons from "../../img/icons.svg";
import { useOutletContext } from "react-router-dom";
import BookingForm from "../bookingForm/bookingForm.jsx";

const Features = () => {
  const { camper } = useOutletContext();

  return (
    <>
      <div className={s.featWrap}>
        <div className={s.iconsWrap}>
          {featureIcons.map(({ key, label, icon }) => (
            <div key={key} className={s.iconsItem}>
              <svg width="20" height="20">
                <use href={`${icons}#${icon}`} />
              </svg>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <div className={s.infoWrap}>
          <h2 className={s.infoTitle}>Vehicle details</h2>
          <ul className={s.infoList}>
            <li className={s.infoItem}>
              <p>Form</p>
              <p>{camper.form}</p>
            </li>
            <li className={s.infoItem}>
              <p>Length</p>
              <p>{camper.length}</p>
            </li>
            <li className={s.infoItem}>
              <p>Width</p>
              <p>{camper.width}</p>
            </li>
            <li className={s.infoItem}>
              <p>Height</p>
              <p>{camper.height}</p>
            </li>
            <li className={s.infoItem}>
              <p>Tank</p>
              <p>{camper.tank}</p>
            </li>
            <li className={s.infoItem}>
              <p>Consumption</p>
              <p>{camper.consumption}</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="formWrap">
        <h2 className={s.formTitle}></h2>
        <p className={s.formText}></p>
        <BookingForm />
      </div>
    </>
  );
};

export default Features;
