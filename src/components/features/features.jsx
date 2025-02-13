import React from "react";
import s from "./features.module.css";
import { featureIcons } from "../../utils/camperUtils.jsx";
import icons from "../../img/icons.svg";
import { useOutletContext } from "react-router-dom";
import BookingForm from "../bookingForm/bookingForm.jsx";
import { formatMeasurement, formatText } from "../../utils/formatText.jsx";

const Features = () => {
  const { camper } = useOutletContext();

  const camperInfo = [
    { label: "Form", value: formatText(camper.form) },
    { label: "Length", value: formatMeasurement(camper.length) },
    { label: "Width", value: formatMeasurement(camper.width) },
    { label: "Height", value: formatMeasurement(camper.height) },
    { label: "Tank", value: formatMeasurement(camper.tank) },
    { label: "Consumption", value: camper.consumption },
  ];

  return (
    <div className={s.featContainer}>
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
            {camperInfo.map(({ label, value }) => (
              <li key={label} className={s.infoItem}>
                <p>{label}</p>
                <p>{value}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={s.formWrap}>
        <BookingForm />
      </div>
    </div>
  );
};

export default Features;
