import React from "react";
import s from "./imageModal.module.css";
import icons from "../../img/icons.svg";

const Modal = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null;

  return (
    <div className={s.modalOverlay} onClick={closeModal}>
      <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={s.closeBtn} onClick={closeModal}>
          <svg width="20" height="20">
            <use href={`${icons}#icon-close`} />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
