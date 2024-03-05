import React, { createContext, useContext, useState, ReactNode } from "react";

// Определяем тип контекста
interface LanguageContextProps {
  selectedLanguage: string;
  changeLanguage: (language: string) => void;
}

// Создаем контекст с явным указанием типа
export const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

// Определяем тип для провайдера контекста
interface LanguageProviderProps {
  children: ReactNode;
}

// Создаем провайдер контекста
export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}: LanguageProviderProps) => {
  // Состояние для хранения выбранного языка, по умолчанию казахский
  const [selectedLanguage, setSelectedLanguage] = useState("kz");

  // Функция для изменения выбранного языка
  const changeLanguage = (language: string) => {
    setSelectedLanguage(language);
  };

  // Значение контекста, предоставляемого провайдером
  const contextValue: LanguageContextProps = {
    selectedLanguage,
    changeLanguage,
  };

  // Используем React.createElement
  return React.createElement(
    LanguageContext.Provider,
    { value: contextValue },
    children
  );
};

// Создаем хук для доступа к выбранному языку и функции смены языка
export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);

  // Проверка наличия контекста, чтобы избежать ошибок во время выполнения
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
};
