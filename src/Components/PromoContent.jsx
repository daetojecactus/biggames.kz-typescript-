import React from "react";
import promoData from "../Data/PromoData";
import { useLanguage } from "../hooks/LanguageContext";

const PromoContent = () => {
  const { selectedLanguage } = useLanguage(); //Язык

  //слова которые заключаем в тег strong
  const targetWords = [
    "@bi.group",
    "@bi.group.almaty",
    "@bi.group.batys",
    "@bi.group.shymkent",
  ];

  //заключаем а тег strong
  const highlightText = (text) => {
    const words = text.split(" ");

    return words.map((word, index) => {
      const isTargetWord = targetWords.some((target) => word.includes(target));

      if (isTargetWord) {
        return <strong key={index}>{word}</strong>;
      }

      return word + " ";
    });
  };

  return (
    <div className="action__content">
      <ol className="action__list">
        {promoData[0].promoItems.map((promoItem) => (
          <li key={promoItem.id} className="action__item">
            <p className="action__item-descr">
              {highlightText(promoItem.promoItemDescr[selectedLanguage])}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default PromoContent;
