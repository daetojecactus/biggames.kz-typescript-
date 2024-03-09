import React, { useContext } from "react";
import { LanguageContext } from "../hooks/LanguageContext";

interface LanguageSwitcherProps {
  selectedLanguage: string;
  onChange: (language: string) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  selectedLanguage,
  onChange,
}) => {
  // Функция для переключения языка
  const toggleLanguage = () => {
    onChange(selectedLanguage === "kz" ? "ru" : "kz");
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
