import React from "react";
import s from "./features.module.css";
import { featureIcons } from "../../utils/camperUtils.jsx";
import icons from "../../img/icons.svg";
import { useOutletContext } from "react-router-dom";

const Features = () => {
  const { camper } = useOutletContext();
  return (
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
        <h2 className={s.infoTitle}></h2>
        <div className={s.additionalInfo}>
          <p>
            <strong>Dimensions:</strong> {camper.length} (L) x {camper.width}
            (W) x {camper.height} (H)
          </p>
          <p>
            <strong>Tank Capacity:</strong> {camper.tank}
          </p>
          <p>
            <strong>Fuel Consumption:</strong> {camper.consumption}
          </p>
          <p>
            <strong>Engine:</strong> {camper.engine}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
