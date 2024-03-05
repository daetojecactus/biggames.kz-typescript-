import ActionPage from "./Pages/ActionPage";
import AnswerPage from "./Pages/AnswerPage";
import InfoPage from "./Pages/InfoPage";
import InstagramPage from "./Pages/InstagramPage";
import LoginPage from "./Pages/LoginPage";
import MainPage from "./Pages/MainPage";
import NotFoundPage from "./Pages/NotFoundPage";
import QuestionPage from "./Pages/QuestionPage";

//Импортируем маршруты роутера
import { Routes } from "./consts";

// Интерфейс структуры объекта маршрута
interface Route {
  path: string; // Путь маршрута
  Component: React.ReactNode; // Компонент, который будет отображаться при переходе по маршруту
}

//Публичные маршруты
export const publicRoutes: Route[] = [
  {
    path: Routes.MAIN,
    Component: <MainPage />,
  },
  {
    path: Routes.LOGIN,
    Component: <LoginPage />,
  },
  {
    path: Routes.ACTION,
    Component: <ActionPage />,
  },
  {
    path: Routes.NOTFOUND,
    Component: <NotFoundPage />,
  },
];

//Приватные маршруты
export const privateRoutes: Route[] = [
  {
    path: `${Routes.QUESTION}/:id`,
    Component: <QuestionPage />,
  },
  {
    path: `${Routes.ANSWER}/:id`,
    Component: <AnswerPage />,
  },
  {
    path: Routes.INFO,
    Component: <InfoPage />,
  },
  {
    path: Routes.INSTAGRAM,
    Component: <InstagramPage />,
  },
];
