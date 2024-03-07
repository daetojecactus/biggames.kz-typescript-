import React, { useContext } from "react";
import { LanguageContext } from "../hooks/LanguageContext";

const LanguageSwitcher: React.FC = () => {
  //Получаем контекст языка
  const context = useContext(LanguageContext);

  //Проверяем есть ли контекст
  if (!context) {
    // Обработка ситуации, когда контекст не определен
    throw new Error("LanguageContext not defined in LanguageSwitcher");
  }

  // Деструктурируем свойства из контекста
  const { selectedLanguage, changeLanguage } = context;

  // Функция для переключения языка
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
