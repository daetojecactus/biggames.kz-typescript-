import React, { useState } from "react";
import LogoTop from "../Components/LogoTop";
import { useTotalCost } from "../hooks/TotalCostContext";
import { useLanguage } from "../hooks/LanguageContext";
import instagramData from "../Data/InstagramData";
import { Link } from "react-router-dom";
import { MyRoutes } from "../Routes/consts";
import PromoModal from "../Components/PromoModal";

const InstagramPage: React.FC = () => {
  const { totalCost } = useTotalCost(); //Итоговая стоимость
  const { selectedLanguage } = useLanguage(); //Язык
  const [isModalVisible, setModalVisible] = useState<boolean>(false); //Состояние модалки

  //Открываем модалку
  const openModal = () => {
    setModalVisible(true);
  };

  //закрываем модалку
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <section className="final-story" id="final-story">
      <div className="container final-story__container">
        <div className="final-story__return">
          <Link to={MyRoutes.MAIN} className="final-story__return-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41"
              height="8"
              viewBox="0 0 41 8"
              fill="none"
            >
              <path
                d="M0.646446 4.35355C0.451183 4.15829 0.451183 3.84171 0.646446 3.64645L3.82843 0.464466C4.02369 0.269204 4.34027 0.269204 4.53553 0.464466C4.7308 0.659728 4.7308 0.976311 4.53553 1.17157L1.70711 4L4.53553 6.82843C4.7308 7.02369 4.7308 7.34027 4.53553 7.53553C4.34027 7.7308 4.02369 7.7308 3.82843 7.53553L0.646446 4.35355ZM41 4.5H1V3.5H41V4.5Z"
                fill="#fff"
              />
            </svg>
            {instagramData[0].topLink[selectedLanguage]}
          </Link>
        </div>
        <div className="final-story__content">
          <div className="final-story__box">
            <LogoTop />
            <div className="final-story__top">
              <div className="game__progress final-story__progress">
                <div className="game__progress-line final-story__progress-line">
                  <span className="game__progress-coast final-story__progress-coast">
                    {totalCost.toLocaleString("ru-RU")} тг
                  </span>
                </div>
              </div>
            </div>
            <div className="final-story__bottom">
              <h2 className="final-story__title">
                {instagramData[0].title[selectedLanguage]}
              </h2>
              <p className="final-story__subtitle">
                {" "}
                {totalCost <= 2500000 && (
                  <>{instagramData[0].subTitleBad[selectedLanguage]}</>
                )}
                {totalCost > 2500000 && totalCost <= 3500000 && (
                  <>{instagramData[0].subTitleMiddle[selectedLanguage]}</>
                )}
                {totalCost > 3500000 && totalCost <= 5000000 && (
                  <>{instagramData[0].subTitleTop[selectedLanguage]}</>
                )}
              </p>
              {totalCost <= 2500000 && (
                <img
                  src="/images/inst-bad.jpg"
                  alt="#"
                  className="final-story__image"
                />
              )}
              {totalCost > 2500000 && totalCost <= 3500000 && (
                <img
                  src="/images/inst-middle.jpg"
                  alt="#"
                  className="final-story__image"
                />
              )}
              {totalCost > 3500000 && totalCost <= 5000000 && (
                <img
                  src="/images/inst-top.jpg"
                  alt="#"
                  className="final-story__image"
                />
              )}

              <p className="final-story__descr">
                {totalCost <= 2500000 && (
                  <>{instagramData[0].descrBad[selectedLanguage]}</>
                )}
                {totalCost > 2500000 && totalCost <= 3500000 && (
                  <>{instagramData[0].descrMiddle[selectedLanguage]}</>
                )}
                {totalCost > 3500000 && totalCost <= 5000000 && (
                  <>{instagramData[0].descrTop[selectedLanguage]}</>
                )}
              </p>
            </div>
          </div>
        </div>
        <button className="final-story__notice btn-reset" onClick={openModal}>
          {instagramData[0].bottomNotice[selectedLanguage]}
        </button>
        <div className="final-story__down">
          <Link to={MyRoutes.INFO} className="final-story__btn-info">
            {instagramData[0].buttonSearch[selectedLanguage]}
          </Link>
          <a
            href="https://www.instagram.com/bi.group/"
            className="final-story__btn-instagram"
            target="_blank"
            rel="noreferrer"
          >
            {instagramData[0].buttonInstagram[selectedLanguage]}
          </a>
        </div>
        {isModalVisible && <PromoModal onClose={closeModal} />}
      </div>
    </section>
  );
};

export default InstagramPage;
