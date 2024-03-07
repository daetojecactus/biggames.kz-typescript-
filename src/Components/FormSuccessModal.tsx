import React from "react";
import { useLanguage } from "../hooks/LanguageContext";
import formData from "../Data/FormData";
import { useNavigate } from "react-router-dom";
import { MyRoutes } from "../Routes/consts";

interface FormSuccessModalProps {
  onClose: () => void;
}

const FormSuccessModal: React.FC<FormSuccessModalProps> = ({ onClose }) => {
  const { selectedLanguage } = useLanguage(); //Язык
  const navigate = useNavigate(); //Навигация

  //Кнопка Перейти на главную
  const handleClickReturn = () => {
    navigate(MyRoutes.MAIN);
    onClose(); // Закрыть модальное окно после навигации
  };

  //Кнопка ЖК для вас
  const handleClickInfo = () => {
    navigate(MyRoutes.INFO);
    onClose(); // Закрыть модальное окно после навигации
  };

  // Обработчик события для закрытия модального окна при клике на заднем фоне
  const handleBackdropClick = () => {
    onClose();
  };

  return (
    <div className="modal" onClick={handleBackdropClick}>
      <div className="container modal__container">
        <div className="modal__content" onClick={(e) => e.stopPropagation()}>
          <img
            src="/images/success.png"
            alt="успех"
            className="modal__content-image"
          />
          <h2 className="modal__content-success">
            {formData[0].formSuccessTitle[selectedLanguage]}
          </h2>
          <div className="modal__content-wrapper">
            <button
              className="modal__btn-return btn-reset"
              onClick={handleClickReturn}
            >
              {formData[0].formSuccessBtnReturn[selectedLanguage]}
            </button>
            <button
              className="modal__btn-back btn-reset"
              onClick={handleClickInfo}
            >
              {formData[0].formSuccessBtnInfo[selectedLanguage]}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSuccessModal;
