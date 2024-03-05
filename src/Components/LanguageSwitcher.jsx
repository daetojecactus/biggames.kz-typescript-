import React, { useContext } from "react";
import { LanguageContext } from "../hooks/LanguageContext";

const LanguageSwitcher = () => {
  const { selectedLanguage, changeLanguage } = useContext(LanguageContext);

  const toggleLanguage = () => {
    changeLanguage(selectedLanguage === "kz" ? "ru" : "kz");
  };

  return (
    <div className="language-switcher">
      <button
        className="language-switcher__btn btn-reset"
        onClick={toggleLanguage}
      >
        {selectedLanguage === "kz" ? "KZ" : "RU"}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
