import React from "react";
import PromoContent from "./PromoContent";
import promoData from "../Data/PromoData";
import { useLanguage, changeLanguage } from "../hooks/LanguageContext";

const PromoModal = ({ onClose }) => {
  const { selectedLanguage, changeLanguage } = useLanguage(); //Язык

  // Обработчик события для закрытия модального окна при клике на заднем фоне
  const handleBackdropClick = () => {
    onClose();
  };

  return (
    <div className="modal" onClick={handleBackdropClick}>
      <div className="container modal__container">
        <div className="modal__content" onClick={(e) => e.stopPropagation()}>
          <PromoContent />
          <button className="modal__btn btn-reset" onClick={onClose}>
            {promoData[0].promoBtnClose[selectedLanguage]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoModal;
