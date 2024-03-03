//Страница для сторис
import { TranslationKeys } from "./DataInterfaces";

// интерфейс InstagramData
interface InstagramData {
  topLink: TranslationKeys;
  title: TranslationKeys;
  subTitleTop: TranslationKeys;
  descrTop: TranslationKeys;
  imgTop: string;
  subTitleMiddle: TranslationKeys;
  descrMiddle: TranslationKeys;
  imgMiddle: string;
  subTitleBad: TranslationKeys;
  descrBad: TranslationKeys;
  imgBad: string;
  bottomNotice: TranslationKeys;
  buttonSearch: TranslationKeys;
  buttonInstagram: TranslationKeys;
}

//массив с объектами, которые соответсвуют интерфейсу InstagramData
const instagramData: InstagramData[] = [
  {
    topLink: {
      ru: "Пройти игру еще раз",
      kz: "Ойынды қайтадан жеңіңіз",
    },
    title: {
      ru: "Мы сыграли свадьбу!",
      kz: "Біз той жасадық!",
    },
    subTitleTop: {
      ru: "Я - экономный человек",
      kz: "Мен үнемшіл адаммын.",
    },
    descrTop: {
      ru: "Я просто гуру финансов! И свадьбу сыграли и квартиру в BI Group купили!🏡",
      kz: "Мен нағыз қаржы шеберімін! Үйлену тойын да жасадық, BI Group-тан пәтер де сатып алдық! 🏡",
    },
    imgTop: "/images/inst-top.jpg",
    subTitleMiddle: {
      ru: "И свадьба хорошая, и деньги остались ",
      kz: "Сүйлену тойы да жақсы өтті, ақша да қалды.",
    },
    descrMiddle: {
      ru: "Моя свадьба прошла на ура, а еще и на квартиру деньги остались.🥳",
      kz: "Үйлену тойым керемет өтті, әрі пәтерге де ақша қалды.🥳",
    },
    imgMiddle: "/images/inst-middle.jpg",
    subTitleBad: {
      ru: "Я люблю делать все с размахом",
      kz: "Мен бәрін дүркіретіп жасағанды жақсы көремін.",
    },
    descrBad: {
      ru: "Мы сыграли лучшую свадьбу на планете, правда экономить мы не умеем 😅",
      kz: "Біз ғаламшардағы ең жақсы үйлену тойын өткіздік, бірақ ақшаны қалай үнемдеуді білмейміз 😅",
    },
    imgBad: "/images/inst-bad.jpg",
    bottomNotice: {
      ru: "Условия конкурса",
      kz: "Конкурстың шарттары",
    },
    buttonSearch: {
      ru: "ЖК для вас",
      kz: "Сізге арналған ТК",
    },
    buttonInstagram: {
      ru: "Инстаграм",
      kz: "Инстаграм",
    },
  },
];

export default instagramData;
