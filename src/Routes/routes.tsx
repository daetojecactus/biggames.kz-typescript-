import React from "react";
import ActionPage from "../Pages/ActionPage";
import AnswerPage from "../Pages/AnswerPage";
import InfoPage from "../Pages/InfoPage";
import InstagramPage from "../Pages/InstagramPage";
import LoginPage from "../Pages/LoginPage";
import MainPage from "../Pages/MainPage";
import NotFoundPage from "../Pages/NotFoundPage";
import QuestionPage from "../Pages/QuestionPage";

//Импортируем маршруты роутера
import { MyRoutes } from "./consts";

// Интерфейс структуры объекта маршрута
interface Route {
  path: string; // Путь маршрута
  Component: React.ComponentType; // Компонент, который будет отображаться при переходе по маршруту
}

//Публичные маршруты
export const publicRoutes: Route[] = [
  {
    path: MyRoutes.MAIN,
    Component: MainPage,
  },
  {
    path: MyRoutes.LOGIN,
    Component: LoginPage,
  },
  {
    path: MyRoutes.ACTION,
    Component: ActionPage,
  },
  {
    path: MyRoutes.NOTFOUND,
    Component: NotFoundPage,
  },
];

//Приватные маршруты
export const privateRoutes: Route[] = [
  {
    path: `${MyRoutes.QUESTION}/:id`,
    Component: QuestionPage,
  },
  {
    path: `${MyRoutes.ANSWER}/:id`,
    Component: AnswerPage,
  },
  {
    path: MyRoutes.INFO,
    Component: InfoPage,
  },
  {
    path: MyRoutes.INSTAGRAM,
    Component: InstagramPage,
  },
];
